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
let num1 = "",
  num2 = "",
  operator = "";

// Create a new function operate that takes an operator and 2 numbers and then calls one of the above functions on the numbers.

function operate(operator, a, b) {
  switch (operator) {
    case "+":
      return add(a, b);
    case "-":
      return subtract(a, b);
    case "*":
      return multiply(a, b);
    case "/":
      return divide(a, b);

    default:
      return "invalid input";
  }
}

// Create the functions that populate the display when you click the number buttons. You should be storing the ‘display value’ in a variable somewhere for use in the next step.

const results = document.getElementById("results"),
  operations = document.getElementById("operations"),
  numeralButtons = document.querySelectorAll(".numeral"),
  actionButtons = document.querySelectorAll(".action"),
  operatorButtons = document.querySelectorAll(".operator");

let displayValue = "",
  currentNum = "",
  resultValue = "";

numeralButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const number = button.textContent;
    displayValue += number;
    currentNum += number;
    updateDisplay();
  });
});

operatorButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const op = button.textContent;

    updateNumbers();
    operator = op;
    displayValue += op;
    updateDisplay();
  });
});

actionButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const action = button.textContent;

    if (action == "enter") {
      updateNumbers();
      displayValue = "";
      num1 = "";
      num2 = "";
      operator = "";
      updateDisplay();
    } else clear();
  });
});

function updateDisplay() {
  operations.textContent = displayValue;
}

function updateNumbers() {
  if (num1 == "" && num2 == "") {
    num1 = Number(currentNum);
    currentNum = "";
  } else if (num1 != "" && num2 == "") {
    num2 = Number(currentNum);
    resultValue = operate(operator, num1, num2);

    if (resultValue == "can't divide by zero") {
      num1 = "";
      displayValue = "";
      results.textContent = resultValue;
    } else {
      displayValue = resultValue;
      num1 = Number(resultValue);
    }
    results.textContent = roundToTwoDecimals(resultValue);
    num2 = "";
    currentNum = "";
  }
}

function roundToTwoDecimals(number) {
  // Check if the number has decimals
  if (Number.isInteger(number)) {
    return number; // Return the number as is
  } else {
    // Round to two decimal places
    return Number(number.toFixed(2));
  }
}

function clear() {
  results.textContent = "";
  operations.textContent = "";
  displayValue = "";
  num1 = "";
  num2 = "";
  operator = "";
  currentNum = "";
}
