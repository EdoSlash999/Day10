var myPet = {
  species: "Horse",
  name: "Bukefal",
  legs: 4,
  friends: ["At, Magnolia"]
};

function myFunction(myObj) {
  return myObj;
}

console.log(myFunction(myPet));

module.exports = { myPet, myFunction };
