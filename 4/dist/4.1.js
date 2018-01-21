'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _nodeFetch = require('node-fetch');

var _nodeFetch2 = _interopRequireDefault(_nodeFetch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var StudioGhibliApi = function () {
  function StudioGhibliApi() {
    _classCallCheck(this, StudioGhibliApi);
  }

  _createClass(StudioGhibliApi, null, [{
    key: 'getAllFilms',
    value: function getAllFilms() {
      return (0, _nodeFetch2.default)('https://ghibliapi.herokuapp.com/films').then(function (response) {
        return response.json();
      });
    }
  }, {
    key: 'getFilmById',
    value: function getFilmById(id) {
      return (0, _nodeFetch2.default)('https://ghibliapi.herokuapp.com/films/' + id).then(function (response) {
        return response.json();
      });
    }
  }]);

  return StudioGhibliApi;
}();

var filmsPromise = StudioGhibliApi.getAllFilms();
var filmPromise = StudioGhibliApi.getFilmById(1);

filmPromise.then(function (data) {
  console.log(data);
});