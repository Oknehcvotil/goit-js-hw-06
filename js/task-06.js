const form = document.querySelector("#validation-input");

const validLength = Number(form.getAttribute("data-length"));

form.addEventListener("blur", (event) => {
  if (event.currentTarget.value.length < validLength) {
    return form.classList.add("invalid");
  }
  form.classList.remove("invalid");
  return form.classList.add("valid");
});
