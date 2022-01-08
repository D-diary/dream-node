const fs = require('fs');

const readStream = fs.createReadStream('./file.txt', {
  // highWaterMark: 8, // 기본값 64 kbytes
  // encoding: 'utf-8',
});
// 한번에 얼마만큼의 데이터를 읽어오는지 정할 수 있다.
const data = [];
readStream.on('data', chunk => {
  // console.log(chunk);
  data.push(chunk);
  console.count('data')
});

readStream.on('end', () => {
  console.log(data.join(''));
})
readStream.on('error', (error) => {
  console.log(error);
})