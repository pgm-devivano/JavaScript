let length = 1.72;
let weight = 65;

// BMI Formula
const bmi = weight / (length * length);

const bmiMsg = `
BMI = weight / (length * length) => ${weight} / (${length} * ${length})
BMI result = ${bmi}
`
console.log(bmiMsg);

let waist = 0.8; 

// ABSI Formula
const absi = waist / Math.pow(bmi, 2, 3) * Math.sqrt(length);

const absiMsg = `
ABSI = waist / Math.pow(bmi,..,..) * Math.sqrt(length)
=> ${waist} / ${Math.pow(bmi, 2, 3)} * ${Math.sqrt(length)};
ABSI result = ${absi}`

console.log(absiMsg);