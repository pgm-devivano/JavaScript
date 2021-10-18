const firstName = 'Devin';
const lastName = 'Vanopbroeke';
const gender = 'Male';
const age = 20;
const married = false;
const unicode = '\u{1F42C}';
const quote = "Live for the day!";
const langDutchLevel = "*****";
const langEnglishLevel = "****";
const langFrenchLevel = "**";

const message = `
My Curriculum Vitae
===============================================
First Name: \t\t${firstName}
Last Name: \t\t${lastName}
Gender: \t\t${gender}
Age:    \t\t${age}
Married: \t\t${married}
Avatar: \t\t${unicode}
Quote:   \t\t${quote}
_______________________________________________
Language
_______________________________________________
Dutch:  \t\t${langDutchLevel}
English: \t\t${langEnglishLevel}
French: \t\t${langFrenchLevel}
===============================================
`
console.log(message);