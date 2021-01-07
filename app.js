// import functions and grab DOM elements
const addInput1 = document.getElementById('add-input-1');
const addInput2 = document.getElementById('add-input-2');
const addButton = document.getElementById('add-button');
const addResults = document.getElementById('add-sum');
const subInput1 = document.getElementById('sub-input-1');
const subInput2 = document.getElementById('sub-input-2');
const subtractButton = document.getElementById('subtract-button');
const subtractResults = document.getElementById('subtract-sum');
const multiplyInput1 = document.getElementById('multiply-input-1');
const multiplyInput2 = document.getElementById('multiply-input-2');
const multiplyButton = document.getElementById('multiply-button');
const multiplyResults = document.getElementById('multiply-sum');
const divideInput1 = document.getElementById('divide-input-1');
const divideInput2 = document.getElementById('divide-input-2');
const divideButton = document.getElementById('divide-button');
const divideResults = document.getElementById('divide-sum');
// initialize state






// set event listeners to update state and DOM
addButton.addEventListener('click', () => {
    const firstNumber = addInput1.valueAsNumber;
    const secondNumber = addInput2.valueAsNumber;
    // console.log(firstNumber);
    // console.log(secondNumber);
    const sum = firstNumber + secondNumber;
    addResults.textContent = sum;

})
subtractButton.addEventListener('click', () => {
    const firstNumber = subInput1.valueAsNumber;
    const secondNumber = subInput2.valueAsNumber;
    // console.log(firstNumber);
    // console.log(secondNumber);
    const sum = firstNumber - secondNumber;
    subtractResults.textContent = sum;

})

multiplyButton.addEventListener('click', () => {
    const firstNumber = multiplyInput1.valueAsNumber;
    const secondNumber = multiplyInput2.valueAsNumber;
    // console.log(firstNumber);
    // console.log(secondNumber);
    const sum = firstNumber * secondNumber;
    multiplyResults.textContent = sum;

})

divideButton.addEventListener('click', () => {
    const firstNumber = divideInput1.valueAsNumber;
    const secondNumber = divideInput2.valueAsNumber;

    const sum = firstNumber / secondNumber;
    divideResults.textContent = sum;
})