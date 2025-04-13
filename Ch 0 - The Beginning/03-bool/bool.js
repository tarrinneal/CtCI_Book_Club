// Having functions that can do only one thing can be useful
// but using boolean logic is the heart of coding.

function ifThisThenThat(word) {
  if (word.length > 4) {
    return word.substring(0, 3);
  }
  return word;
}

// In this example, you have a basic `if` statement.
// following the keyword `if` is the conditional statement.
// Here we're checking the length of the parameter `word`
// to see if it is longer than 4 characters.
// A simple statement that allows us to have branching logic.

// Also worth noting that there are a couple method calls on the variable `word`.
// These are String methods (a method is a function that comes coupled with a type).
// There are many of these, I recommend looking them up any time you want to do something
// fairly simple with a type.

// `if` statements can be extended with `else` statments like so:

function returnLargerNumber(num1, num2) {
  if (num1 == num2) {
    return num1;
  } else if (num1 > num2) {
    return num2;
  } else {
    return num1;
  }
}

// With almost any type, `==` can be used to compare values, 1 == 1.
// You can use `!` to say 'does not' like so, 1 != 2.
// In JavaScript, since types are so weird, strange things can happen e.g. 0 == false.
// If you want a real comparison use `===` to ensure the values are the same.
// other symbols you can use in conditionals are, >, >=, <, <=,
// and any `bool` that has been defined.

module.exports = URLify;
