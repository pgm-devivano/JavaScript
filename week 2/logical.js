/*
Author: Devin Vanopbroeke
Date: 09-30-21
Topic: Logical Operators
*/

//  AND => &&
let result;
result = true && true;
result = false && true;
result = false && 'PGM';
result = true && 'PGM';
result = true && (3 == 6);


// OR => ||
result = true || true; //true
result = true || false; //true
result = true || (3 == 6); // true
result = 'NMD' || 'PGM'; // NMD

// NOT => !
result = !true;
result = !'PGM';
console.log(result);

// Typeof
let size = 1.72;
let firstName = 'Devin';
console.log(typeof firstName);
console.log(typeof alien);
console.log(typeof true);
let now = new Date();
console.log(typeof now);
console.log(now.toLocaleTimeString('en-BE'));

// if ... else
let isFemale = true;
if (isFemale) {
    console.log('You are a lady!');
} else {
    console.log('You are James!');
}

//If ... else if ... else
let gender = 2;
if (gender == 0) {
    console.log('Is not known!');
} else if (gender == 1) {
    console.log('You are a male!');
} else if (gender == 2) {
    console.log('You are a female!');
} else {
    console.log('Gender is not specified!');
};

// Equality operator
console.log(3 == 3);
console.log(3 != 3);
console.log(3 == '3');
console.log(3 != '3');
console.log(3 === '3');
console.log(true == 1);
console.log(true === 1);
console.log(false != 1);
console.log(false !== 0);

// relational operators
// < > <= >=
console.log(3 < 4);
console.log(3 > 4);
console.log(3 <= 4);
console.log(3 >= 4);

//  switch case
let message;
gender = 7;
switch (gender) {
    case 0: 
        message = 'Gender is not known.' 
            break;
    case 1: 
        message = 'You are a male.' 
            break;
    case 2: 
        message = 'You are a female.' 
            break;
    case 9: 
        message = 'Gender is not specified.' 
            break;
}
console.log(message);