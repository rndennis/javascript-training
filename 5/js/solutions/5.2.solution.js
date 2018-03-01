"use strict";
var RecipeSolution1 = /** @class */ (function () {
    // alternative syntax for arrays: ingredients: string[]
    function RecipeSolution1(name, author) {
        this.name = name;
        this.author = author;
        this.name = name;
        this.author = author;
        this.ingredients = [];
    }
    RecipeSolution1.prototype.addIngredient = function (ingredient) {
        this.ingredients.push(ingredient);
    };
    RecipeSolution1.prototype.print = function () {
        console.log(this.name + " by " + this.author);
        this.ingredients.forEach(function (ingredient) {
            console.log("- " + ingredient);
        });
    };
    return RecipeSolution1;
}());
