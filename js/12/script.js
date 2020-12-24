const numberOfFilms = +prompt('How much films have you watched', '');

const personalMovieDb = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};

const lastViewedFilm = prompt('One of the last viewed film', '');
const filmEstimate = prompt('What your film estimate', '');
const lastViewedFilmSecondQuestion = prompt('One of the last viewed film', '');
const filmEstimateSecondQuestion = prompt('What your film estimate', '');

personalMovieDb.movies[lastViewedFilm] = filmEstimate;
personalMovieDb.movies[lastViewedFilmSecondQuestion] = filmEstimateSecondQuestion;

console.log(personalMovieDb);