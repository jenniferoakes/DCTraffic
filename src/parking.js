
//change to module.exports later
function violations() {
  let dataParcer = require('./parse.js'); //if there is a problem with data, put outside in function
  let parkingData = dataParcer('./simple_data/parking_feb_2016.csv'); //this calls data function to return array of arrays

console.log(parkingData);

  let userMonth;
  let userDate;

  let months = ["January", "February", "March", "April", "May"];

toString
uppercase and lowercase





  // return {};

  // return something like this
  // {
  //   "some-specific-identifier in the parking file": "value of what we are looking for",
  //   "some-other-data": 19
  // }
}

violations();
// ;


// For any given year and month of parking data, provide the following
// analysis:
//
// How many different types of parking tickets were issued?
// What was the most common violation type for a parking ticket?
// What state license plate gets the most tickets?



// Each module should export a single function which accepts a year
// and month name (not a filename) as its arguments. The function
// must return an object with the answers to the data analysis
// questions below.
//
// For example, giving 2016 and May to the parking module function
// would return an object like:
