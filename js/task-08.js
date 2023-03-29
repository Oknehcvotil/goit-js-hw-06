const form = document.querySelector(".login-form");

form.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();
  const eventEl = event.currentTarget.elements;

  if (eventEl.email.value === "" || eventEl.password.value === "") {
    return alert("Fill out all the fields");
  }

  const formData = {
    email: eventEl.email.value,
    password: eventEl.password.value,
  };

  console.log(formData);

  form.reset();
}
