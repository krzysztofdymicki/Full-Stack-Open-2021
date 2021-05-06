import React from 'react'
import Course from './components/Course'


const App = () => {
    const courses = [
      {
        name:'Half Stack application development',
        id: 1,
        parts: [
            {
            name: 'Fundamentals of React',
            excercises: 10,
            id: 1
            },
            {
            name: 'Using props to pass data',
            excercises: 7,
            id: 2
            },
            {
            name: 'State of a component',
            excercises: 14,
            id: 3
            },
            {name: 'Redux',
            excercises: 10,
            id: 4
          }
    ]
    },
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          excercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          excercises: 7,
          id: 2
        }
      ]
    }
  ]

    return (
      <div>
        {courses.map(c => <Course course={c} key={c.id} />)}
      </div>
    )
    
}


export default App;
