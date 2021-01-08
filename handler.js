import { getAddSum, getSubtractSum, getMultiplySum, getDivideSum } from './utils.js';

// Addition stuff
const addInput1 = document.getElementById('add-input-1');
const addInput2 = document.getElementById('add-input-2');
const addResults = document.getElementById('add-sum');

export function addClickHandler() {
    const firstNumber = addInput1.valueAsNumber;
    const secondNumber = addInput2.valueAsNumber;
    const sum = getAddSum(firstNumber, secondNumber);
    addResults.textContent = sum;
}

// subtraction stuff
const subInput1 = document.getElementById('sub-input-1');
const subInput2 = document.getElementById('sub-input-2');
const subtractResults = document.getElementById('subtract-sum');

export function subtractClickHandler() {
    const firstNumber = subInput1.valueAsNumber;
    const secondNumber = subInput2.valueAsNumber;
    const sum = getSubtractSum(firstNumber, secondNumber);
    subtractResults.textContent = sum;
}

// multiplecation stuff
const multiplyInput1 = document.getElementById('multiply-input-1');
const multiplyInput2 = document.getElementById('multiply-input-2');
const multiplyResults = document.getElementById('multiply-sum');

export function multiplyClickHandler() {
    const firstNumber = multiplyInput1.valueAsNumber;
    const secondNumber = multiplyInput2.valueAsNumber;
    const sum = getMultiplySum(firstNumber, secondNumber)
    multiplyResults.textContent = sum;
}

// division stuff
const divideInput1 = document.getElementById('divide-input-1');
const divideInput2 = document.getElementById('divide-input-2');
const divideResults = document.getElementById('divide-sum');

export function divideClickHandler() {
    const firstNumber = divideInput1.valueAsNumber;
    const secondNumber = divideInput2.valueAsNumber;
    const sum = getDivideSum(firstNumber, secondNumber);
    divideResults.textContent = sum;
}

