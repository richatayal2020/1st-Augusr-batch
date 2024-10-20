// const obj = {
//     name: "Richa",
//     regularFunction: function () {
//       const self = this;  // Save reference to `this` (the object)
      
//       this.arrowFunction = () => {
//         console.log(self.name); // `self` is the reference to the object
//       };
//     }
//   };
  
//   obj.regularFunction();
//   obj.arrowFunction();  // Output: "Richa"
  
const obj = {
  name: "Richa",
  regularFunction: function () {
    this.arrowFunction = () => {
      console.log(this.name); // Now `this` refers to `obj`
    };
  }
};

obj.regularFunction();
obj.arrowFunction();  // Output: "Richa"
