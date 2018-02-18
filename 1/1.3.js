(function() {
  /**
   * const: a block-scoped variable that cannot be reassigned
   */
  const immutable = "You can't change me";
  // TODO: Uncomment the following line and see what happens
  // immutable = 'I was changed';

  /**
   * var: a function-scoped varaible that can be reassigned
   * let: a block-scoped varaible that can be reassigned
   */
  var favoriteMovie = 'Interstellar';
  let favoriteFood = 'Chocolate';

  if (true) {
    var favoriteMovie = 'Forrest Gump';
    let favoriteFood = 'Garlic Bread';
  }

  console.log(favoriteMovie);
  console.log(favoriteFood);
})();
