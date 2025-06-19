//spred in javascript
// Spread operator in JavaScript
// The spread operator (`...`) allows an iterable (like an array or object) to be expanded in places where zero or more arguments or elements are expected.
function spreadArray() {
  let arr1 = [1, 2, 3];
  let arr2 = [4, 5, 6];
  return [...arr1, ...arr2];
}
let spreadedArray = spreadArray();
console.log(spreadedArray); // Output: [1, 2, 3, 4, 5, 6]
// Spread operator can also be used with objects
function spreadObject() {
  let obj1 = { a: 1, b: 2 };
  let obj2 = { c: 3, d: 4 };
  return { ...obj1, ...obj2 };
}
let spreadedObject = spreadObject();
console.log(spreadedObject); // Output: { a: 1, b: 2, c: 3, d: 4 }