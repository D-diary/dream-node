function hello() {
  console.log(this);
}
hello();

class A {
  constructor(num) {
    this.num = num;
  }
  memberFunction() {
    console.log('-------- class --------');
    console.log(this);
  }
}
const a = new A(1);
a.memberFunction();

console.log(this === module.exports);