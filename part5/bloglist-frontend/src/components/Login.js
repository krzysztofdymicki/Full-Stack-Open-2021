import React from 'react'
import login from '../services/login'
import blogService from '../services/blogs'

const Login = ({ username, setUsername, password, setPassword, setUser}) => {

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
        console.log('Wrong credentials')
    }
  }

 return (
  <form onSubmit={handleLogin}>
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