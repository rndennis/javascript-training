import fetch from 'node-fetch'; // Fetch API for Node.js

// TODO: Import the url from resources/api.js

class IcelandApi {
  static getEarthquakes() {
    // TODO: Uncomment the following line and provide the URL as a parameter to fetch()
    // return fetch().then(response => response.json());
  }
}

let earthquakes = [];
IcelandApi.getEarthquakes().then(({ results }) => {
  earthquakes = results;
});

// TODO: Get the number of earthquakes by day (hint: try doing it with Array.prototype.reduce())
// let numEarthquakesByDay;

console.log('earthquakes:', earthquakes);
console.log(
  'numEarthquakesByDay:',
  JSON.stringify(numEarthquakesByDay, null, 2)
);
