//Write a method to replace all spaces in a string with '%20'.

const URLify = (str) => {
  let arr = str.split(' ');
  let output = '';
  for (let i = 0; i < arr.length; i++) {
    output += arr[i]
    if (i !== arr.length - 1) {
      output += '%20';
    }
  }
  return output;
};

module.exports = URLify;
