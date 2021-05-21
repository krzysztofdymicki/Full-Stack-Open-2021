const { beforeEach, afterAll } = require('@jest/globals')
const mongoose = require('mongoose')
const supertest = require('supertest')
const app = require('../app')
const Blog = require('../models/Blog')

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

  test('returned blogs has "id" property', async () => {

    const response = await api.get('/api/blogs')
    response.body.map( b => {
      expect(b).toHaveProperty('id')
    })
  })

})

describe('POST', () => {

  test('/api/blogs creates new post succesfully', async () => {
    initialLength = initialBlogs.length
    const response = await api
      .post('/api/blogs')
      .expect(201)
      .expect('Content-Type', /application\/json/)

    const afterPosting = await blogsInDb()

    expect(afterPosting).toHaveLength(initialLength + 1)
  
  })

  test('/api/blogs attaching 0 as default when "likes" propery is missing', async () => {
    const blogWithoutLikes = new Blog({
      title: "without likes",
      author: "krzysztof d",
      url: "blablabla"
    })

    const response = await api
      .post('/api/blogs', blogWithoutLikes)

    expect(response.body).toHaveProperty('likes', 0)
  })
})

afterAll(() => {
  mongoose.connection.close()
})

