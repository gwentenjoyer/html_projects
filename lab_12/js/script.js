// Task 1

// let x = 1;
// let y = 2;
// let res1 = String(1) + String(2)// Допишіть код (використовувати змінні x і y)
// console.log(res1); // "12"
// console.log(typeof res1); // "string"
// let res2 = Boolean(x) + String(2)// Допишіть код (використовувати змінні x і y)
// console.log(res2); // "true2"
// console.log(typeof res2); // "string"
// let res3 = Boolean(x) && Boolean(y)// Допишіть код (використовувати змінні x і y)
// console.log(res3); // true
// console.log(typeof res3); // "boolean"
// let res4 = Number("asdf"+x + y) // Допишіть код (використовувати змінні x і y)
// console.log(res4); // NaN
// console.log(typeof res4); // "number"

// Task 2

// let userPrompt = prompt("Enter a numter", "123");

// if (Number(userPrompt) % 2 == 0){
//     console.log(`${userPrompt} is even`);
// }
// else {
//     console.log(`${userPrompt} is NOT even`);
// }
// if (Number(userPrompt) % 7 == 0){
//     console.log(`${userPrompt} is multiple of 7`);
// }
// else {
//     console.log(`${userPrompt} is NOT multiple of 7`);   
// }

// Task 3

// let isAdult = prompt("How old are you?") >= 18? true: false;

// if (isAdult){
//     alert("You are an adult");
// }
// else {
//     alert("You are too young");
// }

// Task 4

// let a, b, c, triangleSquare, semiperimeter;
// a = prompt("Enter side A of triangle");
// b = prompt("Enter side B of triangle");
// c = prompt("Enter side C of triangle");
// if ((a = parseFloat(a)) && (b = parseFloat(b)) && (c = parseFloat(c))){
//     semiperimeter = (a + b + c) / 2;
//     triangleSquare = (semiperimeter * (semiperimeter - a) * (semiperimeter - b) * (semiperimeter - c))**(1/2);
//     console.log(triangleSquare);
// }
// else {
//     alert("Incorrect data");
// }

// confirm("Does you triangle have 90 degree angle?")? console.log("It is a right triangle"): console.log("It isn't a right triangle");

// Task 5

let localTime = new Date().getHours();
console.log(localTime);

if ((localTime >= 5) && (localTime < 11)){
    console.log("Good morning");
}
else if ((localTime >= 11) && (localTime < 17)){
    console.log("Good day to you");
}
else if ((localTime >= 17) && (localTime < 23)){
    console.log("Good evening");
}
else {
    console.log("Good night");
}