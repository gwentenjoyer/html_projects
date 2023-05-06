// Task 1

// function calcRectangleArea(rectHeight, rectWidth) {
//     if(!(rectHeight && rectWidth)){
//         throw new Error("Sides cannot be empty!");
//     }
//     else {
//         if (isNaN(rectHeight) || isNaN(rectWidth)) {
//             throw new Error("Invalid numerical character(s) given!");
//        }
//        return rectHeight*rectWidth;
//     }
// }

// try {
//     let height = prompt("Enter height of rectangle");
//     let width = prompt("Enter width of rectangle");
//     let area = calcRectangleArea(height, width);
//     alert(area);
// }
// catch (e) {
//         alert(e);
// }

// Task 2

// let checkAge = function(){
//     let age = prompt("What's your age?");
//     if(!age){
//         throw("The field is empty! Please enter your age");
//     }
//     if(isNaN(age)){
//         throw("You've entered non-numeric value.");
//     }
//     if(age < 14){
//         throw("Your age must be above 14 to proceed!");
//     }

// }

// try {
//     checkAge();
//     (function showMovie(){alert("Success")}());
// } catch (e) {
//     alert(e);
// }

// Task 3

// function showUser(id){
//     if (id < 0){
//         throw("Error: ID must not be negative: " + id);
//     }
//     return {id: id};
// }

// let showUsers = function(ids){
//     let returnArray = [];
//     for(let i in ids){
//     // for (let i = 0; i < ids.length; ++i){
//         try {
//             returnArray.push(showUser(ids[i]));
//             // returnArray.push(showUser(ids[i]));
//         }
//         catch(e){
//             console.log(e);
//         }
//     }
//     return returnArray;
// }

// let result = showUsers([7, -12, 44, 22]);
// console.log(result);

// Task 4

class MonthException{
    constructor(message){
        this.name = "MonthException";
        this.message = message;
    }
}

function showMonthName(month){
    if ((month > 12) || (month <= 0)){
        throw new MonthException("Incorrect month number");
    }
    const date = new Date();
    date.setMonth(month - 1);

  return date.toLocaleString('en-US', { month: 'long' });
}
try{
    console.log(showMonthName(5));
}
catch(e){
    console.log(e.name + " " + e.message);
}
