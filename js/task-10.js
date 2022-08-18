"use strict";

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

const buttonCreate = document.querySelector('[data-create]');
const buttonDestroy = document.querySelector('[data-destroy]');
const inputEl = document.querySelector('input');
const divBoxes = document.querySelector('#boxes');

buttonCreate.addEventListener('click', onButtonClick);
buttonDestroy.addEventListener('click', destroyBoxes);

function createBoxes(amount) {
  let divMarkup = '';

  for (let i = 0; i < amount; i += 1) {
    const divWidthHeight = 30 + i * 10;
    const randomHexColor = getRandomHexColor();

    divMarkup += `<div style = 
      'background-color: ${randomHexColor}; 
      width: ${divWidthHeight}px;
      height: ${divWidthHeight}px;'>
    </div>`;
  }
  divBoxes.insertAdjacentHTML('beforeend', divMarkup);
};

function destroyBoxes() {
  divBoxes.innerHTML = '';
};

function onButtonClick(event) {
  const newDiv = Number(inputEl.value);
  createBoxes(newDiv);
  };
