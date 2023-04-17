const colorChange = document.querySelector(".color");
const btnColorChange = document.querySelector(".change-color");

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
btnColorChange.addEventListener("click", () => {
  colorChange.style.backgroundColor = getRandomHexColor();

  colorChange.textContent = getRandomHexColor();
});

console.log(colorChange);
console.log(btnColorChange);
