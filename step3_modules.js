
//imports contents from another file
var hello = require('./hello');

hello.world();




/*
* how to override a module's function

module.exports = function() {
  // ...
}

hello.world = function() {
  console.log("bye bye");
}

*/
