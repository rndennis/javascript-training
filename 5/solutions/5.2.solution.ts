(() => {
  class Recipe {
    ingredients: Array<string>;
    // alternative syntax for arrays: ingredients: string[]

    constructor(private name: string, private author: string) {
      this.name = name;
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
})();
