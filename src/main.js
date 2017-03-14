
let analyzingParkingData = require('./parking.js');
let analyzingMovingData = require('./moving.js');

let month = process.argv[2].toLowerCase();
// .split(function functionName() {
//   if process.argv[2]
// })
let year = process.argv[3];

if (year !== '2016') {
  console.log("Please enter 2016");
  process.exit(); //way to kill node process only for node
}



analyzingParkingData(month, year);
analyzingMovingData( month, year);
