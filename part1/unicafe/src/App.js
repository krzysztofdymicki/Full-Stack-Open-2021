import React, { useState } from 'react'

const Header = () => <h1>Give feedback</h1>

const Statistics = ({ good, bad, neutral, score }) => {
  
  return (
    <div>
      <p>Good {good} </p>
      <p>Bad {bad} </p>
      <p>Neutral {neutral} </p>
      <p>All {good+bad+neutral}</p>
      <p>Average {score/(good+bad+neutral)}</p>
      <p>Positive {good*100/(good+bad+neutral)} %</p>
    </div>
  )
  
}

const Button = ({ text, handleClick}) => <button onClick={handleClick}>{text}</button>

const App = () => {

  const [good, setGood] = useState(0)
  const [bad, setBad] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [score, setScore] = useState(0)

  const handleGoodClick = () => {
    setGood(good + 1)
    setScore(score + 1)
  }

  const handleBadClick = () => {
    setBad(bad + 1)
    setScore(score - 1)
  }

  const handleNeutralClick = () => {
    setNeutral(neutral + 1)
}

  return (
    <div>
      <Header />
      <Button text='good' handleClick={handleGoodClick}/>
      <Button text='bad' handleClick={handleBadClick}/>
      <Button text='neutral' handleClick={handleNeutralClick}/>
      <Statistics good={good} bad={bad} neutral={neutral} score={score} />   
    </div>
  )
}

export default App;
