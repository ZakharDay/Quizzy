import React from 'react'
import { questions } from './questions'

export default class Lap extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentQuestion: 0,
      myAnswer: null,
      options: [],
      score: 0,
      disabled: true,
      isEnd: false
    }

    this.loadQuestion = this.loadQuestion.bind(this)
    this.nextQuestionHandler = this.nextQuestionHandler.bind(this)
    this.checkAnswer = this.checkAnswer.bind(this)
    this.finishHandler = this.finishHandler.bind(this)
  }

  loadQuestion() {
    fetch(`http://localhost:3000/api/questions/random.json`)
      .then(response => {
        return response.json()
      })
      .then(data => {
        console.log(data)
        let { question_text, answer, option } = data
        this.setState({
          questions: question_text,
          answer,
          options: JSON.parse(option)
        })
      })

    console.log(questions[0].question)
  }

  componentDidMount() {
    this.loadQuestion()
  }

  nextQuestionHandler() {
    console.log('test')
    const { myAnswer, answer, score } = this.state

    if (myAnswer === answer) {
      this.setState({
        score: score + 1
      })
    }

    this.setState({
      currentQuestion: this.state.currentQuestion + 1
    })
    console.log(this.state.currentQuestion)
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.currentQuestion !== prevState.currentQuestion) {
      this.setState(() => {
        return {
          disabled: true,
          questions: questions[this.state.currentQuestion].question,
          options: questions[this.state.currentQuestion].options,
          answer: questions[this.state.currentQuestion].answer
        }
      })
    }
  }

  //check answer
  checkAnswer(answer) {
    this.setState({ myAnswer: answer, disabled: false })
  }

  finishHandler() {
    if (this.state.currentQuestion === questions.length - 1) {
      this.setState({
        isEnd: true
      })
    }
  }

  renderOptions() {
    const { options, myAnswer } = this.state
    let elements = []

    if (Array.isArray(options)) {
      options.forEach(option => {
        elements.push(
          <p
            key={option.id}
            className={`
     ${myAnswer === option ? 'selected' : null}
     `}
            onClick={() => this.checkAnswer(option)}
          >
            {option}
          </p>
        )
      })
    } else {
      elements.push(
        <p
          key={options.id}
          className={`
   ${myAnswer === options ? 'selected' : null}
   `}
          onClick={() => this.checkAnswer(options)}
        >
          {options}
        </p>
      )
    }

    return elements
  }

  render() {
    const { options, myAnswer, currentQuestion, isEnd } = this.state

    if (isEnd) {
      return (
        <div className="result">
          <h3>
            Игра закончена, количество набранных очков: {this.state.score + 1}{' '}
          </h3>
          <p>
            Правильные ответы:
            <ul>
              {questions.map((item, index) => (
                <li key={index}>{item.answer}</li>
              ))}
            </ul>
          </p>
        </div>
      )
    } else {
      return (
        <div className="App">
          <h1>{this.state.questions} </h1>
          <span>{`Пройдено ${currentQuestion}  из ${questions.length} вопросов `}</span>
          {this.renderOptions()}
          {currentQuestion < questions.length - 1 && (
            <button
              disabled={this.state.disabled}
              onClick={this.nextQuestionHandler}
            >
              Следующий вопрос
            </button>
          )}
          {/* //adding a finish button */}
          {currentQuestion === questions.length - 1 && (
            <button onClick={this.finishHandler}>Завершить</button>
          )}
        </div>
      )
    }
  }
}
