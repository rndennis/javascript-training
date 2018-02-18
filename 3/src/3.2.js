class Pokemon {
  constructor(name, height = '', weight = '') {
    Object.assign(this, {
      name,
      height,
      weight
    });
  }

  attack() {
    console.log(`${this.name} used tackle!`);
  }
}

class FirePokemon extends Pokemon {
  constructor() {
    super();
    this.attacks = ['ember', 'fire blast', 'flame burst', 'inferno'];
  }
  // TODO: Override the the attack method using a random attack from the list of attacks
}

const magmar = new FirePokemon('Magmar');
const snorlax = new Pokemon('Snorlax');

magmar.attack();
snorlax.attack();
