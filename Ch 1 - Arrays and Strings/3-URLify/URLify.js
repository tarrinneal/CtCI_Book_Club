//Write a method to replace all spaces in a string with '%20'.

const URLify = (str) => {
  //trim
  //replace

  return str.trim().replace(/\s/g, '%20')
};

module.exports = URLify;
