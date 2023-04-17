const form = document.querySelector(".login-form");

function stopSubmit(event) {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    alert("Please fill all the fields!");
    return alert;
  } else {
    const complete = {
      email: email.value,
      password: password.value,
    };
    event.currentTarget.reset();
    console.log(complete);
  }
}
form.addEventListener("submit", stopSubmit);
console.log(form);
console.log(alert);
