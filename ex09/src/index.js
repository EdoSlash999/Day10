function myFunction(myObj, checkProp) {
  return myObj.hasOwnProperty(checkProp) === true
    ? myObj[checkProp]
    : "Not Found";
}

myFunction(
  { title: "Titanic", song: "My Heart Will Go On", genre: "drama" },
  "title"
);

module.exports = myFunction;
