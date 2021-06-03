/* eslint-disable no-unused-vars */
import axios from 'axios'
const baseUrl = '/api/blogs'

let token = null

const setToken = (newToken) => {
  token = `bearer ${newToken}`
}


const getAll = () => {
  const request = axios.get(baseUrl)
  return request.then(response => response.data)
}

const create = async (newBlog) => {
  const config = {
    headers: {
      Authorization: token
    }
  }
  const response = await axios.post(baseUrl, newBlog, config)
  return response.data
}

const update = async (featureToUpdate, blogToUpdate) => {
  const config = {
    headers: {
      Authorization: token
    }
  }
  const id = blogToUpdate.id
  const response = await axios.put(`${baseUrl}/${id}`, featureToUpdate, config)
  return response.data
}

const remove = async (blogToRemove) => {
  const config = {
    headers: {
      Authorization: token
    }
  }
  const id = blogToRemove.id
  await axios.delete(`${baseUrl}/${id}`, config)
}

export default { getAll, setToken, create, update, remove }