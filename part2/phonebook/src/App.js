import React, { useState } from 'react'

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas',
      number: 1122
    }
  ]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')

  const handleNameSubmit = (event) => {
    event.preventDefault()
    if (persons.find(p => p.name !== newName))
    {const newObject = {
      name: newName,
      number: newNumber
    }
    setPersons(persons.concat(newObject))
    setNewName('')}
    else window.alert(`${newName} already exists`)
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  return (
    <div>
      <h1>Phonebook</h1>
      <h2>Add a new</h2>
      <form onSubmit={handleNameSubmit}>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
          number: <input value={newNumber} onChange={handleNumberChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.map(p => <li key={p.name}>{p.name} {p.number}</li>)}
      </ul>
    </div>
  )
}

export default App