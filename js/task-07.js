const sizeControl = document.querySelector("#font-size-control");
const adobtText = document.querySelector("#text");

adobtText.style.fontSize = `${sizeControl.value}px`;

sizeControl.addEventListener(
  "input",
  (event) => (adobtText.style.fontSize = `${event.currentTarget.value}px`)
);
