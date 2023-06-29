//task 1
const http = require('http');
const os = require('os');
const path = require('path');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });

  const userInfo = os.userInfo();
  const uptime = Math.floor(os.uptime() / 60);
  const currentDirectory = process.cwd();
  const serverFileName = path.basename(__filename);

  const html = `
    <h1>System Information</h1>
    <p>Username: ${userInfo.username}</p>
    <p>OS Type: ${os.type()}</p>
    <p>Uptime (minutes): ${uptime}</p>
    <p>Current Directory: ${currentDirectory}</p>
    <p>Server File Name: ${serverFileName}</p>
  `;

  res.end(html);
});

server.listen(5000, () => {
  console.log('Server is running on port 5000');
});

//task 2
// personalmodule.js
const getGreeting = (name) => {
    const currentTime = new Date();
    const hour = currentTime.getHours();
  
    let greeting;
    if (hour < 6) {
      greeting = 'Good night';
    } else if (hour < 12) {
      greeting = 'Good morning';
    } else if (hour < 18) {
      greeting = 'Good afternoon';
    } else {
      greeting = 'Good evening';
    }
  
    return `${greeting}, ${name}!`;
  };
  
  module.exports = { getGreeting };

  const http = require('http');
const personalModule = require('./personalmodule');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });

  const greeting = personalModule.getGreeting('John');

  const html = `
    <h1>Greeting</h1>
    <p>${greeting}</p>
  `;

  res.end(html);
});

server.listen(5000, () => {
  console.log('Server is running on port 5000');
});
