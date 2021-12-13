
const calculator = require('./calculator');
const a = 6
const b = 5
const regex = /^[a-zA-Z]*$/

test ('Adds number 1 and number 2  = result', () => {
  expect(calculator.add(a,b)).toBe(11);
});

test ('Adds number 1 and number 2  = result', () => {
  expect(calculator.add(5.5,5.5)).toBe(11);
});

test ('Adds number 1 and number 2  = result', () => {
  expect(calculator.add(5.5,-5.5)).toBe(0);
});

test ('Adds number 1 and number 2  = result', () => {
  expect(calculator.add(15000000000,15000000000)).toBe(30000000000);
});

test ('Adds number 1 and number 2  = result', () => {
  expect(calculator.add(-15000000000,15000000000)).toBe(0);
});

test ('Adds number 1 and number 2  = result', () => {
  expect(calculator.add(15000000000,15)).toBe(15000000015);
});

test ('Subtracts number 1 and number 2  = result', () => {
  expect(calculator.sub(a,b)).toBe(1);
});

test ('Adds number 1 and number 2  = result', () => {
  expect(calculator.sub(5.5,5.5)).toBe(0);
});

test ('Adds number 1 and number 2  = result', () => {
  expect(calculator.sub(5.5,-5.5)).toBe(11);
});

test ('Adds number 1 and number 2  = result', () => {
  expect(calculator.sub(15000000000,15000000000)).toBe(0);
});

test ('Adds number 1 and number 2  = result', () => {
  expect(calculator.sub(-15000000000,15000000000)).toBe(-30000000000);
});

test ('Adds number 1 and number 2  = result', () => {
  expect(calculator.sub(15000000000,15)).toBe(14999999985);
});

test ('check if the values are present', () => {
  expect(calculator.add(a,b)).not.toBeNull();
  expect(calculator.sub(a,b)).not.toBeNull();
});

test ('check if the values are not negative', () => {
  expect(calculator.add(a,b)).not.toBeFalsy();
  expect(calculator.sub(a,b)).toBeTruthy();
});

test ('check if the values greater then or lesser than', () => {
  expect(a).toBeGreaterThanOrEqual(b);
});

test ('check if the values are number only', () => {
  expect(a).toEqual(expect.not.stringMatching(regex));
  expect(b).toEqual(expect.not.stringMatching(regex));
});
