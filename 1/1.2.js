function Pokedex(trainer) {
  this.trainer = trainer;
  this.collection = [];

  this.register = function(name, height = 'N/A', weight = 'N/A') {
    var pokemon = { name, height, weight };
    this.collection.push(pokemon);
  };
}

this.trainer = 'Renee';

var myPokedex = new Pokedex('Josh');

console.log(`Global: ${this.trainer}`);
console.log(`Local: ${myPokedex.trainer}`);

myPokedex.register('Dragonite');
myPokedex.register('Combee', '1\'00"', '12.1 lbs.');

// TODO: Write a method that returns a Pokemon in the Pokedex if it exist or false otherwise
// console.log(myPokedex.find('Pikachu'));  // should print 'false'
// console.log(myPokedex.find('Dragonite'));  // should print '{ name: 'Dragonite', height: 'N/A', weight: 'N/A' }'
