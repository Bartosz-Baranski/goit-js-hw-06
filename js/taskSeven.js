const inputValue = document.querySelector("#font-size-control");
const spanValue = document.querySelector("#text");

spanValue.style.fontSize = `${inputValue.value}px`;

inputValue.addEventListener("input", () => {
  spanValue.style.fontSize = `${inputValue.value}px`;
});

console.log(inputValue);
console.log(spanValue);
