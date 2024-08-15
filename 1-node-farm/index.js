// const fs = require('fs');
// const txt = fs.readFileSync("./input.txt", "utf-8");
// console.log(txt);
// console.log(txt);

const http = require('http');
const server = http.createServer((req, res) => {
    res.end('Hello from the server');
});

server.listen(8000);