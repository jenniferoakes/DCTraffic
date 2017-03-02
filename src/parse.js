
let filessystem = require('fs');
//*created a variable //this points to 'file system' inside 'node'


//*made it possible to export the results of the function to the require line in the other file that calls it
//*used readFile function to pull in moving jan 2016 data
//*put a function inside of the readFile function to do something (print out contents of the csv january file)
modules.export = filessystem.readFile('./moving_jan_2016.csv',
  function printOutTheContents(possibleError, contentsOfTheFile) {

    let rows = stringValue.split('\n'); //splitfind newlines, find where someone hit enter
    console.log(rows); //puts the rows in an array

    let stringValue = contentsOfTheFile.toString(); //all objects have a function called toString, converts contents into a string
    console.log(stringValue); //buffer allows us to store data in a compressed container // produces one big string
    //what if I wanted to get different pieces of the string
    //pressing enter is an invisible character, so we can split on that invisible character

    return; //this will be usuable data
});



//I need to parse the lines of text in the files and separating them into an array of arrays:
//one array for each line, and each entry being an array of the values for that line
