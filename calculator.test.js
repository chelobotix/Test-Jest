const Calculator = require('./calculator')


const calculator = new Calculator()

describe('Add', () => {
  test('2 + 2 = 4', () => {
    expect(calculator.add([2, 2])).toBe(4);
  });

  test('79 + 19 = 98', () => {
    expect(calculator.add([79, 19])).toBe(98);
  });

  test('250 + 250 + 500 = 1000', () => {
    expect(calculator.add([250, 250, 500])).toBe(1000);
  });
});

describe('Substract', () => {
  test('10 - 2 = 8', () => {
    expect(calculator.substract([10, 2])).toBe(8);
  });

  test('79 - 20 = 59', () => {
    expect(calculator.substract([79, 20])).toBe(59);
  });

  test('250 - 250 - 500 = -500', () => {
    expect(calculator.substract([250, 250, 500])).toBe(-500);
  });
});

describe('Multiple', () => {
  test('2 * 2 = 4', () => {
    expect(calculator.multiple([2, 2])).toBe(4);
  });

  test('10 * 5 = 50', () => {
    expect(calculator.multiple([10, 5])).toBe(50);
  });

  test('250 * 250 * 500 = 31250000', () => {
    expect(calculator.multiple([250, 250, 500])).toBe(31250000);
  });
});

describe('Divide', () => {
  test('50 / 2 = 25', () => {
    expect(calculator.divide([50, 2])).toBe(25);
  });

  test('100 / 2 = 50', () => {
    expect(calculator.divide([100, 2])).toBe(50);
  });

  test('300 / 4 / 2 = 37.5', () => {
    expect(calculator.divide([300, 4, 2])).toBe(37.5);
  });
});
