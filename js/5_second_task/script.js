"use strict";

const numberOfFilms = +prompt('How much films have you watched', '');

const personalMovieDb = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};

for (let i = 0; i < 2; i++) {
    let lastViewedFilm = prompt('One of the last viewed film', '');
    let filmEstimate = prompt('What your film estimate', '');
    if (lastViewedFilm !== null && filmEstimate !== null && lastViewedFilm !== '' && filmEstimate !== ''  && lastViewedFilm.length < 50) {
        personalMovieDb.movies[lastViewedFilm] = filmEstimate;
        console.log('Done');
    } else {
        console.log('Error');
        i--;
    }
}

console.log(personalMovieDb);

if (personalMovieDb.count < 10) {
    console.log("A few movies was watched");
} else if (personalMovieDb.count >= 10 && personalMovieDb.count < 30) {
    console.log('You are a classical viewer');
} else if (personalMovieDb.count > 30) {
    console.log("You are movie lover");
} else {
    console.log('Error');
}

