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
