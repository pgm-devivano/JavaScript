function guessNumber(max) {
    return Math.floor(Math.random(1) * 17)
}
const valueToGuess = guessNumber();
const myValue = 11;

if (myValue < valueToGuess) {
    console.log('lower');
} else if (myValue > valueToGuess){
    console.log('higher');
} else {
    console.log('exact');
}
// console.log(valueToGuess)