import React, { useState } from 'react'

const Blog = ({blog, updateLikes /*removeBlog, user*/}) => {

  const [visible, setVisible] = useState(false)

  const handleVisibility = () => {
    setVisible(!visible)
    console.log(blog)
  }

  const style = {
    margin: '1em 2em 0 2em',
    padding: '1em',
    borderType: 'solid',
    borderColor: 'black',
    borderSize: '2px',
    borderRadius: '1em'
  }

  //const isAuthor = () => blog.user === user.id ? true : false

  return visible 
    ? (
      <div style={style}>
        <p className='title'>title: {blog.title}</p>
        <p className='author'>author: {blog.author}</p>
        <p className='url'>url: {blog.url}</p>
        <p className='likes'>likes: {blog.likes}</p> <br></br> 
        <button onClick={() => updateLikes({likes: blog.likes + 1}, blog)}>LIKE</button>
        <button onClick={handleVisibility}>CLOSE</button>
        {/*isAuthor() ? <button onClick={() => removeBlog(blog)}>DELETE</button> : null*/}
      </div>
    )
    : (
      <div>
      <p onClick={handleVisibility}>{blog.title}</p>
      </div>
    )
}

export default Blog