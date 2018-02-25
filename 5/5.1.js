/**
 * TODO: Create a recipe class that meets the following criteria:
 * - takes a name and author in the constructor
 * - has a property to keep track of a recipe's ingredients
 * - has a member function to add a new ingredient
 * - has a member function to pretty print the recipe
 */

class Recipe {
  constructor(name, author) {
    this.name = name;
    this.author = author;
    this.ingredients = [];
  }
  addIngredient(ingredient) {
    this.ingredients.push(ingredient);
  }
  print() {
    console.log(`${this.name} by ${this.author}`);
    this.ingredients.forEach(ingredient => {
      console.log(`- ${ingredient}`);
    });
  }
}

const myRecipe = new Recipe('Chocolate Chip Cookies', 'Renee Dennis');
myRecipe.addIngredient('1 cup flour');
myRecipe.addIngredient('1 cup butter');
myRecipe.print();
