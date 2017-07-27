const path = require('path');
const fs = require('fs');

const findMatches = (str, callback) => {
  const filePath = path.join(__dirname, "..", "nameOfStar.txt");
  var result = [];
  fs.readFile(filePath, 'utf8', (err, file) => {
    if (err) {
      console.log(err);
    } 
    else {
        file.toLowerCase().split(",").forEach((star) => { //split at the comma and loop through the string
           if (star.startsWith(str) && result.length <= 10) {  //if string matches the first few inputs
             result.push(star); //push the star name into the auto result
           }
         });
         if (result.length <= 10) {
           file.toLowerCase().split(",").forEach((star) => {
             if ((star.indexOf(str) !== -1) && (result.length <= 10) && (result.indexOf(star) === -1)) {
               result.push(star);
             }
           })
          
};
       callback(result);
     }
   });
  }


module.exports = findMatches