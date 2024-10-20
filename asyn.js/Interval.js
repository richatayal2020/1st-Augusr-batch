count = 0 ; 

const ref1 = setInterval(()=>{
    console.log(count)
    count++ 
    if(count === 5) 
        clearInterval(ref2)
} , 1000 )


const ref2 = setInterval(()=>{
    console.log("hello")
    count++ 
    if(count === 6) 
        clearInterval(ref1)
} , 1000 )