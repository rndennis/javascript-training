class Recipe {
  ingredients: string[];
  // ingredients: Array<string>;

  constructor(private name: string, author) {
    this.author = author;
    this.ingredients = [];
  }
  addIngredient(ingredient: string) {
    this.ingredients.push(ingredient);
  }
  print() {
    console.log(`${this.name} by ${this.author}`);
    this.ingredients.forEach(ingredient => {
      console.log(`- ${ingredient}`);
    });
  }
}
