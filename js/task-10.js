function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const boxQuantity = document.querySelector('[type = "number"]');
const createBtn = document.querySelector("[data-create]");
const destroyBtn = document.querySelector("[data-destroy]");
const boxesArea = document.querySelector("#boxes");

createBtn.addEventListener("click", onCreateBtnClicl);

function onCreateBtnClicl() {
  const amountBoxes = boxQuantity.value;
  let boxSize = 30;
  let boxes = [];
  boxesArea.innerHTML = "";

  if (amountBoxes > 100) {
    return alert("max value 100");
  }

  for (let i = 0; i < amountBoxes; i += 1) {
    const box = document.createElement("div");
    box.style.width = `${boxSize}px`;
    box.style.height = `${boxSize}px`;
    box.style.backgroundColor = getRandomHexColor();
    boxSize += 10;
    boxes.push(box);
  }

  boxesArea.append(...boxes);
}

destroyBtn.addEventListener("click", onDestroyBtnClick);

function onDestroyBtnClick() {
  boxesArea.innerHTML = "";
}
