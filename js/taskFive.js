const inputValue = document.querySelector("#name-input");
const outputValue = document.querySelector("#name-output");

inputValue.addEventListener(`input`, () => {
  if (inputValue === "") {
    outputValue.textContent = "Anonymous";
  } else {
    outputValue.textContent = inputValue.value;
  }
});

console.log(inputValue);
console.log(outputValue);
