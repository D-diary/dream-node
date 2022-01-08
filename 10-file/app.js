const fs = require('fs')

try {
  fs.renameSync('./text.txt', './text-new.txt');
} catch (error) {
  console.error(error);
}

fs.rename('./text-new.txt', './text.txt', (error) => {
  console.log(error);
})
console.log('hello');

fs.promises
  .rename('./text2.txt', './text2-new.txt')
  .then(() => console.log('Done!'))
  .catch(console.error);