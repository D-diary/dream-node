const fs = require('fs').promises;

// reading a file
fs.readFile('./text.txt', 'utf-8')
  .then((data) => console.log(data))
  .catch(console.error());

// writing a file
fs.writeFile('./file.txt', 'hello bunny! ')
  .catch(console.error)

fs.appendFile('./file.txt', 'hello Coders! ')
  .then(() => {
    // copy
    fs.copyFile('./file.txt', './file2.txt')
      .catch(console.error)
  })
  .catch(console.error)

// 비동기는 순차적으로 될 수 도 있고 안 될 수도 있음을 유의해야 한다

// folder
fs.mkdir('sub-folder')
  .catch(console.error)

fs.readdir('./')
  .then(console.log)
  .catch(console.error)