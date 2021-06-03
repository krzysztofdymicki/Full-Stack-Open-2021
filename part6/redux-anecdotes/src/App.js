import React from 'react'

import AnecdoteForm from './components/AnecdoteForm'
import AnecdotesList from './components/AnecdotesList'
import Notification from './components/Notification'

const App = () => {

  return (
    <div>
      <Notification />
      <h2>Anecdotes</h2>
      <AnecdotesList />
      <AnecdoteForm />
    </div>
  )
}

export default App