const http = require('http');
const fs = require('fs');

const server = http.createServer((request, response) => {
  const { method, url } = request;

  if (method === 'GET' && url === '/') {
    response.setHeader('Content-Type', 'application/json');
    response.statusCode = 200;
    response.write(JSON.stringify({ msg: 'welcome to the home page' }));
    response.end();
  } else if (method === 'GET' && url === '/api/cats') {
    fs.readFile('data/cats.json', 'utf-8', (err, fileContents) => {
      const cats = JSON.parse(fileContents);
      response.setHeader('Content-Type', 'application/json');
      response.statusCode = 200;
      response.write(JSON.stringify({ cats }));
      response.end();
    });
  } else if (method === 'GET' && /\/api\/cats\/.*/g.test(url)) {
    const catId = +url.slice(10);

    fs.readFile('data/cats.json', 'utf-8', (err, fileContents) => {
      const cats = JSON.parse(fileContents);
      const chosenCat = cats.find(cat => cat.id === catId);
      response.setHeader('Content-Type', 'application/json');
      response.statusCode = 200;
      response.write(JSON.stringify({ cat: chosenCat }));
      response.end();
    });
  } else {
    response.setHeader('Content-Type', 'application/json');
    response.statusCode = 404;
    response.write(JSON.stringify({ msg: 'resource not found' }));
    response.end();
  }
});

server.listen(9090);
