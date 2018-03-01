(() => {
  // TODO: Create an interface for an Ingredient that fits the following criteria:
  // - has a name attribute
  // - has an amount attribute
  // - has a unit attribute
  interface IIngredient {
    name: string;
    amount: number;
    unit: string;
  }

  // TODO: Copy/paste your Recipe class from 5.2.ts below and integrate your new ingredient interface
  class Recipe {
    ingredients: Array<IIngredient>;

    constructor(private name: string, private author: string) {
      this.name = name;
      this.author = author;
      this.ingredients = [];
    }

    addIngredient(ingredient: IIngredient) {
      this.ingredients.push(ingredient);
    }

    print() {
      console.log(`${this.name} by ${this.author}`);
      this.ingredients.forEach(ingredient => {
        console.log(
          `- ${ingredient.amount} ${ingredient.unit} ${ingredient.name}`
        );
      });
    }
  }

  // TODO: Create an instance of a recipe, add some ingredients, and print it out
  const myRecipe = new Recipe('Chocolate Chip Cookies', 'Renee Dennis');
  myRecipe.addIngredient({ name: 'flour', amount: 1, unit: 'cup' });
  myRecipe.addIngredient({ name: 'butter', amount: 1, unit: 'cup' });
  myRecipe.print();
})();
