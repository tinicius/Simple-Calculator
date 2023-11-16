let operation = "";
let memory = 0;

let expressionText = "";

const setOperation = (value) => {

  switch (value) {
    case "/":
      operation += "/";
      expressionText += "÷";
      break;

    case "*":
      operation += "*";
      expressionText += "x";
      break;

    default:
      operation += value;
      expressionText += value;
      break;
  }

  document.getElementsByClassName("screen-text-1")[0].innerHTML =
    expressionText;
};

const clearOperation = () => {
  operation = "";
  expressionText = "";
  document.getElementsByClassName("screen-text-1")[0].innerHTML = "";
  document.getElementsByClassName("screen-text-2")[0].innerHTML = "";
};

const changeSignalOperation = () => {
  if (operation.length == 0) return;

  expressionText = eval(operation) * -1;
  operation = eval(operation) * -1;

  document.getElementsByClassName("screen-text-1")[0].innerHTML =
    expressionText;
};

const calculate = () => {
  const result = Number(eval(operation));

  if (Number.isNaN(result)) return;

  operation = result;
  expressionText = result;

  document.getElementsByClassName("screen-text-2")[0].innerHTML = result;
};

const memoryRead = () => {
  operation += memory;
  expressionText += memory;

  document.getElementsByClassName("screen-text-1")[0].innerHTML =
    expressionText;
};

const memoryClear = () => {
  memory = 0;
};

const memoryAdd = () => {
  if (!Number.isNaN(Number(eval(operation)))) memory += Number(eval(operation));
};

const memoryRemove = () => {
  if (!Number.isNaN(Number(eval(operation)))) memory -= Number(eval(operation));
};

document.addEventListener(
  "keypress",
  (event) => {
    var name = event.key;
    var code = event.code;

    if (
      (code.includes("Digit") || code.includes("Numpad")) &&
      !Number.isNaN(Number(name))
    ) {
      setOperation(name);
    } else if ((code == "Equal" && name === "+") || code == "NumpadAdd") {
      setOperation("+");
    } else if ((code == "Minus" && name === "-") || code == "NumpadSubtract") {
      setOperation("-");
    } else if ((code == "Digit8" && name === "*") || code == "NumpadMultiply") {
      setOperation("*");
    } else if ((code == "IntlRo" && name === "/") || code == "NumpadDivide") {
      setOperation("/");
    } else if (code == "KeyW") {
      memoryAdd();
    } else if (code == "KeyE") {
      memoryRemove();
    } else if (code == "KeyR") {
      memoryRead();
    } else if (code == "Enter" || code == "NumpadEnter") {
      calculate();
    }

  },
  false
);
