const isUnique = require('./isUnique');
const isUniqueSol = require('./isUniqueSol');

console.log('Input | Correct Answer | Your Answer');
console.log('abcd', isUniqueSol('abcd'), isUnique('abcd'));
console.log('Hello', isUniqueSol('Hello'), isUnique('Hello'));
console.log('uneak', isUniqueSol('uneak'), isUnique('uneak'));
console.log('notUnique', isUniqueSol('notUnique'), isUnique('notUnique'));
