const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsList = document.querySelector("#ingredients");
let newItems = [];
for (const ingredient of ingredients) {
  const newItem = document.createElement("li");
  newItem.textContent = ingredient;
  newItems.push(newItem);
}
ingredientsList.append(...newItems);

console.log(ingredientsList);
