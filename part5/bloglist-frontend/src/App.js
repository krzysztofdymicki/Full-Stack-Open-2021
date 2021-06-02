import React, { useState, useEffect } from 'react'
import Blog from './components/Blog'
import BlogForm from './components/BlogForm'
import Login from './components/Login'
import Notification from './components/Notification'
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
  const [notification, setNotification] = useState(null)

  useEffect(() => {
    blogService.getAll().then(blogs =>
      setBlogs( blogs )
    )  
  }, [])

  useEffect(() => {
    let userFromLS = window.localStorage.getItem('user')
    ? JSON.parse(window.localStorage.getItem('user'))
    : null
    if(userFromLS) {
      setUser(userFromLS) 
      blogService.setToken(userFromLS.token)
    }
  },[])

  const handleLogOut = (event) => {
    event.preventDefault()
    setUser(null)
    window.localStorage.clear()
    blogService.setToken(null)
  }

  if(!user) return (
    <div>
      {notification && <Notification notification={notification} />}
      <Login setUsername={setUsername}
             setPassword={setPassword}
             setUser={setUser}
             username={username}
             password={password}
             setNotification={setNotification}
             />
    </div>
  )

  return (
    <div>
      {notification && <Notification notification={notification} />}
      <h2>blogs</h2>
      <p>User {user.name} is logged in</p> <button onClick={handleLogOut}>Log out</button>
      <BlogForm blog={blog}
                setBlog={setBlog}
                blogs={blogs}
                setBlogs={setBlogs}
                setNotification={setNotification}
                />
      {blogs.map(blog =>
        <Blog key={blog.id} blog={blog} />
      )}
    </div>
  )
}

export default App