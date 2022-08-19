"use strict";

const totalCategories = document.querySelectorAll(".item");
console.log(`Number of categories: ${totalCategories.length}`);


totalCategories.forEach((elem) => {

console.log(`Category: ${elem.firstElementChild.textContent}`);
console.log(`Elements: ${elem.lastElementChild.children.length}`);
});
