/*
Operators
Modified: 09-28-2021
*/

// operand1 operator operand2

// 1. Arithmetic operator (wiskundige operator)
const a = 6 + 4; // Addition
console.log(a); // Subtraction 
const b = 4 - 6;
console.log(b);
const c = 5 * 3; // Multiplication
console.log(c);
const d = 6 / 3; // Division
console.log(d);
const e = 3 / 0; // Result = infinity
console.log(e);
const f = -7 / 0;
console.log(f);
const g = 3 ** 2; // Exponentiation
console.log(g);
let h = 9 % 2; // Division remainder
console.log(h);
let i = ++h; // Post increment
console.log(i); 
let j = --i; // pre decrement
console.log(j);
let k = 6;
k++;
console.log(k);
k = k + 1;
console.log(k);
k += 1;
console.log(k);

//  2. Assignments operators (Toewijzings operatoren)

const l = 'sunflower';
k += 8; // Addition assignment k = k + 8
k -= 6; // Subtraction assignment k = k - 6
k *= 5; // k = k * 5
k /= 2; // k = k / 2
k %= 3; // k = k % 3
k **= 4; // k = k ** 4
console.log(k);

// Intermezzo
const r = Math.random();
console.log(r);
const s = Math.max(1, 3, 7);
console.log(s);
const t = Math.floor(12.6);
console.log(t);