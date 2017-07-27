const path = require('path');
const fs = require('fs');
const findMatches = require('./logic')

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
