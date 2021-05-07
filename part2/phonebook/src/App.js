import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Form from './components/Form'
import Filter from './components/Filter'
import Persons from './components/Persons'
import { getAll, addPerson } from './services/persons'

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas',
      number: 1122
    }
  ]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ filter, setFilter ] = useState('')

  useEffect(() => {
    getAll()
            .then(persons => setPersons(persons))
  },[])

  const handleSubmit = (event) => {
    event.preventDefault()
    if (persons.find(p => p.name !== newName))
    {const newObject = {
      name: newName,
      number: newNumber
    }
    addPerson(newObject)
                        .then(newPerson => setPersons(persons.concat(newPerson)))
    setNewName('')}
    else window.alert(`${newName} already exists`)
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleFilterChange = (event) => {
    setFilter(event.target.value.toLowerCase())
  }

  return (
    <div>
      <h1>Phonebook</h1>
      <Filter
             filter={filter}
             handleFilterChange={handleFilterChange}
              />
      <h2>Add a new</h2>
      <Form 
           handleSubmit={handleSubmit}
           handleNameChange={handleNameChange}
           handleNumberChange={handleNumberChange}
           newName={newName}
           newNumber={newNumber}
            />
      <h2>Numbers</h2>
      <Persons persons={persons} filter={filter}/>

    </div>
  )
}

export default App