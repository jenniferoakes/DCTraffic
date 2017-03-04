
let dataParcer = require('./parse.js'); //if there is a problem with data, put outside in function
let parkingData = dataParcer('./simple_data/parking_feb_2016.csv'); //this calls data function to return array of arrays



let items = ['VIOLATION_CODE', 'RP_PLATE_STATE'];

let violationCodeIndex = parkingData[0].indexOf('VIOLATION_CODE');
let plateIndex = parkingData[0].indexOf('RP_PLATE_STATE');

let frequency = {};


//change to module.exports later
for (let index = 1; index < parkingData.length -1 ; index++) { //go back and add if statement to get rid of undefined values
  // console.log('VIOLATIONCODE: ', parkingData[index][violationCodeIndex]); //violation type
  // console.log('RP_PLATE_STATE: ', parkingData[index][plateIndex]); //license plate

  if (parkingData[index][violationCodeIndex] !== '') {
    if (!frequency[parkingData[index][violationCodeIndex]]) { //have I seen this code?
      frequency[parkingData[index][violationCodeIndex]] = 1; //'no' this  the first time, so i will set it to one -----is saying that when I see T120, it sounds as one, and goes into the object
    } else {
      frequency[parkingData[index][violationCodeIndex]]++;
    }
  }
}

// this figures out which code has the highest frequency
let myKeys = Object.keys(frequency);
// console.log(myKeys);

let maxTicketTypeCount = 0;
let maxTicketType;

myKeys.forEach(function findHighestValue(tickettype) {
  // console.log( frequency[key] );
  if (frequency[tickettype] > maxTicketTypeCount) {
    maxTicketTypeCount = frequency[tickettype];
    maxTicketType = tickettype;
  }
});

let numberOfParkingTickets = Object.keys(frequency).length;


// console.log('frequency of ticket types: ', frequency);

// What was the most common violation type for a parking violation?
console.log('Most common violation type: ', maxTicketType);

// How many different types of parking tickets were issued?
console.log('Number of different types of parking tickets: ', numberOfParkingTickets);

// What state license plate gets the most tickets?


// X, Y, OBJECTID, ROWID_, DAY_OF_WEEK, HOLIDAY, WEEK_OF_YEAR, MONTH_OF_YEAR, ISSUE_TIME,
// VIOLATION_CODE, VIOLATION_DESCRIPTION, LOCATION, RP_PLATE_STATE, BODY_STYLE,
// ADDRESS_ID, STREETSEGID, XCOORD, YCOORD, TICKET_ISSUE_DATE
