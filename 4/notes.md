# Lab 4

## 4.1 - Imports/Exports

### Answers

1. Open `src/resources/index.js` if you have not already - is this an example of named or default exports?
   * _Default exports._

## 4.2 - Asynchronous JavaScript (using the Fetch API)

### Answers

1. Why was `earthquakes` still an empty array?
   * _The asynchronous call had not completed before the console statement was executed._
2. Let's say we wanted to find the weather for the day with the most earthquakes. If I had provided a function, IcelandApi.getWeatherFromDay(), that returned a promise that resolves the weather for a provided day, where would you put that call to ensure it was called _after_ the original API call?
   * _You could chain another `then` after the API call to ensure the other call would occur after the first one._

## 4.3 - Asynchronous and Synchronous JavaScript

### Answers

1. What does this tell you about how asynchronous and synchronous code is executed in JavaScript?
   * _Synchronous code is executed before any asynchronous code is executed._
