const isUnique = require('./isUnique');
const isUniqueSol = require('./isUniqueSol');

console.log('Input | Correct Answer | Your Answer');
console.log('abcd', isUniqueSol('abcd'), isUnique('abcd'));
console.log('abccd', isUniqueSol('abccd'), isUnique('abccd'));
console.log('abccd', isUniqueSol('abccd'), isUnique('abccd'));
console.log('mdjq', isUniqueSol('mdjq'), isUnique('mdjq'));
