// Get a reference to the table body
var tbody = d3.select("tbody");

// Console.log the weather data from data.js


// Step 1: Loop Through `data` and console.log each weather report object
// data.forEach(function(v){
//     var row = tbody.append("tr");
//     var weekdays = Object.values(v)[0]
//     var date = Object.values(v)[1]
//     var highTemp = Object.values(v)[2]
//     var lowTemp = Object.values(v)[3]

//     row.append("td").text(weekdays);
//     row.append("td").text(date)
//     row.append("td").text(highTemp)
//     row.append("td").text(lowTemp)

// });

data.forEach((v) =>{

// Step 2:  Use d3 to append one table row `tr` for each weather report object
// Don't worry about adding cells or text yet, just try appending the `tr` elements.
    var row = tbody.append("tr");

// Step 3:  Use `Object.entries` to console.log each weather report value
    var weekdays = Object.values(v)[0];
    var date = Object.values(v)[1];
    var highTemp = Object.values(v)[2];
    var lowTemp = Object.values(v)[3];
// Step 4: Use d3 to append 1 cell per weather report value (weekday, date, high, low)

    row.append("td").text(weekdays);
    row.append("td").text(date);
    row.append("td").text(highTemp);
    row.append("td").text(lowTemp);


});


table = d3.select("table");
table.attr("class", "table table-striped");
// Step 5: Use d3 to update each cell's text with
// weather report values (weekday, date, high, low)


// data.forEach(function(weatherReport){
//     Object.entries(weatherReport).forEach(function([key,value]){
//         var cell = d3.select("td")
//         cell.text(value)        
//     })
// })

