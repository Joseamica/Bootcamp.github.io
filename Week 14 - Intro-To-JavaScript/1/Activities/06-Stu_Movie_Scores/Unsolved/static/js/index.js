// Array of movie ratings
var movieScores = [
  4.4,
  3.3,
  5.9,
  8.8,
  1.2,
  5.2,
  7.4,
  7.5,
  7.2,
  9.7,
  4.2,
  6.9
];

// Starting a rating count
var sum = 0;
var z = 0;
// Arrays to hold movie scores
var goodMovieScores = [];
var okMovieScores = [];
var badMovieScores = [];

for (z; z < movieScores.length; z++){
  if (movieScores[z] < 5){
    badMovieScores.push(movieScores[z]);
  } else if (movieScores[z] > 5 && movieScores[z] <= 7.5){
    okMovieScores.push(movieScores[z]);
  } else if (movieScores[z] > 7.6){
    goodMovieScores.push(movieScores[z]);
  }
}