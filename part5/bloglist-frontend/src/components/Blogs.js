import React from 'react'
import Blog from './Blog'
import blogService from '../services/blogs'

const Blogs = ({ blogs, setBlogs, /*user*/ }) => {

  const updateLikes = async (toUpdate, blog) => {
    const newBlog = await blogService.update(toUpdate, blog)
    setBlogs(blogs.map(b => b.id === newBlog.id ? newBlog : b))
  }

  const removeBlog = async (blogTodelete) => {
    try {
      await blogService.remove(blogTodelete)
      setBlogs(blogs.filter(b => b.id !== blogTodelete.id))
    } catch {
      console.log('this is not your blog')
    }
  }

  return (blogs
              .sort((a,b) => b.likes - a.likes)
              .map(b => <Blog
                             key={b.id}
                             /*user={user}*/
                             blog={b}
                             updateLikes={updateLikes}
                             removeBlog={removeBlog}/>))
}

export default Blogs