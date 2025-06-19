//json methods are 
//stringify
function stringifyJson() {
  let obj = { name: "Alice", age: 25, city: "New York" };
  return JSON.stringify(obj);// convert object to JSON string
}
// Output: '{"name":"Alice","age":25,"city":"New York"}'
function parseJson() {
  let jsonString = '{"name":"Alice","age":25,"city":"New York"}';
  return JSON.parse(jsonString);// convert JSON string to object
}
// Output: { name: 'Alice', age: 25, city: 'New York' }
console.log(stringifyJson()); // Output: '{"name":"Alice","age":25,"city":"New York"}'
console.log(parseJson()); // Output: { name: 'Alice', age: 25, city: 'New York' }