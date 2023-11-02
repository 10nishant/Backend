const EventEmitter = require ("event");

const shoutEvent = new EventEmitter();

shoutEvent.on('echopoint', function(){
    console.log("Custom event recieved : ", data);
})

shoutEvent.emit('echopoint', {message: 'Shouting on echo point'})