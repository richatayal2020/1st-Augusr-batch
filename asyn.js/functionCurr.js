// function sum(a) {
//     return function(b) {
//         return function(c){
//             return function(d){
//                 return a+b+c+d
//             }
//         }
//     }
// }

//  const ans = sum(1)(2)(3)(4)
//  console.log(ans);


function sum (a){
    return function (b){
        if(!b) {
            return a ; 
        }
        return sum(a+b) ;
    }
}
 
console.log(sum(1)(2)(3)(4)())