
const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsListRef = document.querySelector("#ingredients");

const createListElement = ingredients => {
  return ingredients.map(ingredient => {
    const listElement = document.createElement("li");
    listElement.textContent = ingredient;
    listElement.classList.add("item");
    
    return listElement;
  });
};

const elementsList = createListElement(ingredients);

ingredientsListRef.append(...elementsList);

console.log(ingredientsListRef);


