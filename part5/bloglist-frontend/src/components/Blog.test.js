import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import Blog from './Blog'

test('by default renders only the title', () => {

  const blog = {
    title: 'testTitle',
    author: 'testAuthor',
    url: 'testUrl',
    likes: 0,
    id: 111111999
  }

  const component = render(
    <Blog blog={blog} updatelikes={() => console.log('mock')} />
  )

  const title = component.container.querySelector('.title')
  const author = component.container.querySelector('.author')
  const url = component.container.querySelector('.url')
  const likes = component.container.querySelector('.likes')

  expect(title).toBeDefined()
  expect(author).toBeNull()
  expect(url).toBeNull()
  expect(likes).toBeNull()

})