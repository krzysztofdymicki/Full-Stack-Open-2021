import React, { useState, useEffect } from 'react'
import Blog from './components/Blog'
import BlogForm from './components/BlogForm'
import Login from './components/Login'
import blogService from './services/blogs'

const App = () => {
  const [blogs, setBlogs] = useState([])
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [user, setUser] = useState(null)
  const [blog, setBlog] = useState({
    title: '',
    author: '',
    url: ''
  })

  useEffect(() => {
    blogService.getAll().then(blogs =>
      setBlogs( blogs )
    )  
  }, [])

  useEffect(() => {
    let userFromLS = window.localStorage.getItem('user')
    userFromLS && setUser(userFromLS)
  },[])

  if(!user) return (
    <div>
      <Login setUsername={setUsername}
             setPassword={setPassword}
             setUser={setUser}
             username={username}
             password={password}
             />
    </div>
  )

  return (
    <div>
      <h2>blogs</h2>
      <BlogForm blog={blog} setBlog={setBlog}/>
      {blogs.map(blog =>
        <Blog key={blog.id} blog={blog} />
      )}
    </div>
  )
}

export default App