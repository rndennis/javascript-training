# Lab 1

## 1.1 - Simple Closure

### Answers

1. What do you see in the terminal?

   * _"Hello World"_

2. Why does the inner anonymous function have access to `helloWorld`'s scope after `helloWorld`'s scope closed?
   * _The outer function, `helloWorld`, is a closure. Its scope persists even after it's been executed, and the functions inside the closure continue to have access to it. Therefore, the inner anonymous function still has access to `message` even after `helloWorld` finished executing._
   * _In JavaScript, a closure is always created upon creation of a function._

## 1.2 - Closure Wrapping

### Answers

1. Why was `this.trainer` still `Renee`?
   * _The Pokedex function created a namespace, separate from the global namespace. Therefore `this` inside of the Pokedex function refers to a local `this`, while `this` outside of the Pokedex function refers to a global `this`._
2. What does this construct resemble?
   * _A class._

## 1.3 - var, let, and const

### Answers

1. Why was `favoriteMovie` reassigned and `favoriteFood` not?
   * _`favoriteMovie` is in its encosing function's scope, but `favoriteFood` is in its enclosing block's scope._
2. What is the difference between function and block scope?
   * _Function scopes are created anytime you create a function, while block scopes are created anytime you use if statements, for loops, while loops, etc._
3. Which of these variable declarations would you use and why?
   * _I would tend towards `const` in most situations, but `let` when it's necessary. I can't think of a reason to use `var` anymore._

## 1.4 - Variable Hoisting

### Answers

1. Why was `items` undefined after moving the declaration/initialization?
   * _Variable declarations in JavaScript get "hoisted" to the top of its enclosing block._
2. Do you think the same would happen with `let` and `const`? Try it out.
   * _Does not behave the same way. Throws a ReferenceError._
