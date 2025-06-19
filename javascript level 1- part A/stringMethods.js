// string methods for various operations
//uppperCase
function myFunction() {
  let text = "Hello World!";
  return text.toUpperCase();
}
a= myFunction();
console.log(a); // Output: "HELLO WORLD!"

//concatenation
function concatenateStrings() {
  let str1 = "Hello";
  let str2 = "World";
  return str1 + " " + str2;
}
b = concatenateStrings();
console.log(b); // Output: "Hello World"
//substring
function getSubstring() {
  let str = "Hello World";
  return str.substring(0, 5);
}
c = getSubstring();
console.log(c); // Output: "Hello"
//split
function splitString() {
  let str = "Hello World";
  return str.split(" ");
}
d = splitString();
console.log(d); // Output: ["Hello", "World"]
//slice
function sliceString() {
  let str = "Hello World";
  return str.slice(0, 5);
}
e = sliceString();
console.log(e); // Output: "Hello"