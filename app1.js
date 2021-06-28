/* let num1 = 10;
var num2 = 20;
console.log('at the global scope');
console.log({ num1, num2 });
func1();
console.log({ num1, num2 });
// console.log({ num3, num4 });

// function declaration
function func1() {
  let num1 = 101;
  let num2 = 102;
  var num3 = 103;
  console.log('..inside func1');
  if (num1 < num2) {
    console.log('inside if block');
    let num1 = 201;
    // var num2 = 205;
    console.log({ num1, num2 });
    console.log({ num3, num4 });
    // let num3 = 206;
    var num4 = 204;
    num1++;
    num2++;
    num3++;
    num4++;
    console.log({ num1, num2 });
    console.log({ num3, num4 });
  }
  console.log('after if block');
  num3++;
  num4++;
  console.log({ num1, num2 });
  console.log({ num3, num4 });
}
// anonymous function expression
const sayHi = function () {
  console.log('Hello!');
  console.trace();
};
// named function expression
const sayHi2 = function greet() {
  console.log('Hello!');
  console.trace();
};
sayHi();
sayHi2(); */


// Block Scope

/* // console.log('outside before if block var a: ', a)
// console.log('outside before if block var b: ', b)

if (true) {
  var a = "value a"
  let b = "value b"
  console.log('inside if block var a: ', a)
  console.log('inside if block var b: ', b)
}
// console.log('outside after if block var a: ', a)
// console.log('outside after if block var b: ', b) */


// Function Scope

/* const sayHi = function sayHi() {
  var a = "value a"
  let b = "value b"
  console.log('inside function block var a: ', a)
  console.log('inside function block var b: ', b)
};

sayHi()

console.log('outside  function block var a: ', a)
console.log('outside  function block var b: ', b) */
