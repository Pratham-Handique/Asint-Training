//destructering in javascript
// Destructuring in JavaScript
// Destructuring is a syntax that allows unpacking values from arrays or properties from objects into distinct variables.
// It makes it easier to extract values from arrays and objects without having to access them individually.
// Array Destructuring
let arr = [1, 2, 3, 4, 5];
let [first, second, ...rest] = arr;
console.log(first);  // Output: 1
console.log(second); // Output: 2
console.log(rest);   // Output: [3, 4, 5]
// Object Destructuring
let obj = { name: "Alice", age: 25, city: "New York" };
let { name, age, ...otherDetails } = obj;
console.log(name);         // Output: "Alice"
console.log(age);          // Output: 25
console.log(otherDetails); // Output: { city: "New York" }
// Nested Destructuring
let nestedObj = { 
  person: { 
    name: "Bob", 
    age: 30 
  }, 
  location: "California" 
};
let { person: { name: personName, age: personAge }, location } = nestedObj;
console.log(personName); // Output: "Bob"
console.log(personAge);  // Output: 30
console.log(location);   // Output: "California"
// Default Values in Destructuring
let [a = 10, b = 20] = [5];
console.log(a); // Output: 5
console.log(b); // Output: 20
// Default values can also be used in object destructuring
let { x = 1, y = 2 } = { x: 10 };
console.log(x); // Output: 10
console.log(y); // Output: 2
// Function Parameter Destructuring
function displayInfo({ name, age }) {
  console.log(`Name: ${name}, Age: ${age}`);
}
let user = { name: "Charlie", age: 28 };                
displayInfo(user); // Output: "Name: Charlie, Age: 28"
