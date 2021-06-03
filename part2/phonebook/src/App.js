import React, { useState, useEffect } from 'react'
import Form from './components/Form'
import Filter from './components/Filter'
import Persons from './components/Persons'
import Notification from './components/Notification'
import personServices from './services/persons'

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas',
      number: 1122
    }
  ]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ filter, setFilter ] = useState('')
  const [ notification, setNotification ] = useState({})

  useEffect(() => {
    personServices.getAll()
                          .then(persons => setPersons(persons))
  },[])

  const handleSubmit = (event) => {

    event.preventDefault()

    const newObject = {
      name: newName,
      number: newNumber
    }

    const personToFind = persons.find(p => p.name === newName || p.number === newNumber)

    if(personToFind) {
      if(window.confirm(`Do you really want to update ${personToFind.name} ${personToFind.number} with ${newName} ${newNumber} ?`)) {
        personServices
                      .updatePerson(personToFind.id, newObject)
                      .then(person => {
                        setPersons(persons.map(p => p.id === person.id ? person : p))
                        setNotification({content: 'Record updated', type: 'positive'})
                        setTimeout(() => {
                          setNotification({})
                        },5000)
                      })
                      .catch(error => {
                        setNotification({content: error.response.data.error, type:'negative'})
                        setTimeout(() => {
                          setNotification({})
                        },5000)
                      })
      }
        
    } else {
    personServices
                  .addPerson(newObject)
                  .then( newPerson => {
                    setPersons(persons.concat(newPerson))
                    setNotification({content: 'New person added', type: 'positive'})
                    setTimeout(() => {
                      setNotification({})
                    },5000)
                  })
                  .catch(error => {
                    const message = error.response.data.error
                    setNotification({content: message, type: 'negative'})
                    setTimeout(() => {
                      setNotification({})
                    },5000)
                  })
                }

    setNewName('')
    setNewNumber('')
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

  const handleDeletePerson = (id) => {
    const personToDelete = persons.find(p => p.id === id)
    if(window.confirm(`do you really want to delete ${personToDelete.name} ?`)) {
      personServices
                    .deletePerson(id)
                    .then(response => {
                                      setPersons(persons.filter(p => p.name !== personToDelete.name))
                                      const message = {content: `${personToDelete.name} was deleted`, type: "negative"}
                                      setNotification(message)
                                      setTimeout(() => {
                                        setNotification({})
                                      },5000)
                                    })
                    .catch(error => {
                      setNotification({content: `${personToDelete.name} no longer exists`, type: 'negative'})
                      setPersons(persons.filter(p => p.id !== personToDelete.id))
                      setTimeout(() => {
                        setNotification({})
                      },5000)
                    })
    }                      
  }

  return (
    <div>
      <Notification message={notification} />
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
      <Persons persons={persons} filter={filter} handleDelete={handleDeletePerson}/>

    </div>
  )
}

export default App