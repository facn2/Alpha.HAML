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
      response.end(file + "Leo sucess!");
    }
  });
}

const compareStuff = (string) => {
  const filePath = path.join(__dirname, "..", "starNames.txt");
  fs.readFile(filePath, (err, file) => {
    if (err) {
      console.log(err);
    } else {

    }
  });
}


module.exports = {
  handleHome,
};
