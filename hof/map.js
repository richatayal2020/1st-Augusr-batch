// let arr = [10, 20, 30, 40];

// // arr i want to map arr to its squares

// const mappedArr = arr.map((item , idx , fullArr) => {
//  return  item * item;
// });

// console.log(mappedArr);


// arr = ["apple" , "mango" , "banana"] 
//  ["Apple" , "Mango" , "Banana"]


 const arr = ["apple", "banana"];

const capitalizedArr = arr.map(item => item.charAt(0).toUpperCase() + item.slice(1));

console.log(capitalizedArr);