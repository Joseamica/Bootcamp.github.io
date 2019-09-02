var button = d3.select("#click-me");
var inputField = d3.select("#input-field");

function handleClick(){
    console.log("button clicked");
}

button.on("click", handleClick)

inputField.on("change", function() {
    var newText = d3.event.target.value;
    console.log(newText);
  });
  