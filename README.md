# Stony Brook Computing Society
## Alexa's Node.js Workshop

Resources and tutorial code built for the SBCS Sept. 6th 2017 Node.js Workshop

### Step 0: What is Node.js?

Node.js® is a JavaScript runtime built on Chrome's V8 JavaScript engine. Node.js uses an event-driven, non-blocking I/O model that makes it lightweight and efficient. Node.js' package ecosystem, npm, is the largest ecosystem of open source libraries in the world.

Alrighty, lets get you set up.

### Step 1: Installation

Install [Node.js](https://nodejs.org/en/) v4+ to run.
Then either open powershell or the Node.js command prompt and navigate to your working directory.

To test if it works, run the following:
```sh
$ npm install -d
$ node
> console.log("Hello World");
Hello World
```

Now put your console.log() statement into a *.js file, and run it like so:
```sh
$ node step1.js
Hello World
```

### Step 2: HTTP

So that isn't very exciting, so lets send hello world over http.
```sh
// Include http module.
var http = require('http');

//create http server and send a 200 OK header, as well as the body 'Hello Http'.
var server = http.createServer(function(req, res) {
  res.writeHead(200);
  res.end('Hello Http');
});
server.listen(8080);
```
Run:
```sh
$ node step2_http.js

```
You will notice that it doesn't exit right away. That's because a node program will always run until it's certain that no further events are possible. Navigate to http://localhost:8080/

### Step 3: Modules

One of the staples of node.js is that you can use modules within your project. In this case we will initalize the function `world()` to be exported.
```sh
//hello.js
exports.world = function() {
  console.log('Hello World');
}
```
And here we will import `world()` into another file by calling it with `require('./hello')`.
```sh
//step3_modules.js
var hello = require('./hello');
hello.world();
```

#### NPM
Now that we get the basic idea of how a module works, you can include any module you want from here: https://www.npmjs.com/

For example: https://www.npmjs.com/package/mysql
How to install:
```sh
$ npm install mysql --save
```

### Step 4: Eventemitter

The main idea: action -> reaction
```sh
var events = require('events');
var eventEmitter = new events.EventEmitter();

var reaction = function reaction()
{
  console.log('ow');
}
eventEmitter.on('poke', reaction);

eventEmitter.emit('poke');
```

### Step 5: Sample Page

We can type everything back by hosting HTML pages with HTTP, so on and so forth.
```sh
var http = require('http');
var url = require('url');
var fs = require('fs');

http.createServer(function (req, res) {
  var q = url.parse(req.url, true);
  var filename = "." + q.pathname;
  fs.readFile(filename, function(err, data) {
    if (err) {
      res.writeHead(404, {'Content-Type': 'text/html'});
      return res.end("404 Not Found");
    }
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();
  });
}).listen(8080);
```

But this sucks right? Luckily we have Express.js to help us with routing and serving a web client, that could potentially function as a REST API as well.  

### Step 6: Express.js

Routing!!

```sh
const express = require('express')
const app = express()
var path = require('path');

app.get('/home', function(req, res) {
    res.sendFile(path.join(__dirname + '/home.html'));
});

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
```
