import React from 'react'

const Header = (props) => (
    <>
        <h1>{props.course}</h1>
    </>
)

const Part = (props) => (
    <p>{props.part} {props.excercises}</p>
)
const Content = (props) => (
    <div>
        <Part part={props.part1} excercises={props.excercises1} />
        <Part part={props.part2} excercises={props.excercises2} />
        <Part part={props.part3} excercises={props.excercises3} />
    </div>
)

const Total = (props) => (
    <>
        <p>Total number of excercises {props.excercises1 + props.excercises2 + props.excercises3}</p>  
    </>
)

const App = () => {
    const course = 'Half Stack application development'
    const part1 = {
        name: 'Fundamentals of React',
        excercises: 10
    }
    const part2 = {
        name: 'Using props to pass data',
        excercises: 7
    }
    const part3 = {
        name: 'State of a component',
        excercises: 14
    }

    return (
        <div>
            <Header course={course} />
            <Content part1={part1.name} part2={part2.name} part3={part3.name} excercises1={part1.excercises} excercises2={part2.excercises} excercises3={part3.excercises} />
            <Total excercises1={part1.excercises} excercises2={part2.excercises} excercises3={part3.excercises} />
        </div>
    )
}

export default App