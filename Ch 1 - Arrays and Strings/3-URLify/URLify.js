//Write a method to replace all spaces in a string with '%20'.

const URLify = (str) => {
  let arr = str.split('');
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] === ' ') {
      arr[i] = '%20';
    }
  }
  return arr.join('');
};

module.exports = URLify;
