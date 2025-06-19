//rest operator in javascript
// The rest operator (`...`) allows us to represent an indefinite number of arguments as an array.
function restOperator(...args) {
  return args.reduce((acc, curr) => acc + curr, 0);
}
let sum = restOperator(1, 2, 3, 4, 5);
console.log(sum); // Output: 15
// The rest operator can also be used in function parameters to collect all remaining arguments into an array.
function restInFunction(...params) {
  console.log(params);
}
restInFunction(1, 2, 3, 4, 5); // Output: [1, 2, 3, 4, 5]
// The rest operator can be used in destructuring to collect remaining elements into an array.
function restInDestructuring() {
  let arr = [1, 2, 3, 4, 5];
  let [first, second, ...rest] = arr;
  console.log(first);  // Output: 1
  console.log(second); // Output: 2
  console.log(rest);   // Output: [3, 4, 5]
}
restInDestructuring();

// The rest operator can also be used in object destructuring to collect remaining properties into an object.