//javascript function types
// Function types in JavaScript
function add(a, b) {
  return a + b;
}
console.log(add(5, 3)); // 8

//arrow function
const a=(x,y)=>{
    return x+y;
}
console.log(a(5, 5)); 

//anonymous function
const b=function(x,y){
    return x+y;
}
console.log(b(5, 5));
// Immediately Invoked Function Expression (IIFE)
(function() {
    console.log("This is an IIFE");
})();   

//difference between an arrow function and a regular function
// Arrow functions do not have their own 'this' context, while regular functions do.
// This means that in an arrow function, 'this' refers to the surrounding lexical context, while in a regular function, 'this' refers to the object that called the function.
// Example of 'this' in a regular function
const obj = {
    value: 42,
    regularFunction: function() {
        console.log(this.value); // 42
    },
    arrowFunction: () => {
        console.log(this.value); // undefined (or the global value if not in strict mode)
    }
};
obj.regularFunction(); // 42
obj.arrowFunction(); // undefined