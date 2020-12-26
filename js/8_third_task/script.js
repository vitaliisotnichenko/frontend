"use strict";

let numberOfFilms;

function start() {
    numberOfFilms = +prompt('How much films have you watched', '');
    while (numberOfFilms === '' || numberOfFilms === null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('How much films have you watched', '');
    }
}

start();

const personalMovieDb = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};

function rememberMyFilms() {
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
}

rememberMyFilms();

function detectPersonalLevel() {
    if (personalMovieDb.count < 10) {
        console.log("A few movies was watched");
    } else if (personalMovieDb.count >= 10 && personalMovieDb.count < 30) {
        console.log('You are a classical viewer');
    } else if (personalMovieDb.count > 30) {
        console.log("You are movie lover");
    } else {
        console.log('Error');
    }
}

detectPersonalLevel();

function showMyDB(hidden) {
    if (!hidden) {
        console.log(personalMovieDb);
    }
}

function writeYourGenres() {
    for (let i =1; i<=3; i++) {
        personalMovieDb.genres[i-1] = prompt(`Yur favorite genre under number ${i}`, '');
    }
}
showMyDB(personalMovieDb.private);
writeYourGenres();
console.log(personalMovieDb);

