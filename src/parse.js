
//*created a variable //this points to 'file system' inside 'node'

//I need to parse the lines of text in the files and separating them into an array of arrays:
//one array for each line, and each entry being an array of the values for that line

module.exports = function parse(fileName) {
  let filesystem = require('fs');

  let inputData = filesystem.readFileSync(fileName);
  let stringData = inputData.toString();
  let entriesData = stringData.split('\n');
//we made an array of strings that are each one row of the fileName
//trying to step over the array, looking at each row
//with each row we want to split at the commas
  let returnData = [];

  for (let index = 0; index < entriesData.length ; index++ ) {
    returnData.push(entriesData[index].split(','));
  }

  console.log(returnData);
  return returnData;
};


// parse('../simple_data/moving_jan_2016.csv');
