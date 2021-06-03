const jwt = require('jsonwebtoken')
const { getTokenFrom } = require('../utils/helperFunctions')
const { SECRET } = require('../utils/config')
const blogRouter = require('express').Router()
const Blog = require('../models/Blog')
const User = require('../models/User')

blogRouter.get("/", async (request, response) => {
  const blogs = await Blog.find({}).populate('user', { username: 1, name: 1 })
  response.json(blogs)
});

blogRouter.post("/", async (request, response) => {
  const token = getTokenFrom(request)
  const decodedToken = jwt.verify(token, SECRET)
  if(!token || !decodedToken.id) {
    return response.status(401).json({
      error: 'token missing or invalid'
    })
  }
  
  const user = await User.findById(decodedToken.id)

  const blog = new Blog({
    ...request.body,
    user: user._id
  });

  const result = await blog.save()
  user.blogs = user.blogs.concat(result)
  user.save()
  
  response.status(201).json(result)
});

blogRouter.delete('/:id', async (request, response) => {
  const id = request.params.id
  await Blog.findByIdAndDelete(id)
  response.status(204)
})

blogRouter.put('/:id', async (request, response) => {
  const id = request.params.id
  const body = request.body
  const blogToUpdate = await Blog.findById(id)
  const newBlog = {
    ...blogToUpdate._doc,
    ...body
  }
  const updatedBlog = await Blog.findByIdAndUpdate(id, newBlog, { new: true })

  response.status(200).json(updatedBlog)
})

module.exports = blogRouter