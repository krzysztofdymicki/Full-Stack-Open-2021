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

/*describe('POST', () => {

  test('/api/blogs creates new blog succesfully', async () => {

    initialLength = initialBlogs.length
    const newBlog = new Blog({
      title: "without likes",
      author: "krzysztof d",
      url: "blablabla",
      likes: 2
    })

    const response = await api
      .post('/api/blogs')
      .send(newBlog)
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
      .post('/api/blogs')
      .send(blogWithoutLikes)

    expect(response.body).toHaveProperty('likes', 0)
  })

  test('/api/blogs responds with 400(Bad Request) when title/url is missing', async () => {

    const blogWithoutTitle = new Blog({
      author: "krzysztof",
      url: "blabla"
    })
    const blogWithoutUrl = new Blog({
      title: "blabla",
      author: "blabka"
    })

    await api
      .post('/api/blogs')
      .send(blogWithoutTitle)
      .expect(400)
    
    await api
      .post('/api/blogs')
      .send(blogWithoutUrl)
      .expect(400)

  }) 
})*/

afterAll(() => {
  mongoose.connection.close()
})

