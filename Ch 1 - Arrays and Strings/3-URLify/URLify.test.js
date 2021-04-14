const URLify = require('./URLify');
const URLifySol = require('./URLifySol');

console.log('Input | Correct Answer | Your Answer');
console.log(
  'Mr John Smith',
  URLifySol('Mr John Smith'),
  URLify('Mr John Smith')
);
console.log(
  'I Like Bananas',
  URLifySol('I Like Bananas'),
  URLify('I Like Bananas')
);
console.log('Gotcha', URLifySol('Gotcha'), URLify('Gotcha'));
console.log(
  'What  about  this  edge  case?',
  URLifySol('What  about  this  edge  case?'),
  URLify('What  about  this  edge  case?')
);
