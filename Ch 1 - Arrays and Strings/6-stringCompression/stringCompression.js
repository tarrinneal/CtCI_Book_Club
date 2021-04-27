//Implement a method to perform basic string compression using the counts of repeated characters. For example, the string aabcccccaaa would become a2blc5a3. If the "compressed" string would not become smaller than the original string, your method should return the original string. You can assume the string has only uppercase and lowercase letters (a - z).

function stringCompression(str) {
  let compressedString = '';

  let repeats = 0;

  for (let i = 0; i < str.length; i++) {
    repeats++;
    if (i + 1 === str.length || str[i] !== str[i + 1]) {
      compressedString += str[i] + repeats;
      repeats = 0;
    }
  }

  if (compressedString.length < str.length) {
    return compressedString;
  }
  return str;
}

module.exports = stringCompression;
