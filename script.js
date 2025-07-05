let operator = null;
let result = 0;

let displayState = [];
let display = document.querySelector("#display");

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

function handleBtnClick(btnValue) {
  if (
    displayState.length === 0 &&
    btnValue !== "+" &&
    btnValue !== "-" &&
    btnValue !== "*" &&
    btnValue !== "/" &&
    btnValue !== "="
  ) {
    displayState.push(btnValue);
    console.log(displayState);
  } else if (
    displayState.length === 1 &&
    (btnValue === "+" ||
      btnValue === "-" ||
      btnValue === "*" ||
      btnValue === "/")
  ) {
    displayState.push(btnValue);
    console.log(displayState);
  } else if (
    displayState.length === 1 &&
    btnValue !== "+" &&
    btnValue !== "-" &&
    btnValue !== "*" &&
    btnValue !== "/" &&
    btnValue !== "="
  ) {
    displayState[0] += btnValue;
    console.log(displayState);
  } else if (
    displayState.length === 2 &&
    btnValue !== "+" &&
    btnValue !== "-" &&
    btnValue !== "*" &&
    btnValue !== "/" &&
    btnValue !== "="
  ) {
    displayState.push(btnValue);
    console.log(displayState);
  } else if (
    displayState.length === 3 &&
    (btnValue === "+" ||
      btnValue === "-" ||
      btnValue === "*" ||
      btnValue === "/")
  ) {
    result = operate(
      parseInt(displayState[0]),
      parseInt(displayState[2]),
      displayState[1]
    );
    displayState = [];
    displayState.push(result.toString());
    displayState.push(btnValue);
    console.log(displayState);
  } else if (
    displayState.length === 3 &&
    btnValue !== "+" &&
    btnValue !== "-" &&
    btnValue !== "*" &&
    btnValue !== "/" &&
    btnValue !== "="
  ) {
    displayState[2] += btnValue;
    console.log(displayState);
  } else if (displayState.length === 3 && btnValue === "=") {
    result = operate(
      parseInt(displayState[0]),
      parseInt(displayState[2]),
      displayState[1]
    );
    displayState = [];
    displayState.push(result.toString());
    console.log(result);
  }
}
