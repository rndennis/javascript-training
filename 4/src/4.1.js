import instructors from './resources/default'; // default export

import * as entertainment from './resources/named'; // named export
import { movies, tvShows } from './resources/named'; // named export, destructured

import resources from './resources'; // importing the entire module

console.log('instructors:', JSON.stringify(instructors, null, 2));

console.log('movies:', JSON.stringify(movies, null, 2));
console.log('tvShows:', JSON.stringify(tvShows, null, 2));
console.log('entertainment:', JSON.stringify(entertainment, null, 2));

console.log(
  'resources.instructors:',
  JSON.stringify(resources.instructors, null, 2)
);
console.log(
  'resources.entertainment:',
  JSON.stringify(resources.entertainment, null, 2)
);
