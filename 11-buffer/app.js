const fs = require('fs')
const buf = Buffer.from('Hi');
console.log(buf);
console.log(buf.length);
console.log(buf[0]);
console.log(buf[1]);
console.log(buf.toString()); // 기본값은 utf-8 

// create
const buf2 = Buffer.alloc(3);
// 사이즈가 2개인 버퍼를 만든다. 메모리를 초기화 시켜줌
const buf3 = Buffer.allocUnsafe(3);
// 기존의 다른 데이터가 있으나 사용되지 않는 메모리라면 
// 공간을 확보하지만 초기화하지 않음 빠름 하지만 데이터가 있을수 있으므로 초기화해주는게 좋다 
buf2[0] = 72;
buf2[1] = 105;
buf2.copy(buf3);
console.log(buf2.toString());
console.log(buf3);

// concat
const newBuf = Buffer.concat([buf, buf2, buf3]);
console.log(new.toString());
// 합쳐줌