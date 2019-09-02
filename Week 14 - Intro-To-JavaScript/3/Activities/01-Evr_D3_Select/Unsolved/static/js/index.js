var text1 = d3.select(".text1").text();
console.log(text1);

var text2 = d3.select("#text2").text();
console.log(text2);

d3.select(".text1").text("Hey, I changed this");

var myLink = d3.select(".my-link").html();
console.log(myLink);

var myLinkAnchor = d3.select(".my-link>a");
console.log(myLinkAnchor)

//var myLinkAnchorAttribute = d3.select(".my-link>a").attr("href");
var myLinkAnchorAttribute = myLinkAnchor.attr("href");
console.log(myLinkAnchorAttribute)

myLinkAnchor.attr("href", "https://python.org")

d3.select(".my-link>a").attr("href", "https://nytimes.org").text("Link to ny times")

d3.selectAll("li").style("color", "blue");
var li1 = d3.select("ul").append("li");
li1.text("a new item has added");

d3.selectAll("ul").append("li").attr("href", "a")
