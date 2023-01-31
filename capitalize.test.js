const capitalize = require('./capitalize')



test('Capitalize 1', () => {
  expect(capitalize('pibes')).toMatch('Pibes');
});

