import React, { useState } from 'react'

const Header = () => <h1>Give feedback</h1>

const Statistics = ({ good, bad, neutral }) => {
  
  return (
    <div>
      <p>Good {good} </p>
      <p>Bad {bad} </p>
      <p>Neutral {neutral} </p>
    </div>
  )
  
}

const Button = ({ text, handleClick}) => <button onClick={handleClick}>{text}</button>

const App = () => {

  const [good, setGood] = useState(0)
  const [bad, setBad] = useState(0)
  const [neutral, setNeutral] = useState(0)

  const handleGoodClick = () => setGood(good + 1)
  const handleBadClick = () => setBad(bad + 1)
  const handleNeutralClick = () => setNeutral(neutral + 1)

  return (
    <div>
      <Header />
      <Button text='good' handleClick={handleGoodClick}/>
      <Button text='bad' handleClick={handleBadClick}/>
      <Button text='neutral' handleClick={handleNeutralClick}/>
      <Statistics good={good} bad={bad} neutral={neutral} />   
    </div>
  )
}

export default App;
