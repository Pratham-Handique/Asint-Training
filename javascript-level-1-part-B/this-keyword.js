//this keyword refers to an object

//when used in a object method , this refers to the object
// for example
const person = {
  firstName: "John",
  lastName: "Doe",
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
};
console.log(person.fullName()); 

// alone this keyword refers to the global object
//example
function showThis() {
  console.log(this);
}
showThis(); 

// in a function, this refers to the global object
function showThisInFunction() {
  console.log(this);
}
showThisInFunction();

//strict mode changes the behavior of this
"use strict";
function showThisInStrictMode() {
  console.log(this);
}
showThisInStrictMode(); // undefined in strict mode
// object method binding
const person1 = {
  firstName  : "John",
  lastName   : "Doe",
  id         : 5566,
  myFunction : function() {
    return this;
  }
};
console.log(person1.myFunction()); // person1 object