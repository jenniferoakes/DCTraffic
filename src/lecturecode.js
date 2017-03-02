//*made it possible to export the results of the function to the require line in the other file that calls it
//*used readFile function to pull in moving jan 2016 data
//*put a function inside of the readFile function to do something (print out contents of the csv january file)

module.exports = filessystem.readFile('./simple_data/moving_jan_2016.csv',
  function printOutTheContents(possibleError, contentsOfTheFile) {

    let rows = stringValue.split('\n'); //split moving_jan data by 'enter' keystrokes *this will find new lines*
    console.log(rows); //shows me if I put the rows into an array

    let stringValue = contentsOfTheFile.toString(); //all objects have a function called toString, converts contents into a string
    console.log(stringValue); //buffer allows us to store data in a compressed container // produces one big string
    //what if I wanted to get different pieces of the string
    //pressing enter is an invisible character, so we can split on that invisible character

    return; //this will be usuable data
});


//The Synchronous way to do thing (BELOW)
let filesystem = require('fs');

let contentsOfTheFile = filesystem.readFileSync(./data.csv); //this is less efficient on our application in the long run
// the contents of the file are actually a buffer
// console.log( contentsOfTheFile.toString() 0;)
let stringValue = contentsOfTheFile.toString();
let rows = stringValue.split('\n');
console.log(rows);


// module.exports
