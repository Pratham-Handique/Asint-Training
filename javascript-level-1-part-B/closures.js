function outerFunction(outVar){
    return function innerFunction(inVar){
        console.log("Outer variable:", outVar);
        console.log("Inner variable:", inVar);
        return outVar + inVar;
    }
}
const newFunction = outerFunction(10);
console.log(newFunction(5));
// Outputs: Outer variable: 10, Inner variable: 5, returns 15

// Explanation:
// The outerFunction takes an argument outVar and returns innerFunction.