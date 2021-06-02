import React from 'react'
import Blog from './Blog'

const Blogs = ({ blogs }) => blogs.map(b => <Blog key={b.id} blog={b} />)

export default Blogs