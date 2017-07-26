const path = require('path');
const fs = require('fs');

const handleHome = (response) => {
  const filePath = path.join(__dirname, "..", "public", "index.html");
  fs.readFile(filePath, (err, file) => {
    if (err) {
      console.log(err);
      response.writeHead(500, "Content-Type:text/html");
      response.end("<h1>Heather fucked up</h1>");
    } else {
      response.writeHead(200, "Content-Type:text/html");
      response.end(file + "Leo success!");
    }
  });
}

const findMatches = (str, callback) => {
  const filePath = path.join(__dirname, "..", "nameOfStar.txt");
  var result = [];
  fs.readFile(filePath, 'utf8', (err, file) => {
    if (err) {
      console.log(err);
    } else {

      file.toLowerCase().split(",").forEach((star) => {
        if ((star.indexOf(str) !== -1) && (result.length <= 10)) {
          result.push(star);
        }
      });
      // console.log(result);
      // // return result
      callback(result);
      //console.log(result);
    }
  });
}

const handleAuto = (request, response) => {
  const str = decodeURI(request.url.split('?')[1]);
  findMatches(str, (arr) => {
    response.writeHead(200, 'Content-Type:application/json');
    let matchObj = {
      "suggestions": arr
    };
    response.end(JSON.stringify(matchObj));
  });
  // console.log("result", match);
}

const handleIndex = (request, response) => {
  const filePath = path.join(__dirname, "..", "public", "index.js");
  fs.readFile(filePath, (err, file) => {
    if (err) {
      console.log(err);
      response.writeHead(500, "Content-Type:text/html");
      response.end("<h1>King fucked up</h1>");
    } else {
      response.writeHead(200, "Content-Type:application/javascript");
      response.end(file);
    }
  });
}




module.exports = {
  handleHome,
  handleAuto,
  handleIndex
};
