const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsList = document.querySelector("#ingredients");

ingredients.forEach((ingredient) => {
  const ingredientsItemEl = document.createElement("li");
  ingredientsItemEl.classList.add("item");
  ingredientsItemEl.textContent = ingredient;
  ingredientsList.append(ingredientsItemEl);
});
