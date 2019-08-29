var movieScore = [4.4, 3.3, 5.9, 8.8, 1.2, 5.2, 7.4, 7.5, 7.2, 9.7, 4.2, 6.9];

function movies(movieScores){

    for (i=0; i < movieScores.length; i++){
        sum = 0
        sum+= i 
        return sum
    }

}
var sum = 0;
var mean = 0;
for (i=0; i < movieScore.length; i++){
    sum = sum + movieScore[i];
    
}
mean = sum / movieScore.length;
console.log(mean)

for (i=0; i < movieScore.length; i++){
    variance = (movieScore[i] - mean ^2)
    console.log(variance)
}
console.log(variance)