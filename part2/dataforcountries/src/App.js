import React, { useState, useEffect } from 'react'
import Filter from './components/Filter'
import Countries from './components/Countries'
import axios from 'axios'

const App = () => {

  const [ countries, setCountries ] = useState([])
  const [ filter, setFilter ] = useState('')

  useEffect(() => {
    axios
        .get('https://restcountries.eu/rest/v2/all')
        .then(response => setCountries(response.data))
  },[])

  const handleFilterChange = (event) => {
    setFilter(event.target.value)
  }

  return(
    <div>
      <Filter filter={filter} handleChange={handleFilterChange} />
      <Countries countries={countries} filter={filter} />
    </div>
  )
}

export default App;
