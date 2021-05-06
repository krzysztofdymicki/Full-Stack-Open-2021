import React from 'react'

const Persons = ({ persons, filter }) => {
    return(
        <ul>
        {persons.map(p => p.name.toLowerCase().includes(filter) ? <li key={p.name}>{p.name} {p.number}</li> : null)}
      </ul>
    )
}

export default Persons