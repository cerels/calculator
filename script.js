// Your calculator is going to contain functions for all of the basic math operators you typically find on calculators, so start by creating functions for the following items and testing them in your browser’s console.
//     add
//     subtract
//     multiply
//     divide
const add = (a, b) => a + b,
  subtract = (a, b) => a - b,
  multiply = (a, b) => a * b,
  divide = (a, b) => (b != 0 ? a / b : "can't divide by zero");

//   A calculator operation will consist of a number, an operator, and another number. For example, 3 + 5. Create three variables for each of the parts of a calculator operation. Create a variable for the first number, the operator, and the second number. You’ll use these variables to update your display later.
let num1,
    num2,
    operator;

    // Create a new function operate that takes an operator and 2 numbers and then calls one of the above functions on the numbers.

function operate(operator, a ,b) {
    switch (operator) {
        case "+":
            return add(a,b);
        case "-":
            return subtract(a,b);
        case "*":
            return multiply(a,b);
        case "/":
            return divide(a,b);
    
        default:
            return "invalid input";
    }
};

