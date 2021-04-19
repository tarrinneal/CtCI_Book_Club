const AnimalShelter = require('./animalShelter');
const AnimalShelterSol = require('./animalShelterSol');

test('Saves all the animals, in the correct order', () => {
  var a = new AnimalShelter();
  a.enqueue({ type: 'dog', name: 'machi' });
  a.enqueue({ type: 'dog', name: 'daisy' });
  a.enqueue({ type: 'cat', name: 'peanuts' });
  a.enqueue({ type: 'dog', name: 'miso' });
  a.enqueue({ type: 'cat', name: 'dada' });
  a.enqueue({ type: 'cat', name: 'xiaoxiao' });
  a.enqueue({ type: 'dog', name: 'fido' });

  var at = new AnimalShelterSol();
  at.enqueue({ type: 'dog', name: 'machi' });
  at.enqueue({ type: 'dog', name: 'daisy' });
  at.enqueue({ type: 'cat', name: 'peanuts' });
  at.enqueue({ type: 'dog', name: 'miso' });
  at.enqueue({ type: 'cat', name: 'dada' });
  at.enqueue({ type: 'cat', name: 'xiaoxiao' });
  at.enqueue({ type: 'dog', name: 'fido' });

  expect(a.dequeueAny()).toEqual(at.dequeueAny());
  expect(a.dequeueCat()).toEqual(at.dequeueCat());
  expect(a.dequeueAny()).toEqual(at.dequeueAny());
  expect(a.dequeueAny()).toEqual(at.dequeueAny());
  expect(a.dequeueDog()).toEqual(at.dequeueDog());
});
