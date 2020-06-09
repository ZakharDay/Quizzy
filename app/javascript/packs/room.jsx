import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import { ActionCableProvider } from 'react-actioncable-provider'

import Lap from '../components/Lap'

function callServer(id) {
  console.log('hello', id)
  fetch(`http://localhost:3000/api/questions/${id}.json`)
    .then(response => {
      return response.json()
    })
    .then(data => {
      console.log(data)
    })
}

const Question = props => {
  console.log(props)

  return (
    <div>
      <div onClick={() => callServer(props.id)}>{props.question_text}</div>
    </div>
  )
}

const App = props => {
  // let questionElements = props.questions.map(function(question, i) {
  //   return <Question {...question} key={i} />
  // })

  return (
    <div className="App">
      <Lap />
    </div>
  )
}

document.addEventListener('DOMContentLoaded', () => {
  let props = document.getElementsByTagName('div')[0].dataset.props
  let testContent = JSON.parse(props)

  ReactDOM.render(
    <App questions={testContent} />,
    document.body.appendChild(document.createElement('div'))
  )
})
