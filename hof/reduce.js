// let arr = [1,2,3]

// let ans = arr.reduce((acc , curr)=>{
//     console.log(curr + " //" + acc)
//     // console.log(acc)
//     return acc + curr ;
// } , 0 )


// console.log(ans) 


// arr = [1,2,3,4,4,5,60,22,11,55,0] // find maxValue using reduce


// const numbers = [5, 3, 8, 1, 9, 2];

// const max = numbers.reduce((acc, curr) => {
//   return curr > acc ? curr : acc;
// }, numbers[0]);

// console.log(max);


// function task(arr) {
//    return  arr.reduce((acc, el) => {
//         if (el > acc) { 
//             return el;
//         } else {
//             return acc;
//         }
//     }, 0)
// }

// console.log(task(arr))


// [5,10,15,20] * 3 > 30 

const colors = ['red', 'blue', 'yellow', 'red', 'blue', 'red', 'yellow', 'yellow'];

const colorFrequency = colors.reduce((accumulator, color) => {
  if (accumulator[color]) {
    accumulator[color] += 1;
  } else {
    accumulator[color] = 1;
  }
  return accumulator;
}, {});

// console.log(colorFrequency);


// let obj = {
//     name : "richa"
// }

// console.log(obj["name"]) 


// const numbers = [1, 2, 2, 3, 1, 4, 4, 4];
//       const counts = {};
//       numbers.forEach((num) => {
//         counts[num] = ( counts[num] || 0)  + 1;
//       });
//       console.log(counts);

// sum of all the ages ,  > 20 ,  *** before adding *** double them

// const people = [
//     {name : "Richa" , age:22} ,
//     {name : "Richa" , age:22} ,
//     {name : "Richa" , age:22} ,
//     {name : "Richa" , age:22} ,


// ]


// function task(arr) {
//     return arr.filter((el) => el.age > 20).map((el) => el.age * 2).reduce((acc, el) => acc + el.age, 0)
// }

// console.log(task(people)) 



const people = [
    { name: "a", age: 25 },
    { name: "b", age: 30 },
    { name: "c", age: 18 },
    { name: "d", age: 22 }
  ];
  
  const sumOfDoubledAges = people
    .filter(person => person.age > 20)
    .map(person => person.age * 2)
    .reduce((accumulator, currentAge) => accumulator + currentAge, 0);
  
  console.log(sumOfDoubledAges);


//   const person = [
//     { name: "a", age: 21 },
//     { name: "b", age: 36 },
//     { name: "c", age: 19 },
//     { name: "d", age: 22 }
// ];

// const peopleAge = person
//     .filter(people => people.age > 20)
//     .map(people => people.age * 2)
//     .reduce((acc, curr) => acc + curr, 0);




