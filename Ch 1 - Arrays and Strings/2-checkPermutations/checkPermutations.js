//Given two strings, write a method to decide if one is a permutation of the other.

const checkPermutations = (str1, str2) => {
  if (string1.length !== string2.length){
    return false
}
let sortedString1 = string1.split('').sort().join('');
let sortedString2 = string2.split('').sort().join('');
if(sortedString1 === sortedString2){
    return true;
}
return false;
};

module.exports = checkPermutations;
