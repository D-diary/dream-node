console.log('logging.....');
// console.clear();

// log level
console.log('log');
console.info('info');
console.log('warn');
console.log('error');

// assert
console.assert(2 === 3, 'not same!');
console.assert(2 === 2, 'same!');

// print object
const student = {
  name: 'd-diary',
  age: 20,
  company: {
    name: 'AC'
  }
};
console.log(student);
console.table(student);
console.dir(student, {
  showHidden: true,
  color: false,
  depth: 0
});

// measuring time
console.time('for loop');
for (let i = 0; i < 10; i++) {
  i++
}
console.timeEnd('for loop');

//trace 
function f1() {
  f2();
}

function f2() {
  f3();
}

function f3() {
  console.log('f3');
  console.trace();
}
f1();