// class Person {
//     constructor(name, age) {
//       this.name = name;
//       this.age = age;
//     }
  
//     greet() {
//       console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
//     }
//   }

//   const abc = {
//     name : "richa" ,
//     age : "22",
//     toString : function(){
//      console.log("hiii")
//     }
//  }

// //   Person.prototype = abc

// //   console.log(Person.prototype)


arr = [1,2,3] 
if(!Array.prototype.Mymap){
    Array.prototype.Mymap = function (cb) {
        let output = []
        for(let i = 0 ; i < this.length ; i++){
            let value = cb(this[i],i,this)
            output.push(value)
        }
        return output ;
    }
}
const ans = arr.Mymap((item )=>{
    return item*2 ;
})
console.log(ans)



if (!Array.prototype.Myfilter) {
    Array.prototype.Myfilter = function (cb) {
        let output = []
        for (let i = 0; i < this.length; i++) {
          let value=cb(this[i]);
          if(value){
            output.push(this[i])
          }
        }
        return output
    }
   
}


const ans1 = arr.Myfilter((item)=>  item%2)
console.log(ans1)













// // const arr = [1,2,3]

// // function abc() {

// // }
// // const s = "str"
// // // Array.prototype


// // console.log(Object.getPrototypeOf(s));

// const obj2 = {
//     greet : function(){
//         console.log("Greet")
//     }
// }


// // abc.toString()




// abc.__proto__ = obj2  
// abc.greet()

// // console.log(abc.__proto__.__proto__)














