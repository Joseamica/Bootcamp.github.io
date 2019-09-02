// Randomly select an episode number for Star Wars
var text = d3.select(".star-wars")
  .text(Math.floor(Math.random() * 8) + 1);

// Select the upvote and downvote buttons
var buttonUp = d3.select(".upvote");
var buttonDown = d3.select(".downvote");
// Select the counter h1 element
var counter = d3.select(".counter");
// Use D3 `.on` to attach a click handler for the upvote


buttonUp.on("click",function(){
  var currentCount = parseInt(counter.text());
  currentCount += 1;
  counter.text(currentCount);
  
})
// Use d3 `.on` to attach a click handler for the downvote
buttonDown.on("click",function(){
  var currentCount = parseInt(counter.text());
  currentCount -=1;
  counter.text(currentCount);
  
})