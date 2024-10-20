function greet (){
    console.log(this.name) 
}

const obj1 = {name : "richa"}
const obj2 = {name : "nidhi"}

const func = greet.bind(obj1) 
console.log(func);
func()

const func2 =func.bind(obj2) 
func2() 





