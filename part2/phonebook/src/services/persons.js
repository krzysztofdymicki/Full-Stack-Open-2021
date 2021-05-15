import axios from 'axios'

const baseUrl = '/api/persons'

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
                .then(response => response.data)
}

const updatePerson = (id, updatedPerson) => {
    return axios
                .put(`${baseUrl}/${id}`, updatedPerson)
                .then(response => response.data)
}

const personServices = { getAll, addPerson, deletePerson, updatePerson }

export default personServices