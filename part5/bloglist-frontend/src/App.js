import React, { useState, useEffect, useRef } from 'react'
import Togglable from './components/Togglable'
import Blogs from './components/Blogs'
import BlogForm from './components/BlogForm'
import Login from './components/Login'
import Notification from './components/Notification'
import blogService from './services/blogs'

const App = () => {

  // STATE

  const [blogs, setBlogs] = useState([])
  const [user, setUser] = useState(null)
  const [notification, setNotification] = useState(null)

  // EFFECTS

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

  // REFERENCES

  const blogFormTogglableRef = useRef()

  // FUNCTIONALITY

  const handleLogOut = (event) => {
    event.preventDefault()
    setUser(null)
    window.localStorage.clear()
    blogService.setToken(null)
  }

  // CONTENT SHOWN WHEN USER IS LOGGED OUT

  if(!user) return (
    <div>
      {notification && <Notification notification={notification} />}
      <Togglable buttonLabel='login' >
      <Login 
             setUser={setUser}
             setNotification={setNotification}
             />
       </Togglable>
    </div>
  )

  // CONTENT SHOWN WHEN USER IS LOGGED IN

  return (
    <div>
      {notification && <Notification notification={notification} />}
      <h2>blogs</h2>
      <p>User {user.name} is logged in</p> <button onClick={handleLogOut}>Log out</button>
      <Togglable buttonLabel='new blog' ref={blogFormTogglableRef} >
      <BlogForm blogFormTogglableRef={blogFormTogglableRef}
                blogs={blogs}
                setBlogs={setBlogs}
                setNotification={setNotification}
                />
      </Togglable>
      <Blogs blogs={blogs} setBlogs={setBlogs} />
    </div>
  )
}

export default App