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

export default Course