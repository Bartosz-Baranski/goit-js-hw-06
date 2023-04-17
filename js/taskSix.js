const placeholder = document.querySelector("#validation-input");
// const input = document.querySelector("#validation-input");
// const valid = document.querySelector("#validation-input.valid");
placeholder.addEventListener("blur", () => {
  const placeholderLength = placeholder.value.length;
  const inputDataLength = Number.parseInt(placeholder.dataset.length);
  const classes = ["valid", "invalid"];
  placeholder.classList.remove(...classes);
  if (placeholderLength >= inputDataLength) {
    placeholder.classList.add("valid");
  } else if (placeholderLength >= 0) {
    placeholder.classList.add("invalid");
  }
});

console.log(placeholder);
// console.log(input);
// if (placeholderLength <= 6) {
//     input.classList.add("validation-input.valid");
//   } else {
//     input.classList.add("validation-input.invalid");
//   }
