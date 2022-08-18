"use strict";

const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ulList = document.getElementById("ingredients");
const foodIngredients = ingredients.map(ingredient => {
  const item = document.createElement("li");
  item.textContent = ingredient;
  item.setAttribute('class', 'item');
  
  return item.outerHTML;
});
ulList.innerHTML += foodIngredients.join("")