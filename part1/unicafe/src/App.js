import React, { useState } from 'react'

const Header = () => <h1>Give feedback</h1>

const Statistic = ({ text, value }) => <p>{text} {value} </p>

const Statistics = ({ good, bad, neutral, score }) => {
  if (good+bad+neutral === 0) {
    return <h2>No feedback given</h2>
  } else 
  return (
    <div>
      <Statistic text='good' value={good} />
      <Statistic text='bad' value={bad} />
      <Statistic text='neutral' value={neutral} />
      <Statistic text='all' value={good+bad+neutral} />
      <Statistic text='average' value={score/(good+bad+neutral)} />
      <Statistic text='positive' value={`${good*100/(good+bad+neutral)} %`} />
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
