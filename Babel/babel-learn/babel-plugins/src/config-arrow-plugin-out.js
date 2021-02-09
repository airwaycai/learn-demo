let array = [1, 2, 3, 4, 5, 6]; // 实例方法api

array.includes(function (item) {
  return item > 2;
}); // 静态方法api

Object.assign({}, {
  a: 1,
  b: 2
}); // promise api

new Promise(); // 语法

class Robot {
  constructor(msg) {
    this.message = msg;
  }

  say() {
    alertMe(this.message);
  }

} // 语法


const fn = function () {
  return 1;
}; // 语法


const asyncFn = async function () {
  return await 2;
};
