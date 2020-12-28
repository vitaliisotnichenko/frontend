"use strict";

const personalMovieDb = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    private: false,
    start: function() {
        personalMovieDb.count = +prompt('How much films have you watched', '');
        while (personalMovieDb.count === '' || personalMovieDb.count === null || isNaN(personalMovieDb.count)) {
            personalMovieDb.count = +prompt('How much films have you watched', '');
        }
    },
    rememberMyFilms: function() {
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
    },
    detectPersonalLevel: function() {
        if (personalMovieDb.count < 10) {
            console.log("A few movies was watched");
        } else if (personalMovieDb.count >= 10 && personalMovieDb.count < 30) {
            console.log('You are a classical viewer');
        } else if (personalMovieDb.count > 30) {
            console.log("You are movie lover");
        } else {
            console.log('Error');
        }
    },
    showMyDB: function(hidden) {
        if (!hidden) {
            console.log(personalMovieDb);
        }
    },
    writeYourGenres: function() {
        for (let i =1; i<=3; i++) {
            let genre = prompt(`Yur favorite genre under number ${i}`, '');
            if (genre === '' || genre == null) {
                console.log('Your entered incorrect value');
                i--;
            } else {
                personalMovieDb.genres[i-1] = genre;
            }
        }
        personalMovieDb.genres.forEach((item, i) => {
            console.log(`Favorite genre ${i + 1} - this is ${item}`);
        });
    },
    toggleVisibleMyDB: function() {
        if (personalMovieDb.private) {
            personalMovieDb.private = false;
        } else {
            personalMovieDb.private = true;
        }
    }
};
