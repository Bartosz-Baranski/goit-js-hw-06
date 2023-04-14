const elementsItems = document.querySelectorAll("#categories .item");
const elementsNames = document.querySelectorAll("#categories .item > h2");
const itemList = document.querySelectorAll("#categories .item ul");

const elementsItemsCount = elementsItems.length;

console.log(`Numbers of category: ${elementsItemsCount}`);

elementsNames.forEach((name, index) => {
  const elementItemsCount = itemList[index].getElementsByTagName("li").length;
  console.log("\n");
  console.log(`Category: ${name.textContent}`);
  console.log(`Elements: ${elementItemsCount}`);
});

console.log(elementsItems);
console.log(elementsNames);
console.log(itemList);
