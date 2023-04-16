const btns = document.querySelectorAll("button[data-action]");

const valueBtn = document.querySelector("#value");

let newValue = 0;

btns.forEach((button) => {
  button.addEventListener("click", () => {
    const btnAction = button.dataset.action;
    if (btnAction === "increment") {
      newValue++;
    } else {
      newValue--;
    }
    valueBtn.textContent = newValue;
  });
});
