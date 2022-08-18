"use strict";

const input = document.querySelector('#font-size-control');
const span = document.querySelector('#text');

const handleInput = () => {
  span.style.fontSize = `${input.value}px`;
};

input.addEventListener("input", handleInput);
