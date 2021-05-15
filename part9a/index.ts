import express from 'express';
import bmiCalculator from './bmicalculator';
import calculateExercises from './calculateExcercises';

const app = express();
app.use(express.json())

app.get('/hello', (_req, res) => {
    res.send('Hello Fullstack');
});

app.get('/bmi', (req, res) => {
    const {height, weight} = req.query;
    const healthState = bmiCalculator(Number(height), Number(weight));
    res.json(healthState);
});

app.post('/exercises', (req,res) => {
    if(!req.body.daily_exercises || !req.body.target) {
        return res.status(400).send({
            error: 'parameters missing'
        })
    }else {
    const { daily_exercises, target } = req.body
    const args = [target, ...daily_exercises]
    try {
        return res.json(calculateExercises(args))
    } catch(e) {
        return res.status(400).send({
            error: e.message
        })
    }
}
})

const PORT = 3001;

app.listen(PORT, () => {
    console.log(`Server running on PORT ${PORT}`);
});
