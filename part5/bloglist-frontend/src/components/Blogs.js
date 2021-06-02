import React from 'react'
import Blog from './Blog'
import blogService from '../services/blogs'

const Blogs = ({ blogs, setBlogs }) => {

  const updateLikes = async (toUpdate, blog) => {
    const newBlog = await blogService.update(toUpdate, blog)
    setBlogs(blogs.map(b => b.id === newBlog.id ? newBlog : b))
  }

  return (blogs.map(b => <Blog key={b.id} blog={b} updateLikes={updateLikes}/>))
}

export default Blogs