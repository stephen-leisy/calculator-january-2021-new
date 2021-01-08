// import functions and grab DOM elements
import { addClickHandler, subtractClickHandler, multiplyClickHandler, divideClickHandler } from './handler.js';
// initialize state

const addButton = document.getElementById('add-button');
const subtractButton = document.getElementById('subtract-button');
const multiplyButton = document.getElementById('multiply-button');
const divideButton = document.getElementById('divide-button');
// set event listeners to update state and DOM

addButton.addEventListener('click', addClickHandler);

subtractButton.addEventListener('click', subtractClickHandler);

multiplyButton.addEventListener('click', multiplyClickHandler);

divideButton.addEventListener('click', divideClickHandler);
