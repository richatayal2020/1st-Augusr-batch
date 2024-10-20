const lib = require('./lib')

let amount = 2000 ;
let tocut = 200 

function changeDebit () {
    amount = amount - tocut 
    console.log(`remaining amount is ${amount}`)
}

const promobj = lib.promiseUpdateAccount('Tv').then(changeDebit)




