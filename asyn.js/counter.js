// function count(num) {
//     if (num < 1) return; 
//     console.log(num);    
//     setTimeout(() => count(num - 1), 1000);
//   }
//   count(20);


// let counter = 1; // 20sec
// let num = 50; // print
// const ref = setInterval(() => {
//     console.log(num)
//     num--
//     counter++
//     if (counter === 20) {
//         clearInterval(ref)
//     }
// },1000)

// console.log("b")
// console.log("c")
// setImmediate(()=>{
//     console.log("a")
// })

// setTimeout(()=>{
//     console.log("z")
// })
// console.log("e")

Promise.resolve().then(()=>{console.log("A")})


setTimeout(()=>{
    console.log("B")
})


setTimeout(()=>{
    console.log("D")
}, 2000)


setImmediate(()=>{
    console.log("C")
})