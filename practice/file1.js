// // let arr = [1,2,3,4]

// // const evens = arr.filter((x) => x%2===0)

// // console.log(evens)


// // // const arr = [7, 4, 8, 9, 5];
// // // console.log(arr.reduce((acc, el) => acc + el, 0));


// // const twoDArray = [[1, 2], [3, 4], [5, 6]];
// // const oneDArray = twoDArray.flat();
// // console.log(oneDArray);

// // let output = [] 
// // for(let i = 0 ; i < twoDArray.length ; i++){
    
// //     if(Array.isArray(twoDArray[i])){
// //         twoDArray[i].forEach(element => {
// //             output.push(element) 
// //         });
// //     }
// //     else{
// //         output.push(twoDArray[i])
// //     }
// // }

// // console.log(output)



// const nestedArray = [1, [2, 3], [4, [5, 6]]];
// const flattenedArray = nestedArray.reduce((acc, val) => acc.concat(Array.isArray(val) ? val.flat(Infinity) : val), []);
// console.log(flattenedArray); 



// // const nestedArray = [1, [2, 3], [4, [5, 6]]];
// // const flattenedArray = nestedArray.reduce((acc, val) =>{
// //     acc = [] 
// //     if(Array.isArray(val) ) {
// //         console.log(acc , "//" , val)
// //         acc.concat(val.flat())
// //     } else {
// //         console.log(acc , "//" , val)
// //         acc.concat( val)
// //     }}, [] );

// // console.log(flattenedArray);


// // arr = [1,2,3,1,2]

// //  ans = [...new Set(arr) ]
// //  console.log(ans)




//     arr = [{age:20} ,{age:30} ,{age:20},{age:30},{age:40},{age:50}]
    
//     function abc (arr , prop){

//     let ans = arr.reduce(( acc , obj )=>{
//         // obj = {age:20}
//         let key = obj[prop]; // key = 20  
//         if(!acc[key]){
//             acc[key] = [] 
//         }
//         acc[key].push(obj)
//         return acc 
//     } , {})

//     return ans ;
//     }

//     console.log(abc(arr,'age'))

    // arr=[1,2,3,4,5,6]
    // let size = 2 ;
    // let result=[]

    // for(let i = 0 ; i < arr.length ; i += size){
    //     result.push(arr.slice(i , i + size))
    // }

    // console.log(result)
// this = > arr 

// Aarr.map

    if(!Array.prototype.map){
        Array.prototype.map = function (cb) {
            let output = [] 
            for(let i = 0 ; i < this.length ; i++) {
            const val = cb(this[i] , i , this)
            output.push(val)
        }
        return output ;
        }
    }


    
    // obj ={
    //     name : "richa",
    //     age:22,
    //     adress : "delhi"
    // }

    // console.log(JSON.parse(JSON.stringify(obj)))


    if (!Array.prototype.filter) {
        Array.prototype.filter = function(cb) {
            let result = [];
            for (let i = 0; i < this.length; i++) {
                if (cb(this[i], i, this)) {
                    result.push(this[i]); 
                }
            }
            return result; 
        };
    }
// Array.map().filter()


// let arr1 = ['a','b','c'] ;

// ans = arr1.map((item)=>{
// return {value : item} 
// })

// console.log(ans) 




// arr = [1,2,3,4] 

// function abc (arr , cb){
// ans =  arr.reduce((acc , val)=>{
//     cb(val) ? acc[0].push(val) : acc[1].push(val)
//     return acc ;
// } , [[] , []] )

// return ans ;
// }

// console.log(abc(arr, (a)=>{ return a %2 ;}))



// {name : "" , age: }
// {name : "" , age: }
// {name : "" , age: }
// {name : "" , age: }


