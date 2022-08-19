"use strict";

let counterValue = 0;
function changeValue(operation) {
    if (operation === "-") {
        counterValue -= 1;
    } else {
        counterValue  += 1;
    }
    
    const valueEl = document.getElementById('value');
    valueEl.textContent = counterValue;
}

const decrementBtn = document.querySelector("[data-action=decrement]");
decrementBtn.addEventListener('click', () => {
    changeValue("-");
});

const incrementBtn = document.querySelector("[data-action=increment]");
incrementBtn.addEventListener('click', () => {
    changeValue("+");
});




