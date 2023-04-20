const form = document.querySelector(".login-form");

function stopSubmit(event) {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    return alert("Please fill all the fields!");
  } else {
    const complete = {
      email: email.value,
      password: password.value,
    };
    console.log(complete);
    event.currentTarget.reset();
  }
}
form.addEventListener("submit", stopSubmit);
// console.log(form);
// console.log(alert);
