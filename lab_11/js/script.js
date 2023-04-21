// Task 2

console.log("My_surname");

// Task 3

let varFirst = 42, varSecond = "memento_mori";

console.log(`varFirst is "${varFirst}" and varSecond is "${varSecond}"`);

varFirst = varSecond;

console.log(`now varFirst is "${varFirst}" and varSecond is "${varSecond}" too`);

// Task 4

let simpleObject = {
    string: "str",
    number: "69",
    boolean: "true",
    undef: undefined,
    empty: null 
}

// Task 5

// let isAdult = confirm("Are you an adult?");
// console.log(isAdult);

// Task 6

let personalInfo = {
    name: "MyFirstName",
    surname: "MySecondNameSupposedToBeHere",
    group: "CS321",
    birthYear: 2000,
    // maritalStatus: "single"
    isMarried: false
}

console.log(`name: ${typeof personalInfo.name}
surname: ${typeof personalInfo.surname}
group: ${typeof personalInfo.group}
birthYear: ${typeof personalInfo.birthYear}
isMarried: ${typeof personalInfo.isMarried}`);

let none, empty = null;
console.log(`nome: ${typeof none}
empty: ${typeof empty}`);

// Task 7

// let signInfo = {
//     login: null,
//     email: null,
//     password: null
// }

// signInfo.login = prompt("What's your login?");
// signInfo.email = prompt("What's your email?");
// signInfo.password = prompt("What's your password?");

// alert(`Dear "${signInfo.login}", your email is "${signInfo.email}" and password is "${signInfo.password}"`);

// Task 8

let secInTime = {
    hour: null,
    day: null,
    mounth: null
}

secInTime.hour = 60 * 60;
secInTime.day = secInTime.hour * 24;
secInTime.mounth = secInTime.day * 30;