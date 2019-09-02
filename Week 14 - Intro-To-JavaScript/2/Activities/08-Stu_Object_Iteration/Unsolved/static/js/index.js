// Array of recipe objects
var recipes = [
  { dish: "Fried fish", spice: "Dorrigo" },
  { dish: "Crab Rangoon", spice: "Akudjura" },
  { dish: "Pickled Okra", spice: "Chili pepper" },
  { dish: "Macaroni salad", spice: "Pepper" },
  { dish: "Apple butter", spice: "Avens" },
  { dish: "Pepperoni Pizza", spice: "Asafoetida" },
  { dish: "Hog fry", spice: "Peppermint" },
  { dish: "Corn chowder", spice: "Akudjura" },
  { dish: "Home fries", spice: "Celery leaf" },
  { dish: "Hot chicken", spice: "Boldo" }];



// @TODO: YOUR CODE HERE
dishes = []
spices = []

console.log(recipes)



recipes.forEach((r) => {
  dishes.push(r.dish)
  spices.push(r.spice)
})

console.log(`Dishes: ${dishes}.\nSpice: ${spices}`)



Object.entries(recipes).forEach(([key,value]) => {
  console.log(key,value)
})


