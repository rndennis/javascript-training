"use strict";
var Ingredient = /** @class */ (function () {
    function Ingredient(name, amount, unit, isCooked) {
        this.name = name;
        this.amount = amount;
        this.unit = unit;
        this.isCooked = isCooked;
    }
    Ingredient.prototype.getFormattedIngredient = function () {
        return this.amount + " " + this.unit + " " + this.name + ", " + (this.isCooked ? 'cooked' : 'raw');
    };
    return Ingredient;
}());
/**
 * TODO: Implement a class 'Recipe' that fits the following criteria:
 *
 */
var ingredient = new Ingredient('chopped onion', 1, 'cup', false);
console.log(ingredient.getFormattedIngredient());
