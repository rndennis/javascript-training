function Pokedex(trainer) {
  this.trainer = trainer;
  this.collection = [];

  this.register = function(name, height = 'N/A', weight = 'N/A') {
    var pokemon = { name, height, weight };
    this.collection.push(pokemon);
  };

  this.find = function(name) {
    for (var i = 0; i < this.collection.length; i++) {
      if (this.collection[i].name === name) {
        return this.collection[i];
      }
    }
    return false;
  };
}

this.trainer = 'Renee';

var myPokedex = new Pokedex('Josh');

console.log(`Global: ${this.trainer}`);
console.log(`Local: ${myPokedex.trainer}`);

myPokedex.register('Dragonite');
myPokedex.register('Combee', '1\'00"', '12.1 lbs.');

// TODO: Write a method, find(name), that returns a Pokemon if it exist in the registry or false otherwise
console.log(myPokedex.find('Pikachu')); // should print 'false'
console.log(myPokedex.find('Dragonite')); // should print '{ name: 'Dragonite', height: 'N/A', weight: 'N/A' }'
