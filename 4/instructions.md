# Lab 4

## 4.0 - Set Up

### Instructions

1. Run `npm install` or `npm i` to install all dependencies
2. In this lab, we are continuing to use npm scripts to compile and run our code, so instead of using `node [file name]` to execute the code, we will be using `npm start [file name]`.

## 4.1 - Imports/Exports

### Instructions

1. Open the `src/resources/default.js` and `src/resources/named.js` and look through them.
2. Notice the use of the `export default` keywords in `default.js` and the lack of identifier used in the export statement. This is an example of default exports in JavaScript.
3. Notice the use of `export` without the `default` keyword in named.js and the use of identifiers in the export statements. This is an example of named exports in JavaScript.
4. Open `src/4.1.js` and look how naemd and default exports are being imported.
5. Notice the import statement on line 6 of `src/4.1.js`. ES6 modules allow us to implicitly import the `index.js` file in a directory.
6. Run `npm start 4.1.js` to verify that it's behaving as you expect.

### Post-lab Questions

1. Open `src/resources/index.js` if you have not already - is this an example of named or default exports?

## 4.2 - Asynchronous JavaScript (using the Fetch API)

### Instructions

1. Complete the first TODO.
2. Complete the second TODO.
3. Run `npm start 4.2.js` and observe the values of `earthquakes` in the console.
4. Fix the problem so that we get a list of earthquakes.
5. Bonus: Complete the third TODO so that we get a map that tells us how many earthquakes occurred on a given day.

### Post-lab Questions

1. Why was `earthquakes` still an empty array?
2. Let's say we wanted to find the weather for the day with the most earthquakes. If I had provided a function, IcelandApi.getWeatherFromDay(), that returned a promise that resolves the weather for a provided day, where would you put that call to ensure it was called _after_ the original API call?

## 4.3 - Asynchronous and Synchronous JavaScript

### Instructions

1. setTimeout() is a built-in asynchronous function in JavaScript. Before you run the script, what do you think the output will be?
2. Run `node start 4.3.js` and observe the order in which each line is executed.

### Post-lab Questions

1. What does this tell you about how asynchronous and synchronous code is executed in JavaScript?
