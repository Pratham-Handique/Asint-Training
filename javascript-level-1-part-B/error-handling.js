// error handling using try and catch 
function divide(a, b) {
    try {
        if (b === 0) {
            throw new Error("Cannot divide by zero");
        }
        return a / b;
    } catch (error) {
        console.error("Error:", error.message);
        // return null; // or any other fallback value
    }
}
// Example usage
console.log(divide(10, 2)); // for successful division
console.log(divide(10, 0)); // for division by zero
divide(10, 'a'); // for invalid input
