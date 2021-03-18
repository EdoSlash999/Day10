var myFood = {
  vegetables: "carrot",
  fruit: "orange",
  drink: "water",
};

function myFunction(myObj) {
  var vegetableValue = myObj["vegetables"];
  var fruitsValue = myObj["fruit"];
  var drinkValue = myObj["drink"];

  return { vegetableValue, fruitsValue, drinkValue };
}

console.log(myFunction(myFood));

module.exports = myFunction(myFood);
