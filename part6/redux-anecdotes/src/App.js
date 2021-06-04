import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import AnecdoteForm from './components/AnecdoteForm'
import AnecdotesList from './components/AnecdotesList'
import Notification from './components/Notification'
import Filter from './components/Filter'

import { initAnecdotes } from './reducers/anecdoteReducer'

const App = () => {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(initAnecdotes())
  })

  return (
    <div>
      <Notification />
      <h2>Anecdotes</h2>
      search <Filter />
      <AnecdotesList />
      <AnecdoteForm />
    </div>
  )
}

export default App