//An animal shelter, which holds only dogs and cats, operates on a strictly "first in, first out" basis. People must adopt either the "oldest" (based on arrival time) of all animals at the shelter, or they can select whether they would prefer a dog or a cat (and will receive the oldest animal of that type). They cannot select which specific animal they would like. Create the data structures to maintain this system and implement operations such as enqueue, dequeueAny, dequeueDog, and dequeueCat. You may uyse the built in LikedList data structure.

var Queue = require('./../util/Queue');

Queue.prototype.enqueue = Queue.prototype.add;

var AnimalShelter = function () {
  //
};

AnimalShelter.prototype.enqueue = function (animal) {
  //
};

AnimalShelter.prototype.dequeueAny = function () {
  //
};

AnimalShelter.prototype.dequeueByType = function (type) {
  //
};

AnimalShelter.prototype.dequeueDog = function () {
  //
};

AnimalShelter.prototype.dequeueCat = function () {
  //
};

module.exports = AnimalShelter;
