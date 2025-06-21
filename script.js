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
    add(numberOne, numberTwo);
  } else if (operator === "-") {
    subtract(numberOne, numberTwo);
  } else if (operator === "*") {
    multiply(numberOne, numberTwo);
  } else if (operator === "/") {
    divide(numberOne, numberTwo);
  } else return error;
}
