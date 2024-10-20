let radius = [10,20,30] ;
function dia (r) {
    return 2* r 
}
function ciccum (r) {
    return 2 * Math.PI * r 
}
function calculate (radius , logic ){
    let output = [] 
    for(let i = 0 ; i < radius.length ; i++){
       let r = radius[i] ;
        output.push(logic(r)) ;
    }
    return output ;
}
calculate(radius , (r) => {
    return Math.PI * r * r 
})
calculate(radius , dia)
calculate(radius , ciccum)

// function calculateDia (radius){
//     let output = [] 
//     for(let i = 0 ; i < radius.length ; i++){
//         output.push(2 * radius[i])
//     }
//     return output ;
// }
// function calculateCircumference (radius){
//     let output = [] 
//     for(let i = 0 ; i < radius.length ; i++){
//         output.push(2 * Math.PI * radius[i])
//     }
//     return output ;
// }
// let area = calculateArea(radius) ;
// console.log(area)
// let cicum = calculateCircumference(radius) ;
// console.log(cicum)
// let dia = calculateDia(radius) ;
// console.log(dia)