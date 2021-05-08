import axios from 'axios'

const baseUrl = 'http://localhost:3001/persons'

const getAll = () => {
  return axios
        .get(baseUrl)
        .then(response => response.data)
}

const addPerson = (newPerson) => {
  return axios
        .post(baseUrl,newPerson)
        .then(response => response.data)
}

const deletePerson = (id) => {
    return axios
                .delete(`${baseUrl}/${id}`)
                .then(response => console.log(response))
}

const exp = { getAll, addPerson, deletePerson }

export default exp