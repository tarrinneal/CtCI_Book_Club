//Assume you have a method isSubstring which checks if one word is a substring of another. Given two strings, str1 and str2, write code to check it str2 is a rotation of str1 using only one call to isSubstring(e.g., 'waterbottle' is a rotation of 'erbottlewat')

//you can use .includes to simulate the call of isSubstring

function stringRotation(str1, str2) {
  return str1.length === str2.length ? (str1 + str1).includes(str2) : false;
}

module.exports = stringRotation;
