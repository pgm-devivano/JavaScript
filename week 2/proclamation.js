let grade = 100;
let message;
let ch = '\u{1F3C6}';
if (grade >= 50) {
    message = `Geslaagd op voldoende wijze!${ch}`;
}
else if (grade >= 67){
    message = `Geslaagd op onderscheiding!${ch,ch}`;
}
else if (grade >= 77) {
    message = `Geslaagd op Grote onderscheiding!${ch,ch,ch}`;
}
else if (grade >= 85) {
    message = `Geslaagd op Grootste onderscheiding!${ch,ch,ch,ch}`;
}
else if (grade >= 90) {
    message = `Geslaagd op Grootste onderscheiding en de gelukwensen van de examencommissie!${ch,ch,ch,ch,ch}`;
};

console.log(message);