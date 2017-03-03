let dataParcer = require('./parse.js');

let movingData = dataParcer('./simple_data/moving_jan_2016.csv');
console.log(movingData);
let items = ['VIOLATIONDESC', 'VIOLATIONCODE', 'FINEAMT', 'TICKETTYPE', 'TOTALPAID'];


//loop (violationDataRequested)
let violationDescIndex = movingData[0].indexOf('VIOLATIONDESC');
let violationCodeIndex = movingData[0].indexOf('VIOLATIONCODE');
let fineAmtIndex = movingData[0].indexOf('FINEAMT');
let ticketTypeIndex = movingData[0].indexOf('TICKETTYPE');
let totalPaidIndex = movingData[0].indexOf('TOTALPAID');

// let ______ = []; //create an array where values are stored

let violationTotalIncome = 0;
let averageFineAmount = 0;

for (let index = 1; index < movingData.length ; index++) {
  console.log('Moving Data for index: ' + index);
  console.log('VIOLATIONDESC: ' + movingData[index][violationDescIndex]);
  console.log('\n'); //understanding two dimensional arrays //two dimensional array tutorial
  console.log('VIOLATIONCODE: ' + movingData[index][violationCodeIndex]); //violation type
  console.log('\n');
  console.log('FINEAMT: ' + movingData[index][fineAmtIndex]); //fine amount
  console.log('\n');
  console.log('TICKETTYPE: ' + movingData[index][ticketTypeIndex]); //tickettype, need to get "photo seperate"
  console.log('TOTALPAID: ' + movingData[index][totalPaidIndex]); //total paid, need to seperate 'photo' income, then add
  console.log('\n');
  console.log('TOTALPAID: '+ movingData[index][totalPaidIndex]); //need to add all values
  console.log('\n\n\n\n\n\n');

  violationTotalIncome = violationTotalIncome + Number(movingData[index][totalPaidIndex]);
  averageFineAmount = (averageFineAmount + Number(movingData[index][fineAmtIndex])/movingData.length);
  // solve more analysis q's here


// / Number(movingData.length -1


 // _______.push() push in values of console log into array
}

console.log('Total income of all moving violations: ' + violationTotalIncome);
console.log('Average fine amount: ' + averageFineAmount);

// What was the most common violation type for a moving violation?
// What was the total income from photo citations (tickettype = "Photo")?

//index 0 of my moving data
// [ 'X',
//    'Y',
//    'OBJECTID',
//    'ROW_',
//    'LOCATION',
//    'ADDRESS_ID',
//    'STREETSEGID',
//    'XCOORD',
//    'YCOORD',
//    'TICKETTYPE',
//    'FINEAMT',
//    'TOTALPAID',
//    'PENALTY1',
//    'PENALTY2',
//    'ACCIDENTINDICATOR',
//    'AGENCYID',
//    'TICKETISSUEDATE',
//    'VIOLATIONCODE',
//    'VIOLATIONDESC',
//    'ROW_ID' ],
