// @TODO: Uncomment the following file and complete the code
//        according to the instructions in README.md.


var roster = [{
  name: "Doug",
  position: "Quarterback",
  madeTeam: true
},
{
  name: "Antonio",
  position: "Tight End",
  madeTeam: true
},
{
  name: "Nick",
  position: "Kicker",
  madeTeam: false
},
{
  name: "Ereck",
  position: "Offensive Live",
  madeTeam: false
},
{
  name: "AJ",
  position: "Line Backer",
  madeTeam: true
}];


function onteam(on){
    return on.madeTeam === true
}



var a = roster.filter(onteam)
console.log(a.length)
