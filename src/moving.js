let dataParcer = require('./parse.js');

let movingData = dataParcer('./simple_data/moving_jan_2016.csv');
// console.log(movingData);
let items = ['VIOLATIONDESC', 'VIOLATIONCODE', 'FINEAMT', 'TICKETTYPE', 'TOTALPAID'];

let violationDescIndex = movingData[0].indexOf('VIOLATIONDESC');
let violationCodeIndex = movingData[0].indexOf('VIOLATIONCODE');
let fineAmtIndex = movingData[0].indexOf('FINEAMT');
let ticketTypeIndex = movingData[0].indexOf('TICKETTYPE');
let totalPaidIndex = movingData[0].indexOf('TOTALPAID');

let violationTotalIncome = 0;
let averageFineAmount = 0;
let totalPhotoIncome = 0;
let frequency = {};

for (let index = 1; index < movingData.length ; index++) {
  // console.log('Moving Data for index: ' + index);
  // console.log('VIOLATIONDESC: ' + movingData[index][violationDescIndex]); //understanding two dimensional arrays //two dimensional array tutorial
  // console.log('VIOLATIONCODE: ' + movingData[index][violationCodeIndex]); //violation type
  // console.log('FINEAMT: ' + movingData[index][fineAmtIndex]); //fine amount
  // console.log('TICKETTYPE: ' + movingData[index][ticketTypeIndex]); //tickettype, need to get "photo seperate"
  // console.log('TOTALPAID: ' + movingData[index][totalPaidIndex]); //total paid, need to seperate 'photo' income, then add
  // console.log('TOTALPAID: '+ movingData[index][totalPaidIndex]); //need to add all values
  // console.log('\n\n\n\n\n\n');

  violationTotalIncome = violationTotalIncome + Number(movingData[index][totalPaidIndex]);

  averageFineAmount = (averageFineAmount + Number(movingData[index][fineAmtIndex])/movingData.length);

  if (movingData[index][ticketTypeIndex] === 'Photo') {
    totalPhotoIncome = totalPhotoIncome + Number(movingData[index][totalPaidIndex]);
  }

  if (movingData[index][violationCodeIndex] !== '') {
    if (!frequency[movingData[index][violationCodeIndex]]) { //have I seen this code?
      frequency[movingData[index][violationCodeIndex]] = 1; //'no' this  the first time, so i will set it to one -----is saying that when I see T120, it sounds as one, and goes into the object
    } else {
      frequency[movingData[index][violationCodeIndex]]++;
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

console.log(maxTicketType);
console.log(maxTicketTypeCount);


// console.log('Total income of all moving violations: ', violationTotalIncome);
// console.log('Average fine amount: ', averageFineAmount);
// console.log('Photo citations income: ', totalPhotoIncome);
// console.log('frequency of ticket types: ', frequency);

// console.log('Most common violation type: ', );
// What was the most common violation type for a moving violation?

//index 0 of my moving data
// [ 'X','Y','OBJECTID','ROW_','LOCATION','ADDRESS_ID','STREETSEGID','XCOORD',
//    'YCOORD','TICKETTYPE','FINEAMT','TOTALPAID','PENALTY1','PENALTY2','ACCIDENTINDICATOR',
//    'AGENCYID','TICKETISSUEDATE','VIOLATIONCODE','VIOLATIONDESC','ROW_ID' ],
