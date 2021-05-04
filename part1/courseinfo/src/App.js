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
            <Content part1={parts[0].name} part2={parts[1].name} part3={parts[2].name} excercises1={parts[0].excercises} excercises2={parts[1].excercises} excercises3={parts[2].excercises} />
            <Total excercises1={parts[0].excercises} excercises2={parts[1].excercises} excercises3={parts[2].excercises} />
        </div>
    )
}

export default App