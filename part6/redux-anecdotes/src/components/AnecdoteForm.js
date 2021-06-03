import React from 'react'
import { useDispatch } from 'react-redux'

import { addNew } from '../reducers/anecdoteReducer'

const AnecdoteForm = () => {

  const dispatch = useDispatch()

  const create = (event) => {
    event.preventDefault()
    return dispatch(addNew(event.target.anecdoteInput.value))
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