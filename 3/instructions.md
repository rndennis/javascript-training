# Lab 3

## 3.0 - Set Up

## Instructions

1. Run `npm install` or `npm i` to install all dependencies
2. In this lab, we are using npm scripts to compile and run our code, so instead of using `node [file name]` to execute the code, we will be using `npm start [file name]`.

## 3.1 - Classes

### Instructions

1. Compare and contrast the function-based (1.2.js) and class-based (3.1.js) Pokedex
2. Complete the first two TODO's
3. Complete the third TODO, run the script (`npm start 3.1.js`), and verify your results
4. Complete the fourth TODO, run the script (`npm start 3.1.js`), and verify your results

### Post-lab Questions

1. Since not all supported browsers support ES6+, you'll often hear a lot about JavaScript transpilers (e.g. Babel) that compiles ES6+ code down to ES5. What do you think the compiled code would look like for this lab? We defined `npm start` and `npm compile` scripts to comile the code and execute the compiled ES5 code. Have a look at the `dist/` directory to see the compiled code.

## 3.2 - Subclasses

### Instructions

1. Notice the use of the `extends` keyword to create a subclass `FirePokemon` of `Pokemon`
2. Complete the TODO, run the script (`npm start 3.2.js`), and verify your results

### Post-lab Questions

1. This isn't a question, but, in contrast to Java, JavaScript isn't actually a _class-based_ language, it's a _prototype-based_ language. The `class` keyword is simply _syntactic sugar_. <sub>[Source](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)</sub>
2. Would you consider JavaScript an object-oriented programming language?
