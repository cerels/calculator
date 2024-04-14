// Basic math functions
const add = (a, b) => a + b,
  subtract = (a, b) => a - b,
  multiply = (a, b) => a * b,
  divide = (a, b) => (b !== 0 ? a / b : "can't divide by zero");

// Operator mapping
const operators = {
  "+": add,
  "-": subtract,
  "*": multiply,
  "/": divide,
};

// Variables
let num1 = "",
  num2 = "",
  operator = "",
  displayValue = "",
  currentNum = "",
  resultValue = "";

// Display elements
const results = document.getElementById("results"),
  operations = document.getElementById("operations"),
  numeralButtons = document.querySelectorAll(".numeral"),
  actionButtons = document.querySelectorAll(".action"),
  operatorButtons = document.querySelectorAll(".operator");

// Event listeners for numeral buttons
numeralButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const number = button.textContent;
    displayValue += number;
    currentNum += number;
    updateDisplay();
  });
});

// Event listener for operator buttons
operatorButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const op = button.textContent;

    updateNumbers();
    operator = op;
    displayValue += op;
    updateDisplay();
  });
});

// Event listener for action buttons
actionButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const action = button.textContent;

    if (action === "enter") {
      updateNumbers();
      displayValue = "";
      num1 = "";
      num2 = "";
      operator = "";
      updateDisplay();
    } else clear();
  });
});

// Function to update display
function updateDisplay() {
  operations.textContent = displayValue;
}

// Function to update numbers based on operator
function updateNumbers() {
  if (num1 === "" && num2 === "") {
    num1 = Number(currentNum);
    currentNum = "";
  } else if (num1 !== "" && num2 === "") {
    num2 = Number(currentNum);
    resultValue = operate(operator, num1, num2);

    if (resultValue === "can't divide by zero") {
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

// Function to round to two decimals
function roundToTwoDecimals(number) {
  return Number.isInteger(number) ? number : Number(number.toFixed(2));
}

// Function to clear
function clear() {
  results.textContent = "";
  operations.textContent = "";
  displayValue = "";
  num1 = "";
  num2 = "";
  operator = "";
  currentNum = "";
}

// Function to operate
function operate(operator, a, b) {
  const operation = operators[operator];
  return operation ? operation(a, b) : "invalid input";
}
