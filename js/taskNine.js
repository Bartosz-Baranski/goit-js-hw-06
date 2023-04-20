const bodyColor = document.querySelector("body");
const colorChange = document.querySelector(".color");
const btnColorChange = document.querySelector(".change-color");

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

btnColorChange.addEventListener("click", () => {
  bodyColor.style.backgroundColor = getRandomHexColor();

  colorChange.textContent = bodyColor.style.backgroundColor;
});
console.log(getRandomHexColor);
console.log(colorChange);
console.log(btnColorChange);
