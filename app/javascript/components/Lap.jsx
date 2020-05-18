import React from "react";
import { cinemaQuestions } from "./cinemaQuestions";

class Lap extends React.Component {
  state = {
    currentQuestion: 0,
    myAnswer: null,
    options: [],
    score: 0,
    disabled: true,
    isEnd: false
  };

  loadCinemaQuestions = () => {
    // console.log(cinemaQuestions[0].question)
    this.setState(() => {
      return {
        questions: cinemaQuestions[this.state.currentQuestion].question,
        answer: cinemaQuestions[this.state.currentQuestion].answer,
        options: cinemaQuestions[this.state.currentQuestion].options
      };
    });
  };

  componentDidMount() {
    this.loadCinemaQuestions();
  }
  nextQuestionHandler = () => {
    // console.log('test')
    const { myAnswer, answer, score } = this.state;

    if (myAnswer === answer) {
      this.setState({
        score: score + 1
      });
    }

    this.setState({
      currentQuestion: this.state.currentQuestion + 1
    });
    console.log(this.state.currentQuestion);
  };

  componentDidUpdate(prevProps, prevState) {
    if (this.state.currentQuestion !== prevState.currentQuestion) {
      this.setState(() => {
        return {
          disabled: true,
          questions: cinemaQuestions[this.state.currentQuestion].question,
          options: cinemaQuestions[this.state.currentQuestion].options,
          answer: cinemaQuestions[this.state.currentQuestion].answer
        };
      });
    }
  }
  //check answer
  checkAnswer = answer => {
    this.setState({ myAnswer: answer, disabled: false });
  };
  finishHandler = () => {
    if (this.state.currentQuestion === cinemaQuestions.length - 1) {
      this.setState({
        isEnd: true
      });
    }
  };
  render() {
    const { options, myAnswer, currentQuestion, isEnd } = this.state;

    if (isEnd) {
      return (
        <div className="result">
          <h3>
            Игра закончена, количество набранных очков: {this.state.score}{" "}
          </h3>
          <p>
            Правильные ответы:
            <ul>
              {cinemaQuestions.map((item, index) => (
                <li key={index}>{item.answer}</li>
              ))}
            </ul>
          </p>
        </div>
      );
    } else {
      return (
        <div className="App">
          <h1>{this.state.questions} </h1>
          <span>{`Пройдено ${currentQuestion}  из ${cinemaQuestions.length -
            1} вопросов `}</span>
          {options.map(option => (
            <p
              key={option.id}
              className={`
         ${myAnswer === option ? "selected" : null}
         `}
              onClick={() => this.checkAnswer(option)}
            >
              {option}
            </p>
          ))}
          {currentQuestion < cinemaQuestions.length - 1 && (
            <button
              disabled={this.state.disabled}
              onClick={this.nextQuestionHandler}
            >
              Следующий вопрос
            </button>
          )}
          {/* //adding a finish button */}
          {currentQuestion === cinemaQuestions.length - 1 && (
            <button onClick={this.finishHandler}>Завершить</button>
          )}
        </div>
      );
    }
  }
}

export default Lap;
