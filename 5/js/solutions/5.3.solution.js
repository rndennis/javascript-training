"use strict";
// TODO: Copy/paste your Recipe class from 5.2.ts below and integrate your new ingredient interface
var RecipeSolution2 = /** @class */ (function () {
    function RecipeSolution2(name, author) {
        this.name = name;
        this.author = author;
        this.name = name;
        this.author = author;
        this.ingredients = [];
    }
    RecipeSolution2.prototype.addIngredient = function (ingredient) {
        this.ingredients.push(ingredient);
    };
    RecipeSolution2.prototype.print = function () {
        console.log(this.name + " by " + this.author);
        this.ingredients.forEach(function (ingredient) {
            console.log("- " + ingredient.amount + " " + ingredient.unit + " " + ingredient.name);
        });
    };
    return RecipeSolution2;
}());
// TODO: Create an instance of a recipe, add some ingredients, and print it out
var myRecipe = new RecipeSolution2('Chocolate Chip Cookies', 'Renee Dennis');
myRecipe.addIngredient({ name: 'flour', amount: 1, unit: 'cup' });
myRecipe.addIngredient({ name: 'butter', amount: 1, unit: 'cup' });
myRecipe.print();
