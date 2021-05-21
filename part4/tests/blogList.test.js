const { beforeEach, afterAll } = require('@jest/globals')
const mongoose = require('mongoose')
const supertest = require('supertest')
const app = require('../app')

const { initialBlogs, initializeBlogsToDb, blogsInDb } = require('../utils/blogList_test_helper')

const api = supertest(app)

beforeEach(() => initializeBlogsToDb(initialBlogs))

describe('GET', () => {

  test('/api/blogs returns correct number of blogs in JSON', async () => {
    const initialLength = initialBlogs.length

    const response = await api
      .get('/api/blogs')
      .expect(200)
      .expect('Content-Type', /application\/json/)

    expect(response.body).toHaveLength(initialLength)
  })


})

afterAll(() => {
  mongoose.connection.close()
})

