import express from 'express'
import bmiCalculator from './bmicalculator'

const app = express()

app.get('/hello', (_req, res) => {
    res.send('Hello Fullstack')
})

app.get('/bmi', (req, res) => {
    const {height, weight} = req.query
    const healthState = bmiCalculator(Number(height), Number(weight))
    res.json(healthState)
})

const PORT = 3001

app.listen(PORT, () => {
    console.log(`Server running on PORT ${PORT}`)
})
