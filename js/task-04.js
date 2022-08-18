"use strict";

let counterValue = 0;
function changeValue(operation) {
    if (operation === "-") {
        counterValue -= 1;
    } else {
        counterValue  += 1;
    }
    
    document.getElementById('value').textContent = counterValue;
}

document.querySelector("[data-action=decrement]").addEventListener('click', () => {
    changeValue("-");
});
document.querySelector("[data-action=increment]").addEventListener('click', () => {
    changeValue("+");
});




