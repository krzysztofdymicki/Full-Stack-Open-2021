import React from 'react'
import { useDispatch } from 'react-redux'

import { addNew } from '../reducers/anecdoteReducer'
import anecdotesService from '../services/anecdotes' 

const AnecdoteForm = () => {

  const dispatch = useDispatch()

  const create = async (event) => {
    event.preventDefault()
    const anecdoteToAdd = await anecdotesService.create(event.target.anecdoteInput.value)
    return dispatch(addNew(anecdoteToAdd))
  }

  return (
    <div>
    <h2>create new</h2>
      <form onSubmit={(event) => create(event) }>
        <div><input name='anecdoteInput' /></div>
        <button type='submit'>create</button>
      </form>
    </div>
  )

}

export default AnecdoteForm