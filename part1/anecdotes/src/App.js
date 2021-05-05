import React, { useState } from 'react'

const Button = ({ handleClick, text }) => <button onClick={handleClick}>{text}</button>

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
  ]
   
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState({0:0, 1:0, 2:0, 3:0, 4:0, 5:0})

  const handleClick = () => {
    const random = Math.round(Math.random()*(anecdotes.length-1))
    setSelected(random)
  }

  const handleVote = () => {
    const copy = {...votes}
    copy[selected] +=1
    setVotes(copy)
  }

  const generateTheHighest = () => {
      let number = 0
      for (let i=0; i<anecdotes.length; i++) {
          if(votes[i] > votes[number]) number = i
      }
      return number
  }

  const index = generateTheHighest()


  return (
    <div>
      <h1>Anecdote of the day</h1> 
      <p>{anecdotes[selected]}</p>
      <p>has {votes[selected]} votes</p>
      <Button text='random' handleClick={handleClick} />
      <Button text='vote' handleClick={handleVote} />
      <h1>Anecdote with most votes</h1>
      <p>{anecdotes[index]}</p>
      <p> has {votes[index]} votes</p>
    </div>
  )
}

export default App