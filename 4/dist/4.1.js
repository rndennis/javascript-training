'use strict';

var _default = require('./resources/default');

var _default2 = _interopRequireDefault(_default);

var _named = require('./resources/named');

var entertainment = _interopRequireWildcard(_named);

var _resources = require('./resources');

var _resources2 = _interopRequireDefault(_resources);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// importing the entire module

// named export
console.log('instructors:', JSON.stringify(_default2.default, null, 2)); // named export, destructured

// default export

console.log('movies:', JSON.stringify(_named.movies, null, 2));
console.log('tvShows:', JSON.stringify(_named.tvShows, null, 2));
console.log('entertainment:', JSON.stringify(entertainment, null, 2));

console.log('resources.instructors:', JSON.stringify(_resources2.default.instructors, null, 2));
console.log('resources.entertainment:', JSON.stringify(_resources2.default.entertainment, null, 2));