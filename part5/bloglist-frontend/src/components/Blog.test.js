import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, fireEvent } from '@testing-library/react'
import Blog from './Blog'

test('by default renders only the title, and the rest after clicking', () => {

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

  let title = component.container.querySelector('.title')
  let author = component.container.querySelector('.author')
  let url = component.container.querySelector('.url')
  let likes = component.container.querySelector('.likes')

  expect(title).toBeDefined()
  expect(author).toBeNull()
  expect(url).toBeNull()
  expect(likes).toBeNull()

  const open = component.container.querySelector('.open')

  fireEvent.click(open)

  title = component.container.querySelector('.title')
  author = component.container.querySelector('.author')
  url = component.container.querySelector('.url')
  likes = component.container.querySelector('.likes')

  expect(title).toBeDefined()
  expect(author).toBeDefined()
  expect(url).toBeDefined()
  expect(likes).toBeDefined()

})