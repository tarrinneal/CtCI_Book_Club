const URLify = require('./URLify');
const URLifySol = require('./URLifySol');

test('URLifies strings', () => {
  expect(URLify('Mr John Smith')).toBe(URLifySol('Mr John Smith'));
  expect(URLify('I Like Bananas')).toBe(URLifySol('I Like Bananas'));
  expect(URLify('Gotcha')).toBe(URLifySol('Gotch'));
  expect(URLify('What  about  this  edgecase?')).toBe(
    URLifySol('What  about  this  edgecase?')
  );
});
