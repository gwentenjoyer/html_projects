//Task 1
function upperCase(expression) {
    let regExp = /[A-Z]/g;
    if (regExp.test(expression[0])) {
        console.log("Рядок починається з малої літери");
    }
    else {
        console.log("Рядок починається з великої літери");
    }
}

upperCase('regexp');
upperCase('RegExp');

//Task 2
function substringSwitch(expression) {
   return expression.split(/\s/).reverse().join(' ');
}

console.log(substringSwitch('Java Script'));

//Task 3
function cardNumber(expression) {
    let regExp = /^\d{4}-\d{4}-\d{4}-\d{4}$/;
    if (regExp.test(expression)) {
        console.log("Номер картки правильний");
    }
    else {
        console.log("Номер картки не правильний");
    }
}
cardNumber('(9999-9999-9999-9999');
cardNumber('(9999-999-9999-9999');

//Task 4
function email(email) {
    let regExp = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z0-9]+$/;
    if (regExp.test(email)) {
        console.log("Електронна адреса правильна");
    }
    else {
        console.log("Електронна адреса не правильна");
    }
}

email('mymail@gmail.com');
email('#my_mail@gmail.com');
email('my_ma--il@gmail.com');

//Task 5
function login(login){
    let regExp = /^[a-zA-Z][a-zA-Z0-9]{1,9}$/;
    console.log(regExp.test(login));
    let result = login.match(/\d*\.?\d+/g).filter(n => n.length > 0).join(' ');
    console.log(result);
}

login('ee11ret3');
login('3e11ret3');
login('ee1.1ret3');
login('ee1*1ret3');