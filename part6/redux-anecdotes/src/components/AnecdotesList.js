import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { voteFor } from '../reducers/anecdoteReducer'

const AnecdotesList = () => {

  const anecdotes = useSelector( state => state )
  const dispatch = useDispatch()

  const vote = (id) => {
    return dispatch(voteFor(id))
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
            <button onClick={() => vote(anecdote.id)}>vote</button>
          </div>
        </div>
      )}
    </>
  )

}

export default AnecdotesList