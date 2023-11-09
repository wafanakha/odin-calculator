let operation = "";
const buttons = document.querySelectorAll(".calculator button");
const is = document.querySelector("#is");
const display = document.querySelector(".display");

function operate(numbers) {
  return eval(numbers);
}

buttons.forEach((element) => {
  element.addEventListener("click", () => {
    if (
      element.innerHTML == "*" ||
      element.innerHTML == "/" ||
      element.innerHTML == "-" ||
      element.innerHTML == "+"
    ) {
      operation += " " + element.innerHTML + " ";
    } else {
      operation += element.innerHTML;
    }
    display.innerText = operation;
    console.log(operation);
  });
});

is.addEventListener("click", () => {
  display.innerText = operate(operation);
});
console.log(operate());
