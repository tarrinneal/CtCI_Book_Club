//Implement an algorithm to determine if a string has all unique characters. What if you cannot use additional data structures?

// function isUnique(str) {
//   let hash = new Set();
//   for (let i = 0; i<str.length-1; i++){
//     if(hash.has(str[i])){
//       return false
//     } else {
//       hash.add(str[i])
//     }
//   }
//   return true
// }
//liner time - using a hash data structure
//space complexity O(n)

function isUnique(str) {
  let objOfChars = {};
  for (let i = 0; i<str.length; i++) {
    if(objOfChars[str[i]]){
      return false
    } else {
      objOfChars[str[i]] = 1;
    }
  }
  return true;
}
module.exports = isUnique;
