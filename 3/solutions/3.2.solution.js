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
  constructor(name, height, weight) {
    super(name, height, weight);
    this.attacks = ['ember', 'fire blast', 'flame burst', 'inferno'];
  }
  // TODO: Override the the attack method using a random attack from the list of attacks
  attack() {
    const attack = this.attacks[
      Math.floor(Math.random() * this.attacks.length)
    ];
    console.log(`${this.name} used ${attack}!`);
  }
}

const magmar = new FirePokemon('Magmar');
const snorlax = new Pokemon('Snorlax');

magmar.attack();
snorlax.attack();
