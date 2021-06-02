import React from 'react'
import blogService from '../services/blogs'

const BlogForm = ({ blog, setBlog, blogs, setBlogs }) => {

  const handleBlogForm = async (event) => {
    event.preventDefault()
    try {
      const newBlog = await blogService.create(blog)
      setBlogs(blogs.concat(newBlog))
    } catch {
      console.log('something happened')
    }
  }

  return (
    <form onSubmit={handleBlogForm}>
    <h2>Create new</h2>
    <div>
      <div> title <input onChange={({ target }) => setBlog({...blog, title: target.value})}/></div>
      <div> author <input onChange={({ target }) => setBlog({...blog, author: target.value})} /></div>
      <div> url <input onChange={({ target }) => setBlog({...blog, url: target.value})}/></div>
      <button type="submit">add blog</button>
    </div>
  </form>
  )

}

export default BlogForm