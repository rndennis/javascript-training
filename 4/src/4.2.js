import fetch from 'node-fetch'; // Fetch API for Node.js

// TODO: Import the url from resources/api.js
import { EARTHQUAKES } from './resources/api';

class IcelandApi {
  static getEarthquakes() {
    // TODO: Uncomment the following line and provide the URL as a parameter to fetch()
    return fetch(EARTHQUAKES).then(response => response.json());
  }
}

let earthquakes = [];
IcelandApi.getEarthquakes().then(({ results }) => {
  earthquakes = results;
});

// TODO: Get the number of earthquakes by day
const numEarthquakesByDay = earthquakes.reduce((accumulator, currentValue) => {
  const day = new Date(currentValue.timestamp).toDateString();
  if (accumulator[day]) {
    accumulator[day] += 1;
  } else {
    accumulator[day] = 1;
  }
  return accumulator;
}, {});

console.log('earthquakes:', earthquakes);
console.log(
  'numEarthquakesByDay:',
  JSON.stringify(numEarthquakesByDay, null, 2)
);
