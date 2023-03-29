const form = document.querySelector("#name-input");
const userName = document.querySelector("#name-output");

form.addEventListener("input", onFormInput);

function onFormInput(event) {
  if (event.currentTarget.value === "") {
    return (userName.textContent = "Anonymous");
  }
  return (userName.textContent = event.currentTarget.value);
}
