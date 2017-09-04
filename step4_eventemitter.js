var events = require('events');
var eventEmitter = new events.EventEmitter();

var reaction = function reaction()
{
  console.log('ow');
}
eventEmitter.on('poke', reaction);

eventEmitter.emit('poke');
