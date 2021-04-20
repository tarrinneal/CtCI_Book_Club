var ThreeInOne = function () {
  this.container = [];
  this.middleBottom = 0;
  this.middleTop = 0;
};

ThreeInOne.prototype.push1 = function (value) {
  this.container.unshift(value);
  this.middleBottom++;
  this.middleTop++;
};

ThreeInOne.prototype.push2 = function (value) {
  this.container.splice(this.middleTop, 0, value);
  this.middleTop++;
};

ThreeInOne.prototype.push3 = function (value) {
  this.container.push(value);
};

ThreeInOne.prototype.pop1 = function () {
  if (this.isEmpty1()) {
    return undefined;
  }
  var answer = this.container.shift();
  if (this.middleBottom > 0) {
    this.middleBottom--;
    this.middleTop--;
  }
  return answer;
};

ThreeInOne.prototype.pop2 = function () {
  if (this.isEmpty2()) {
    return undefined;
  }

  var answer = this.container[this.middleTop - 1];
  this.container.splice(this.middleTop - 1, 1);
  if (this.middleBottom < this.middleTop) {
    this.middleTop--;
  }
  return answer;
};

ThreeInOne.prototype.pop3 = function (value) {
  if (this.isEmpty3()) {
    return undefined;
  }

  return this.container.pop(value);
};

ThreeInOne.prototype.peek1 = function () {
  return this.isEmpty1() ? undefined : this.container[0];
};

ThreeInOne.prototype.peek2 = function () {
  return this.isEmpty2() ? undefined : this.container[this.middleTop - 1];
};

ThreeInOne.prototype.peek3 = function () {
  return this.isEmpty3()
    ? undefined
    : this.container[this.container.length - 1];
};

ThreeInOne.prototype.isEmpty1 = function () {
  return this.middleBottom === 0;
};

ThreeInOne.prototype.isEmpty2 = function () {
  return this.middleBottom === this.middleTop;
};

ThreeInOne.prototype.isEmpty3 = function () {
  return this.middleTop === this.container.length;
};

module.exports = ThreeInOne;
