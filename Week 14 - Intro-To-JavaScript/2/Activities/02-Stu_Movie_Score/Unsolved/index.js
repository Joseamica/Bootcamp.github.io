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

// Arrays to hold movie scores
var goodMovieScores = [];
var okMovieScores = [];
var badMovieScores = [];


movieScores.forEach(function(moviesScoresPar){
  // Create variable to hold rating score

  // Add each score to the rating count
  sum += moviesScoresPar;

  // If the score is greater than 7, add it to the list of good movies
  if (moviesScoresPar > 7) {
    goodMovieScores.push(moviesScoresPar);
  }
  // If the score is between 5 and 7, add it to the list of "Ok" movies
  else if (moviesScoresPar <= 7 && moviesScoresPar > 5) {
    okMovieScores.push(moviesScoresPar);
  }
  // Otherwise, if the score is less than or equal to 5, add it to the list of bad movies
  else {
    badMovieScores.push(moviesScoresPar);
  }
}
);


// Find the average score
var avg = sum / movieScores.length;

// Store the length of movie ratings
var numGoodMovies = goodMovieScores.length;
var numOkMovies = okMovieScores.length;
var numBadMovies = badMovieScores.length;

// Print results
console.log("---------");
console.log(`There are ${numGoodMovies} good movies.`);
console.log(`There are ${numOkMovies} ok movies.`);
console.log(`There are ${numBadMovies} bad movies.`);
console.log(`The average movie rating is ${avg}.`);
console.log("---------");
