const handlers = require('./handlers');
const router = (request, response) => {
  const url = request.url;
  if (url === '/') {
    handlers(response);
    console.log('Heather got the thing right');
  } else {
    response.writeHead(404, "Content-Type:text/html");
    response.end("<h1>Heather fucked up</h1>");
  }
}

module.exports = router;
