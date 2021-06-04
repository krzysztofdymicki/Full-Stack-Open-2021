import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { voteFor } from '../reducers/anecdoteReducer'
import { newNotification, resetNotification } from '../reducers/notificationReducer'

const AnecdotesList = () => {

  const anecdotes = useSelector( ({ anecdotes, filter }) => {
    return filter === '' ? anecdotes : anecdotes.filter( a => a.content.includes(filter) )
  } )
  const dispatch = useDispatch()

  const vote = async (anecdote) => {
    dispatch(voteFor(anecdote))
    dispatch(newNotification(`You voted for ${anecdote.content}`))
    return setTimeout(() => {
      dispatch(resetNotification())
    }, 5000)
  }

  return (
    <>
    {anecdotes.map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote)}>vote</button>
          </div>
        </div>
      )}
    </>
  )

}

export default AnecdotesList