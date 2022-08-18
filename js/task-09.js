"use strict";

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
};

const buttonEl = document.querySelector('.change-color');
const spanEl = document.querySelector('.color');

buttonEl.addEventListener('click', onButtonClick);

function onButtonClick() {
  const randomHexColor = getRandomHexColor();

  document.body.style.backgroundColor = randomHexColor;
  spanEl.textContent = randomHexColor;
};

