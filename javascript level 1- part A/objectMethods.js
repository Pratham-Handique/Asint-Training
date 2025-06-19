// ohject methods
// object methods for various operations

// Object methods for various operations
function getObjectKeys() {
  let obj = { name: "Alice", age: 25, city: "New York" };
  return Object.keys(obj);
}
res = getObjectKeys();
console.log(res); // Output: ["name", "age", "city"]
//get object values
function getObjectValues() {
  let obj = { name: "Alice", age: 25, city: "New York" };
  return Object.values(obj);
}
res1 = getObjectValues();
console.log(res1); // Output: ["Alice", 25, "New York"]
//get object entries
function getObjectEntries() {
  let obj = { name: "Alice", age: 25, city: "New York" };
  return Object.entries(obj);
}
res2 = getObjectEntries();
console.log(res2); // Output: [["name", "Alice"], ["age", 25], ["city", "New York"]]
//assign properties from one object to another
function assignObjectProperties() {
  let obj1 = { name: "Alice" };
  let obj2 = { age: 25, city: "New York" };
  return Object.assign(obj1, obj2);
}
res3 = assignObjectProperties();
console.log(res3); // Output: { name: "Alice", age: 25, city: "New York" }