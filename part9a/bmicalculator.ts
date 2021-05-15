interface heightAndWeight {
    height: number
    weight: number
}

interface bmi {
    height: number,
    weight: number,
    bmi: string
}

const parseArgs = (args: Array<string | number >): heightAndWeight => {

    if(args.length < 4) throw new Error('You provided not enough arguments')
    if(args.length > 4) throw new Error('You provided too many arguments')

    if(!isNaN(Number(args[0])) && !isNaN(Number(args[1]))) {
        return {
            height: Number(args[2]),
            weight: Number(args[3])
        }
    } else {
        throw new Error ('Proviced arguments were not numbers or string')
    }
}

const bmiCalculator = (h: number, w: number): bmi => {

    const bmi = w*10000/Math.pow(h, 2)

    if(bmi < 18.5) {
        return {
            height: h,
            weight: w,
            bmi: 'underweight'
        }
    }else if (bmi >= 18.5 && bmi < 25) {
        return {
            height: h,
            weight: w,
            bmi: 'Normal (healthy weight)'
        }
    }else if (bmi >= 25 && bmi <30) {
        return {
            height: h,
            weight: w,
            bmi: 'overweight' 
        }
    }else if (bmi >=30) {
        return {
            height: h,
            weight: w,
            bmi: 'obese'
        }
    }else throw new Error('something gone wrong, probaby you didnt pass arguments height and weight')
}

try {
    const { height, weight } = parseArgs(process.argv)
    bmiCalculator(height, weight)
} catch(e) {
    console.log('Something went wrong', e.message)
}

export default bmiCalculator