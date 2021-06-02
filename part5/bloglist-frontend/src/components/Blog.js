import React, { useState } from 'react'

const Blog = ({blog, updateLikes}) => {

  const [visible, setVisible] = useState(false)

  const handleVisibility = (event) => {
    setVisible(!visible)
  }

  const style = {
    margin: '1em 2em 0 2em',
    padding: '1em',
    borderType: 'solid',
    borderColor: 'black',
    borderSize: '2px',
    borderRadius: '1em'
  }

  return visible 
    ? (
      <div style={style}>
        <p>title: {blog.title}</p>
        <p>author: {blog.author}</p>
        <p>url: {blog.url}</p>
        <p>likes: {blog.likes}</p> <br></br> 
        <button onClick={() => updateLikes({likes: blog.likes + 1}, blog)}>LIKE</button>
        <button onClick={handleVisibility}>CLOSE</button>
      </div>
    )
    : (
      <div>
      <p onClick={handleVisibility}>{blog.title}</p>
      </div>
    )
}

export default Blog