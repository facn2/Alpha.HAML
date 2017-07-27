const path = require('path');
const fs = require('fs');

const handleHome = (response) => {
  const filePath = path.join(__dirname, "..", "public", "index.html");
  fs.readFile(filePath, (err, file) => {
    if (err) {
      response.writeHead(500, "Content-Type:text/html");
      response.end("<h1>We fucked up</h1>");
    } else {
      response.writeHead(200, "Content-Type:text/html");
      response.end(file);
    }
  });
}

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

const handleAuto = (request, response) => {
  const str = decodeURI(request.url.split('?')[1]);
  findMatches(str, (arr) => { // once reading file and getting the result, execute callback function
    response.writeHead(200, 'Content-Type:application/json');
    let matchObj = {
      "suggestions": arr
    };
    response.end(JSON.stringify(matchObj));
  });

}

const handleIndex = (request, response) => {
  const filePath = path.join(__dirname, "..", "public", "index.js");
  fs.readFile(filePath, (err, file) => {
    if (err) {
      response.writeHead(500, "Content-Type:text/html");
      response.end("<h1>King fucked up</h1>");
    } else {
      response.writeHead(200, "Content-Type:application/javascript");
      response.end(file);
    }
  });
}

const handleCSS = (request, response) => {
  const filePath = path.join(__dirname, "..", 'public', 'main.css');
  fs.readFile(filePath, (err, file) => {
    if (err) {
      response.writeHead(500, 'Content-Type: text/html');
      response.end('<h1>Can\'t find the bloody CSS</h1>')
    } else {
      response.writeHead(200, 'Content-Type:text/css');
      response.end(file);
    }
  });
}


const handleImages = (response, url) => {
  const extension = url.split('.')[1];
  const extensionType =  {
    ico: "image/x-icon",
    jpg: "image/jpg",

  }
  const filePath = path.join(__dirname, "..", url);
  fs.readFile(filePath, (err, file) => {
    if (err) {
      response.writeHead(500, 'Content-Type: text/html');
      response.end('<h1>Can\'t find the bloody images</h1>')
    } else {
      response.writeHead(200, 'Content-Type: ${extensionType[extension]}');
      response.end(file);
    }
  });
}

module.exports = {
  handleHome,
  handleAuto,
  handleIndex,
  handleCSS,
  handleImages
};
