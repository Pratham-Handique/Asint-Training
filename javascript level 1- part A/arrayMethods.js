//array methods are
//map
function mapArray() {
  let arr = [1, 2, 3, 4, 5];
  return arr.map(x => x * 2);
}
let mappedArray = mapArray();
console.log(mappedArray); // Output: [2, 4, 6, 8, 10]
//filter
function filterArray() {
  let arr = [1, 2, 3, 4, 5];
  return arr.filter(x => x > 2);
}
let filteredArray = filterArray();
console.log(filteredArray); // Output: [3, 4, 5]
//reduce
function reduceArray() {
  let arr = [1, 2, 3, 4, 5];
  return arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
}
let reducedValue = reduceArray();
console.log(reducedValue); // Output: 15 
// working of reduce explained
// The reduce method executes a reducer function (that you provide) on each element of the array, resulting in a single output value.
// The reducer function takes two parameters: the accumulator (which accumulates the callback's return values) and the current value 
// (the current element being processed in the array).
// The second argument to reduce (0 in this case) is the initial value of the accumulator.