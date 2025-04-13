const URLify = (str) => {
  return str.trim().split(' ').join('%20');
};

module.exports = URLify;
