"use strict";

const totalCategories = document.querySelectorAll(".item");
console.log(`Number of categories: ${totalCategories.length}`);

totalCategories
  .forEach(
    categories => {
      categories.childNodes.forEach((elem) => {
        if (elem.localName === "h2") {
          console.log(`Category: ${elem.textContent}`);
        }
        if (elem.localName === "ul") {
          console.log(`Elements: ${elem.children.length}`)
        }
        });
    }
  )
