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
        <Part part={props.course.parts[0]} />
        <Part part={props.course.parts[1]} />
        <Part part={props.course.parts[2]} />
    </div>
)

const Total = (props) => (
    <>
        <p>Total number of excercises {props.course.parts[0].excercises + props.course.parts[1].excercises + props.course.parts[2].excercises}</p>  
    </>
)

const App = () => {
    const course = {
        name:'Half Stack application development',
        parts: [
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
    }
    

    return (
        <div>
            <Header course={course} />
            <Content course={course} />
            <Total course={course} />
        </div>
    )
}

export default App