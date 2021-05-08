import React from 'react'
import Person from './Person'

const Persons = ({ persons, filter, handleDelete }) => {
    return(
        <div>
        {persons.map(p => p.name.toLowerCase().includes(filter) ? <Person key={p.id} person={p} handleDelete={handleDelete} /> : null)}
        </div>
    )
}

export default Persons