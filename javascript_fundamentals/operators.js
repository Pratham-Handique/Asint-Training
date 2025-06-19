//operators types in javascript
const operators = {
  arithmetic: {
    addition: (a, b) => a + b,
    subtraction: (a, b) => a - b,
    multiplication: (a, b) => a * b,
    division: (a, b) => a / b,
    modulus: (a, b) => a % b,
  },
  comparison: {
    equal: (a, b) => a === b,
    notEqual: (a, b) => a !== b,
    greaterThan: (a, b) => a > b,
    lessThan: (a, b) => a < b,
    greaterThanOrEqual: (a, b) => a >= b,
    lessThanOrEqual: (a, b) => a <= b,
  },
  logical: {
    and: (a, b) => a && b,
    or: (a, b) => a || b,
    not: (a) => !a,
  },
};
// Usage examples
console.log(operators.arithmetic.addition(5, 3)); // 8
console.log(5+ 3); // 8