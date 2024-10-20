// const obj = {
//     name : "kuldeep" , 
//     age : 40,
//     true : false,
//     yy : "yyy"
// }

// console.log(obj["name"]) ;
// console.log(obj["true"]) ;
// console.log(obj.name) ;
// console.log(obj.true) ; 
// // console.log(obj[1020]) ;

// const cc = new Object() ;
// cc.name = "richa" 
// console.log(cc)


const obj1 = {
    name : "kuldeep" , 
    age: 40,
    greet : function(){
        console.log("Good morning by " , this.name)
    }
}


const obj4 = {...obj1} ;
obj4.name = "Harsh"
obj4.greet = function(){
    console.log("hiiii")
}
console.log(obj4.greet())
// console.log(obj1.greet())

const obj2 = {
    name : "muskan",
    age : 20,
    address : {
        city : "Delhi" , 
        pincode: "110059"
    }

}
// const obj3 = obj2 // assign same refrance object
// const obj3 = {...obj2 } // shallow copy 
// obj3.name = "richa"
// obj3.address.city = "agra"
// obj3.address.pincode = "110044"
// // obj3.name = "richa"
// // console.log(obj3.address.city)

// console.log(obj2) // muskan , 20 , delhi, 110059
// console.log(obj3) // richa , 20 , agra , 110044

const obj3 = JSON.parse(JSON.stringify(obj2)) // deep copy
obj3.name = "richa"
obj3.address.city = "agra"
obj3.address.pincode = "110044"
// obj3.name = "richa"
// console.log(obj3.address.city)

// console.log(obj2) // muskan , 20 , delhi, 110059
// console.log(obj3) // richa , 20 , agra , 110044






