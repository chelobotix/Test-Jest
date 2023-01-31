const counterChar = require('./stringLength');

test('String Natasha', () => {
  expect(counterChar('Natasha')).toBe(7);
});

test('Empty String', () => {
  expect(counterChar('')).toBeFalsy();
});

test('More than 10', () => {
  expect(counterChar('Pologlobulia')).toBeFalsy();
});
