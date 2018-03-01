(() => {
  const createGem = (name, price, inStock) => {
    return Object.assign(
      {},
      {
        name,
        price,
        inStock
      }
    );
  };

  const gems = [
    createGem('diamond', 1000, true),
    createGem('emerald', 300, true),
    createGem('sapphire', 500, false),
    createGem('ruby', 400, true),
    createGem('amethyst', 700, false),
    createGem('topaz', 450, false)
  ];

  /**
   * Array.filter(callback)
   */
  let inStockGems = gems.filter(gem => gem.inStock);
  console.log(`inStockGems: ${JSON.stringify(inStockGems, null, 2)}`);

  // TODO: Use Array.filter() to set cheapGems to an array of all gems whose price < 500 and print to the console
  let cheapGems = gems.filter(gem => gem.price < 500);
  console.log(`cheapGems: ${JSON.stringify(cheapGems, null, 2)}`);

  /**
   * Array.map(callback)
   */
  let namesOfInStockGems = inStockGems.map(gem => gem.name);
  console.log(`namesOfInStockGems: ${namesOfInStockGems}`);

  // TODO: Use Array.map() to get the array of names of all the cheap gems and print to the console
  let namesOfCheapGems = cheapGems.map(gem => gem.name);
  console.log(`namesOfCheapGems: ${namesOfCheapGems}`);

  // TODO: You can chain Array.filter() and Array.map() and do this in a nice, succinct line - do it for both inStockGems and cheapGems
  namesOfInStockGems = gems.filter(gem => gem.inStock).map(gem => gem.name);
  namesOfCheapGems = gems.filter(gem => gem.price < 500).map(gem => gem.name);

  console.log(`namesOfInStockGems: ${namesOfInStockGems}`);
  console.log(`namesOfCheapGems: ${namesOfCheapGems}`);

  /**
   * Array.reduce(acculumatorCallback, initialValueOfAccumulator)
   */
  let totalInventoryCost = gems.reduce(
    (accumulator, currentValue) => accumulator + currentValue.price,
    0
  );
  console.log(`totalInventoryCost: $${totalInventoryCost}.00`);

  // TODO: Use Array.filter() and Array.reduce() to get me the total price of in-stock, cheap gems, and print to the console
  let totalCostOfInStockCheapGems = gems
    .filter(gem => gem.inStock && gem.price < 500)
    .reduce((accumulator, currentValue) => accumulator + currentValue.price, 0);
  console.log(
    `totalCostOfInStockCheapGems: $${totalCostOfInStockCheapGems}.00`
  );
})();
