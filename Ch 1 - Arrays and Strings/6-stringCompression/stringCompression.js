//Implement a method to perform basic string compression using the counts of repeated characters. For example, the string aabcccccaaa would become a2blc5a3. If the "compressed" string would not become smaller than the original string, your method should return the original string. You can assume the string has only uppercase and lowercase letters (a - z).

function stringCompression(str) {
  let result = '';
  let count = 1;
  let cur = str[0];
  for (let i = 1; i < str.length; i++) {
    if (cur === str[i]) {
      count++;
    } else {
      result = result + cur + count;
      cur = str[i];
      count = 1;
    }
  }

  result = result + cur + count;

  return result.length < str.length ? result : str;
}

module.exports = stringCompression;
