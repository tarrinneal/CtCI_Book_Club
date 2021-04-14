//Implement an algorithm to determine if a string has all unique characters. What if you cannot use additional data structures?

module.exports = (string) => {
  //solve this
  let chars = {};
  for( let i = 0; i < string.length; i++ ) {
    if(chars[string[i]] === undefined) {
      chars[string[i]] = 1;
    } else {
      return false;
    }
  }
  return true;
};
