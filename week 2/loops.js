/* 
Associate Degree in Computer Programming
Topic: Loops
Developed by: Devin Vanoproeke
Modified: 10-01-21
*/

// FOR
for (let i = 0; i <= 10; i+=2) {
    console.log(`The value of i is ${i}!`);
}

// Example: sort of rectangle
let output = '', nRows = 6, nCols = 12, ch = '\u{1F954}';
for (let row = 0; row < nRows; row++) {
    for (let col = 0; col < nCols; col++){
        output += ch;
    }
    output += '\n';
}
console.log(output);

// For ... In
let person = {
    firstName: 'Devin',
    lastName: 'Vanopbroeke',
    gender: 1
};
console.log(person.firstName);
person.firstName = 'Bumba';
console.log(person);
output = '';
for (let prop in person) {
    output += `\nThe Property ${prop} has the value ${person[prop]}`;
}
console.log(output);

// Ternary operator
let isPlaying = false;
output = '';
if (isPlaying) { //Long way
    output = 'I\'m playing!';
} else {
    output = 'Game Over!';
}
console.log(output);
output = (isPlaying) ? 'I\'m playing!' : 'Game Over!'; // Short way
console.log(output);