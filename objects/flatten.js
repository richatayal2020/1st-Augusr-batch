const obj2 = {
    name : "muskan",
    age : 20,
    address : {
        city : "Delhi" , 
        pincode: "110059"
    }
}

// console.log(typeof "richa") ;

function flattenObj(obj , parent , res = {}) {
    for(let key in obj){
        let propName = parent ? parent + "_" + key : key ;
        if(typeof obj[key] == 'object'){
            flattenObj(obj[key] , propName , res)
        }
        else{
            res[propName] = obj[key] ;
        }
    }
    return res ;
}

const ans = flattenObj(obj2 , "" )
console.log(ans)




