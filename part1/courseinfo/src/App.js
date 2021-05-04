import React from 'react'

const Header = (props) => (
    <>
        <h1>{props.course}</h1>
    </>
)

const Part = (props) => (
    <p>{props.part.name} {props.part.excercises}</p>
)
const Content = (props) => (
    <div>
        <Part part={props.parts[0]} />
        <Part part={props.parts[1]} />
        <Part part={props.parts[2]} />
    </div>
)

const Total = (props) => (
    <>
        <p>Total number of excercises {props.parts[0].excercises + props.parts[1].excercises + props.parts[2].excercises}</p>  
    </>
)

const App = () => {
    const course = 'Half Stack application development'
    const parts = [
        {
        name: 'Fundamentals of React',
        excercises: 10
        },
        {
        name: 'Using props to pass data',
        excercises: 7
        },
        {
        name: 'State of a component',
        excercises: 14
        }
]

    return (
        <div>
            <Header course={course} />
            <Content parts={parts} />
            <Total parts={parts} />
        </div>
    )
}

export default App