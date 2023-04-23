// Task 1

// let arr = [];
// arr[0] = 42;
// arr[1] = "lorem";
// arr[2] = false;
// arr[3] = null;
// console.log(arr.length);
// arr[4] = prompt("enter a string", "");
// // arr[4] = "asdf";
// console.log(arr[4]);
// arr.shift();
// console.log(arr);

// Task 2

// let stringSuper = arr.join("*");
// console.log(stringSuper);

// Task 3

// let arrTask3 = [2, 3, 4, 5];
// let mult = 1;
// for (let i = 0; i < arrTask3.length;++i){
//     mult *= arrTask3[i];
// }
// console.log(mult);

// mult = 1;
// for (let i = 0; i < arrTask3.length;++i){
// }
// let i = 0;
// while (i < arrTask3.length){
//     mult *= arrTask3[i];
//     ++i;
// }
// console.log(mult);

// Task 4

// for(let i = 0; i < 16; ++i){
//     if (i % 2 == 0){
//         console.log(`${i} is even`);
//     }
//     else{
//         console.log(`${i} is odd`);        
//     }
// }

// Task 5

// function randArray(c){
//     let arr = []
//     for(let i = 0; i < c; ++i){
//         arr[i] = Math.floor(Math.random() * 501);
//     }
//     return arr;
// }
// console.log(randArray(5));

// Task 6

// function raiseToDegree(a, b){
//     if (a === undefined){
//         a = prompt("enter a base for powering");
//     }
//     if (b === undefined){
//         b = prompt("enter a degree for powering");
//     }
//     a = parseInt(a);
//     b = parseInt(b);
//     return a**b;
// }

// console.log(raiseToDegree(3, 4));
// console.log(raiseToDegree());

// Task 7

// function findMin(){
//     let min = arguments[0];
//     for(let arg of arguments){
//         if (min > arg){
//             min = arg;
//         }
//     }
//     return min;
// }

// console.log(findMin(12, 14, 4, -4, 0.2, -4.55));

// Task 8

// function findUnique(arr) {
//     for (let i = 0; i < arr.length; i++) {
//       for (let j = i + 1; j < arr.length; j++) {
//         if (arr[i] === arr[j]) {
//           return false;
//         }
//       }
//     }
//     return true;
//   }

// console.log(findUnique([1, 2, 3, 5, 3])); // false
// console.log(findUnique([1, 2, 3, 5, 11])); // true

// Task 9

// function lastElem(a, b){
//     if(!b){
//         return a.pop();
//     }
//     return a.slice(a.length - b);
// }

// console.log(lastElem([3, 4, 10, -5])); // -5
// console.log(lastElem([3, 4, 10, -5],2)); // [10, -5]
// console.log(lastElem([3, 4, 10, -5],8)); // [3, 4, 10, -5]

// Task 10

let capitalizeWords = function(str) {
    let words = str.split(" ");
    for (let i = 0; i < words.length; i++) {
      words[i] = words[i][0].toUpperCase() + words[i].slice(1);
    }
    return words.join(" ");
}

console.log(capitalizeWords("i love java script")); // 'I Love Java Script'