let operation = "";
const buttons = document.querySelectorAll(".calculator button");
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
    console.log(operation);
  });
});
function operate() {
  return eval(operation);
}

console.log(operate());
