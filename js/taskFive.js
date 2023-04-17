const inputValue = document.querySelector("#name-input");
const outputValue = document.querySelector("#name-output");

inputValue.addEventListener(`input`, () => {
  if (inputValue !== "") {
    outputValue.textContent = inputValue.value;
  } else {
    outputValue.textContent = "Anonymous";
  }
});

console.log(inputValue);
console.log(outputValue);
