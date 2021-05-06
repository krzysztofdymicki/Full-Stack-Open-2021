import React from 'react'

const Header = (props) => (
    <>
        <h1>{props.course.name}</h1>
    </>
)

const Part = (props) => (
    <p>{props.part.name} {props.part.excercises}</p>
)
const Content = (props) => (
    <div>
      {props.course.parts.map( p => <Part key={p.id} part={p} />)}
    </div>
)

const Total = (props) => (
    <>
      <p>Total number of excercises {props.course.parts.reduce((sum, p) => sum += p.excercises, 0)}</p>  
    </>
)

const Course = ({ course }) => {

  return (
    <div>
        <Header course={course} />
        <Content course={course} />
        <Total course={course} />
    </div>
)

}

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
