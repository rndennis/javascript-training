import fetch from 'node-fetch';

class StudioGhibliApi {
  static getAllFilms() {
    return fetch('https://ghibliapi.herokuapp.com/films').then(response =>
      response.json()
    );
  }
}

const filmsPromise = StudioGhibliApi.getAllFilms();
