// IMPORT MODULES under test here:
// import { example } from '../example.js';
import { getAddSum, getSubtractSum, getMultiplySum, getDivideSum } from '../utils.js';

const test = QUnit.test;

test('it should return 5 when you provide 2 and 3', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 5;

    //Act 
    // Call the function you're testing and set the result to a const
    const actual = getAddSum(2, 3);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('it should return -3 when you provide -7 and 4', (expect) => {
    const expected = -3;
    const actual = getAddSum(-7, 4);
    expect.equal(actual, expected);
});

test('it should return 3 when you provide 10 and 7', (expect) => {
    const expected = 3;
    const actual = getSubtractSum(10, 7);
    expect.equal(actual, expected);
});

test('it should return -4 when you provide 6 and 10', (expect) => {
    const expected = -4;
    const actual = getSubtractSum(6, 10);
    expect.equal(actual, expected);
});

test('it should return 6 when you provide 2 and 3', (expect) => {
    const expected = 6;
    const actual = getMultiplySum(2, 3);
    expect.equal(actual, expected);
});

test('it should return 18 when you provide 9 and 2', (expect) => {
    const expected = 18;
    const actual = getMultiplySum(9, 2);
    expect.equal(actual, expected);
});

test('it should return 3 when you provide 9 and 3', (expect) => {
    const expected = 3;
    const actual = getDivideSum(9, 3);
    expect.equal(actual, expected);
});

test('it should return 22.5 when you provide 90 and 4', (expect) => {
    const expected = 22.5;
    const actual = getDivideSum(90, 4);
    expect.equal(actual, expected);
});

