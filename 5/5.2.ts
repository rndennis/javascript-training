class Ingredient {
  constructor(
    private name: string,
    private amount: number,
    private unit: string,
    private isCooked: boolean
  ) {}

  public getFormattedIngredient(): string {
    return `${this.amount} ${this.unit} ${this.name}, ${
      this.isCooked ? 'cooked' : 'raw'
    }`;
  }
}

/**
 * TODO: Implement a class 'Recipe' that fits the following criteria:
 * - has a member variable that stores all of a recipe's ingredients
 * - has a way to get a formatted version of the recipe's ingredients
 * - has a method to add ingredients
 */
