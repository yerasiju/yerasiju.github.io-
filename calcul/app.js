const resultElement = document.getElementById("result");
const input1 = document.getElementById("input1");
const input2 = document.getElementById("input2");
const submitBtn = document.getElementById("submit");
const plusBtn = document.getElementById("plus");
const minusBtn = document.getElementById("minus");
let action = "+";

console.log(input1.value);
console.log(input2.value);
let result = 0;

plusBtn.onclick = function () {
  action = "+";
  console.log(action);
};
minusBtn.onclick = function () {
  action = "-";
  console.log(action);
};

submitBtn.onclick = function () {
  if (action == "-") {
    result = Number(input1.value) - Number(input2.value);
    console.log(result);
  }

  calculate(input1, input2, action);

  addColor(result);

  resultElement.textContent = result;
};

function addColor(result) {
  if (result < 0) {
    resultElement.style.color = "red";
  } else {
    resultElement.style.color = "green";
  }
}

function calculate(input1, input2, action) {
  if (action == "+") {
    result = Number(input1.value) + Number(input2.value);
    console.log(result);
  }
  return result;
}

const multiplyBtn = document.getElementById("multiply");
const divideBtn = document.getElementById("divide");

multiplyBtn.onclick = function () {
  action = "*";
  console.log(action);
};

divideBtn.onclick = function () {
  action = "/";
  console.log(action);
};

function calculate(input1, input2, action) {
  if (action == "+") {
    result = Number(input1.value) + Number(input2.value);
  } else if (action == "-") {
    result = Number(input1.value) - Number(input2.value);
  } else if (action == "*") {
    result = Number(input1.value) * Number(input2.value);
  } else if (action == "/") {
    result = Number(input1.value) / Number(input2.value);
  }
  return result;
}
