// TODO: Create a Pokemon class that takes name, height and weight in the constructor
// TODO: Create a method toString off of your new class that returns a formatted string representation of the pokemon

class Pokemon {
  constructor(name, height, weight) {
    Object.assign(this, {
      name,
      height,
      weight
    });
  }

  toString() {
    return `Name: ${this.name}\nHeight: ${this.height}\nWeight: ${this.weight}`;
  }
}

class Pokedex {
  constructor(trainer) {
    Object.assign(this, {
      trainer,
      collection: []
    });
  }

  register(name, height = 'N/A', weight = 'N/A') {
    // TODO: Refactor the following line to instantiate a new Pokemon object
    // const pokemon = { name, height, weight };
    const pokemon = new Pokemon(name, height, weight);
    this.collection.push(pokemon);
  }

  find(name) {
    for (let i = 0; i < this.collection.length; i++) {
      if (this.collection[i].name === name) {
        return this.collection[i];
      }
    }
    return false;
  }
}

const myPokedex = new Pokedex('Josh');

myPokedex.register('Dragonite');
myPokedex.register('Combee', '1\'00"', '12.1 lbs.');

// TODO: Refactor the following line to log the string representation of the pokemon object
console.log(myPokedex.find('Combee').toString());
