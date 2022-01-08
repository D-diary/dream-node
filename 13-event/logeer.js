const EventEmitter = require('events');
// const emitter = new EventEmitter();

class Logger extends EventEmitter {
  log(callback) {
    this.emit('log', 'started...');
    callback();
    this.emit('log', 'ended!');
  }
}

// Logger 라는것 자체는 emitter이라는 함수를 가지고 있다.
// 기존의 이벤트 에미터라는 클래스에 로그라는 함수가 추가된 로거를 만듬
// 이벤트 에미터는 콜백함수를 받으면 자체적으로 로그란 이벤트가 발생

// function log(callback) {
//   emitter.emit('log', 'started...');
//   callback();
//   emitter.emit('log', 'ended!');
// }

module.exports.Logger = Logger;