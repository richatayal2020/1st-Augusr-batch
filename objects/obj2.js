const obj2 = {
    name : "muskan",
    age : 20,
    address : {
        city : "Delhi" , 
        pincode: "110059"
    }
}


console.log(JSON.parse(JSON.stringify(obj2)))