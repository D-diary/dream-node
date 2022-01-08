const EventEmitter = require('events');
const emitter = new EventEmitter();

const callback1 = (args) => {
  console.log('first callback -', args);
};
emitter.on('d-diary', callback1);


emitter.on('d-diary', (args) => {
  console.log('second callback - ', args);
});

emitter.emit('d-diary', {
  message: 1
});
emitter.emit('d-diary', {
  message: 2
});
emitter.removeListener('d-diary', callback1);
// emitter.removeAllListeners();
emitter.emit('d-diary', {
  message: 3
});