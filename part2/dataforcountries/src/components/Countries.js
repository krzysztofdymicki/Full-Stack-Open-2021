import React from 'react'

const Countries = ({ countries, filter }) => {

    const filteredCountries = filter ? countries.filter(c => c.name.toLowerCase().includes(filter)) : countries
    const showCountries = (c) => {
        if (c.length > 10) {
            return <p>Too much countries</p>
        }
        else if (c.length <=10 && c.length >1) {
            return c.map( c => <p key={c.name}>{c.name}</p>)
        }
        else if (c.length === 1) {
            return (
                <div>
                    <h1>{c[0].name}</h1>
                    <h3>Capital: {c[0].capital}</h3>
                    <h3>Population: {c[0].population}</h3>
                    <h1>Languages</h1>
                    <ul>
                    {c[0].languages.map(l => <li key={l.iso639_1}>{l.name}</li> )}
                    </ul>
                    <img src={c[0].flag} alt={`flag of ${c[0].name}`} style={{ width: 200}} />
                </div>
            )
        }
        else return null
    }
    
    return (
    <div>
        {showCountries(filteredCountries)}
    </div>
)}

export default Countries