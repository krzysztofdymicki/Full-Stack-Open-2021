import React, { useState } from 'react'
import login from '../services/login'
import blogService from '../services/blogs'

const Login = ({ setUser, setNotification }) => {

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = async (event) => {
    event.preventDefault()
    try {
      const user = await login({username,password})
      setUser(user)
      window.localStorage.setItem('user', JSON.stringify(user))
      blogService.setToken(user.token)
      setUsername('')
      setPassword('')
    } catch {
        setNotification({
          content: 'wrong credentials',
          type: 'negative'
        })
        setTimeout(() => {
          setNotification(null)
        }, 5000)
    }
  }



 return (
  <form onSubmit={handleLogin} id='login-form'>
    <div>
    username <input value={username} onChange={({ target }) => setUsername(target.value)} />
    </div>
    <div>
    password <input value={password} onChange={({ target }) => setPassword(target.value)}/>
    </div>
    <button type="submit">Login</button>
  </form>
  )
}

export default Login