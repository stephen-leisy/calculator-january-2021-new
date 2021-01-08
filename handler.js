import { getAddSum, getSubtractSum, getMultiplySum, getDivideSum } from './utils.js';

// Addition handlers
const allInput1 = document.getElementById('all-input-1');
const allInput2 = document.getElementById('all-input-2');
const allResults = document.getElementById('calculator-window');

export function addClickHandler() {
    const firstNumber = allInput1.valueAsNumber;
    const secondNumber = allInput2.valueAsNumber;
    const sum = getAddSum(firstNumber, secondNumber);
    allResults.textContent = sum;
}

// subtraction handlers
const subtractResults = document.getElementById('subtract-sum');

export function subtractClickHandler() {
    const firstNumber = allInput1.valueAsNumber;
    const secondNumber = allInput2.valueAsNumber;
    const sum = getSubtractSum(firstNumber, secondNumber);
    allResults.textContent = sum;
}

// multiplecation handlers

const multiplyResults = document.getElementById('multiply-sum');

export function multiplyClickHandler() {
    const firstNumber = allInput1.valueAsNumber;
    const secondNumber = allInput2.valueAsNumber;
    const sum = getMultiplySum(firstNumber, secondNumber)
    allResults.textContent = sum;
}

// division handlers

const divideResults = document.getElementById('divide-sum');

export function divideClickHandler() {
    const firstNumber = allInput1.valueAsNumber;
    const secondNumber = allInput2.valueAsNumber;
    const sum = getDivideSum(firstNumber, secondNumber);
    allResults.textContent = sum;
}

