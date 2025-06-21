function add(numberOne, numberTwo) {
  return numberOne + numberTwo;
}

function subtract(numberOne, numberTwo) {
  return numberOne - numberTwo;
}

function multiply(numberOne, numberTwo) {
  return numberOne * numberTwo;
}

function divide(numberOne, numberTwo) {
  return numberOne / numberTwo;
}

function operate(numberOne, numberTwo, operator) {
  if (operator === "+") {
    return add(numberOne, numberTwo);
  } else if (operator === "-") {
    return subtract(numberOne, numberTwo);
  } else if (operator === "*") {
    return multiply(numberOne, numberTwo);
  } else if (operator === "/") {
    return divide(numberOne, numberTwo);
  } else return error;
}
console.log("operation", operate(2, 2, "+"));
