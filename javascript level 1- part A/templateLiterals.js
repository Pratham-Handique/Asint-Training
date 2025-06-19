//template literals allow variable in strings and multi-line strings
const name = "John";
const age = 30;
// Using template literals to create a string with embedded expressions
const greeting = `Hello, my name is ${name} and I am ${age} years old.`;
console.log(greeting); // Output: "Hello, my name is John and I am 30 years old."
// Template literals can also be used for multi-line strings
const multiLineString = `This is a string
that spans multiple lines.
It can include line breaks
and special characters like \n and \t.`;
console.log(multiLineString);