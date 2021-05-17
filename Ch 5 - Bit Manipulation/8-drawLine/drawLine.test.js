const drawLine = require('./drawLine');
const drawLineSol = require('./drawLineSol');

var testScreen = [[0,0,0,0,0,0,0,0], [0,0,0,0,0,0,0,0],
                  [0,0,0,0,0,0,0,0], [0,0,0,0,0,0,0,0],
                  [0,0,0,0,0,0,0,0], [0,0,0,0,0,0,0,0],
                  [0,0,0,0,0,0,0,0], [0,0,0,0,0,0,0,0]];

var testScreen2 = [[0,0,0,0,0,0,0,0], [0,0,0,0,0,0,0,0],
                   [0,0,0,0,0,0,0,0], [0,0,0,0,0,0,0,0],
                   [0,0,0,0,0,0,0,0], [0,0,0,0,0,0,0,0],
                   [0,0,0,0,0,0,0,0], [0,0,0,0,0,0,0,0]];

test('Basic drawLine test', () => {
  expect(drawLine(testScreen, 16, 4, 12, 1);)toBe(drawLineSol(testScreen2, 16, 4, 12, 1);)
});
