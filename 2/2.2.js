(function() {
  /**
   * Arrow function syntax: (param, param) => { // do stuff }
   * vs. traditional syntax: function (param, param) { // do stuff }
   */

  // TODO: Convert to use an arrow notation
  const helloWorld = function() {
    console.log('Hello World!');
  };
  helloWorld();

  const fruits = ['apple', 'orange', 'pineapple', 'apple', 'strawberry'];
  // TODO: Replace the curly brackets and return statement with just "fruits" (keep the semicolon, of course!)
  const getFruits = () => {
    return fruits;
  };
  console.log(getFruits());

  const getNumberOfApples = () => {
    let count = 0;
    // TODO: Uncomment line 24, replace "callback" with a arrow function callback that increments the
    // count for every apple found in the fruits array
    // fruits.forEach(callback);
    return count;
  };
  console.log(getNumberOfApples());
})();
