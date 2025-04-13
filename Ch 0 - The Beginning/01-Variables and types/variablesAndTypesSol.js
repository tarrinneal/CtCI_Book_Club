function variablesSol() {
  var a = 'a';
  var b = 2;
  var c = 3.0;
  var d = true;
  // a b c and d here are Variables, you can think of them as a storage location for the Values
  // that they are set to.
  //
  // The types shown here [String, Int, Double, and Boolean], this can be considered Primitive types,
  // though symantically that isn't true. Essentially that just means that the data "inside" the value can't be changed,
  // though the Variable can be updated to a different value. This will make more sense once we get
  // to collections later.

  // First task,
  // Declare a variable "E" with the value of 5.
  // Declare a variable "F" with the value of -5.
  var E = 5;
  var F = -5;

  return E + F; //update this line to return "E" and "F" added together.
}

module.exports = variablesSol;
