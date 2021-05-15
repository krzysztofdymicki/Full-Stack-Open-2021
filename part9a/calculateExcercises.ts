interface Result {
    periodLength: number
    trainingDays: number
    success: boolean
    rating: number
    ratingDescription: string
    target: number
    average: number
}



const calculateExcercises = (args: Array<string>): Result => {

    if(args.length < 4) throw new Error('you provided not enough arguments');
    if(args.slice(2).find( a => isNaN(Number(a)))) throw new Error('you should provide only numbers');

    const target = Number(args[2]);
    const days = args.slice(3).map( d => Number(d));
    const periodLength = days.length;
    const trainingDays = days.filter(d => d > 0).length;
    const average = days.reduce((sum, day) => sum += day, 0)/periodLength;
    const success = average > target ? true : false;
    let rating = 2;
    let ratingDescription = "well done";

    if( average/target < 0.8) {
        rating = 1;
        ratingDescription = "could be better";
    }
    if( average/target >= 0.8 && average/target<= 1.2) {
        rating = 2;
        ratingDescription = "well done";
    }
    if (average/target > 1.2) {
        rating = 3;
        ratingDescription = "you're awesome";
    }

    console.log({
        periodLength,
        trainingDays,
        target,
        success,
        average,
        rating,
        ratingDescription
    });

    return {
        periodLength,
        trainingDays,
        target,
        success,
        average,
        rating,
        ratingDescription
    };


};

try {
    calculateExcercises(process.argv);
} catch(e) {
    console.log('someting gone wrong', e.message);
}