import React from 'react'
import Button from './Button'

const Country = ({country, handleVisibility}) => {
    if(country.visible)
    {return (
        <div>
            <h1>{country.name}</h1> <Button onClick={handleVisibility} country={country} />
            <h3>Capital: {country.capital}</h3>
            <h3>Population: {country.population}</h3>
            <h1>Languages</h1>
            <ul>
            {country.languages.map(l => <li key={l.iso639_1}>{l.name}</li> )}
            </ul>
            <img src={country.flag} alt={`flag of ${country.name}`} style={{ width: 200}} />
            </div>
    )}
    else
    return ( <div>
             {country.name} <Button onClick={handleVisibility} country={country} />
             </div>)
}

export default Country