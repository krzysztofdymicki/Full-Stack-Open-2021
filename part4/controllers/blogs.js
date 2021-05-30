const blogRouter = require('express').Router()
const Blog = require('../models/Blog')

blogRouter.get("/", async (request, response) => {
  const blogs = await Blog.find({})
  response.json(blogs)
});

blogRouter.post("/", async (request, response) => {
  const blog = new Blog(request.body);

  const result = await blog.save()
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