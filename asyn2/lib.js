function upadteAccount (product , cb) {
    setTimeout(()=>{
        console.log(`${product} is purchased ` )
        cb() 
    } , 2000)
}

function promiseUpdateAccount (product) {
    return new Promise ((resolve , reject) => {
        setTimeout(()=>{
            resolve()
        })
    })
}




module.exports = {
    upadteAccount : upadteAccount ,
    promiseUpdateAccount:promiseUpdateAccount
}