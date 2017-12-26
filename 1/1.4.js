(function() {
  const pokemon = ['Onyx', 'Weedle', 'Koffing', 'Shuckle'];

  // TODO: Move lines 5-8 to below the return statement
  var items = ['Great Ball', 'Super Potion', 'Escape Rope', 'Rare Candy'];
  function getRandomPokemon() {
    return pokemon[Math.floor(Math.random() * pokemon.length)];
  }

  console.log(items);
  console.log(getRandomPokemon());

  return;
})();
