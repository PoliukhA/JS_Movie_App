'use strict';

let numberOfFilms;

<<<<<<< HEAD
function start() {
    numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '');
    }
}

start();

const personalMovieDB = {
=======
let personalMovieDB = {
>>>>>>> 54f78da476e7507fdfe80a657fc912996d9f184d
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

<<<<<<< HEAD
function rememberMyFilms() {
    for (let i = 0; i <= 1; i++) {
        const movieName = prompt('Один из последних просмотренных фильмов?', ''),
              movieRating = prompt('На сколько оцените его?', '');
        
        if (movieName != null && movieRating != null && movieName != '' && movieRating != '' && movieName.length < 50) {
            personalMovieDB.movies[movieName] = movieRating;
            console.log('Готово!');
        } else {
            console.log('Прошу ввести данные');
            i--;
        }
    }
}

rememberMyFilms();

function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        console.log('Просмотрено довольно мало фильмов');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 50) {
        console.log('Вы классический зритель');
    } else if (personalMovieDB.count >= 50)  {
        console.log('Вы настоящий киноман!');
    } else {
        console.log('Произошла ошибка');
    }
}

detectPersonalLevel();

function showMyDB (hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}

showMyDB(personalMovieDB.privat);

function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
        //const movieGenre = prompt(`Ваш любимый жанр под номером ${i}`);
        //personalMovieDB.genres[i - 1] = movieGenre;
        personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);
    }
}

writeYourGenres();
=======
for (let i = 0; i <= 1; i++) {
    const movieName = prompt("Один из последних просмотренных фильмов?", ''),
          movieRating = prompt("На сколько оцените его?", '');
    
    if (movieName != null && movieRating != null && movieName != '' && movieRating != '' && movieName.length < 50) {
        personalMovieDB.movies[movieName] = movieRating;
        console.log('Готово!');
    } else {
        console.log('Прошу ввести данные');
        i--;
    }
}

if (numberOfFilms.count < 10) {
    console.log('Просмотрено довольно мало фильмов');
} else if (numberOfFilms.count >= 10 && numberOfFilms.count < 50) {
    console.log('Вы классический зритель');
} else if (numberOfFilms.count >= 50)  {
    console.log('Вы настоящий киноман!');
} else {
    console.log('Произошла ошибка');
}
>>>>>>> 54f78da476e7507fdfe80a657fc912996d9f184d

console.log(personalMovieDB);
