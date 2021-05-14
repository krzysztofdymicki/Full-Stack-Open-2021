interface heightAndWeight {
    height: number
    weight: number
}

const parseArgs = (args: Array<string>): heightAndWeight => {

    if(args.length < 4) throw new Error('You provided not enough arguments')
    if(args.length > 4) throw new Error('You provided too many arguments')

    if(!isNaN(Number(args[2])) && !isNaN(Number(args[3]))) {
        return {
            height: Number(args[2]),
            weight: Number(args[3])
        }
    } else {
        throw new Error ('Proviced arguments were not numbers')
    }
}

const bmiCalculator = (h: number, w: number) => {

    const bmi = w*10000/Math.pow(h, 2)

    if(bmi < 18.5) {
        console.log('bmi', bmi, 'underweight')
    }else if (bmi >= 18.5 && bmi < 25) {
        console.log('bmi', bmi, 'Normal (healthy weight)')
    }else if (bmi >= 25 && bmi <30) {
        console.log('bmi', bmi, 'overweight')
    }else if (bmi >=30) {
        console.log('bmi', bmi, 'overweight')
    }
}

try {
    const { height, weight } = parseArgs(process.argv)
    bmiCalculator(height, weight)
} catch(e) {
    console.log('Something went wrong', e.message)
}