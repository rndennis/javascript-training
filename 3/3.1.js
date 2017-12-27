// TODO: Create a Pokemon class that takes name, height and weight in the constructor
// TODO: Create a method off of your new class that pretty prints a pokemon

class Pokedex {
  constructor(trainer) {
    Object.assign(this, {
      trainer,
      collection: []
    });
  }

  register(name, height = 'N/A', weight = 'N/A') {
    // TODO: Refactor the following line to instantiate a new Pokemon object
    const pokemon = { name, height, weight };
    this.collection.push(pokemon);
  }

  find(name) {
    for (let i = 0; i < this.collection.length; i++) {
      if (this.collection[i].name === name) {
        // TODO: Refactor the following line to use your new pretty print function
        return this.collection[i];
      }
    }
    return false;
  }
}

const myPokedex = new Pokedex('Josh');

myPokedex.register('Dragonite');
myPokedex.register('Combee', '1\'00"', '12.1 lbs.');

console.log(myPokedex.find('Combee'));
