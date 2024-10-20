//  function greet (city , country){
//     console.log(`my name is ${this.name} from ${city} ${country} `)
// }

const obj1 = {
    name : "jayant" ,
    age: 60,
    greet : function (city , country){
        console.log(`my name is ${this.name} from ${city} ${country} `)
    }
}

const obj2 = {
    name : "Nidhi" ,
    age: 10
}


const returnedFun = obj1.greet.bind(obj2 , "Delhi" , "india") ;
returnedFun() ;




// const returnedFun = greet.bind(obj1, "Delhi" , "India") 
// returnedFun() // jayant
// obj1.name = "richa"

// const returnedFun3 = greet.bind(obj1, "Delhi" , "India") 
// returnedFun3() // richa

// const returnedFun2 = greet.bind(obj2, "Delhi" , "India") 
// returnedFun2() //nidhi


// greet.apply(obj2,["delhi", "India"])






