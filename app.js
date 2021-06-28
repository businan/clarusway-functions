/* sayHi();

function sayHi() {
  console.log('Hello');
}
sayHi();
console.log(sayHi()) */





/* function sayHi() {
  console.log('Hi! World');
  return 'Hi!';
} 

sayHi();
console.log(sayHi()) */





/* function sayHi(name) {
  console.log(`Hello! ${name}`);
  name = 'John';
  console.log(name);
}

let myName = 'Matthew';
sayHi(myName);
console.log(myName); */

/* let student = {};
student.name = 'Matthew';

function sayHi2(st) {
  console.log(`Hello! ${st.name}`);
  st.name = 'John';
  // st = {name: "Bart"}
  console.log(st.name);
  console.log( typeof st);
}
sayHi2(student);
console.log(student.name); */






/* function sum(a, b) {
  return a + b;
}

function addThree(num1) {
  // calling another function within function
  return sum(num1, 3);
}

console.log(addThree(3)) */


/* function isEven(num){
   return !(num%2)
}
console.log(isEven(2));

console.log(typeof !undefined);
console.log( !undefined); */






/* function div(num1, num2) {
  if (num2 === 0) {
    return 'Zero divition error';
  }
  // some work
  return num1 / num2;
}

function div2(num1, num2) {
  return num2 ? num1 / num2 : 'Zero divition error';
}

console.log(div(3, 0));
console.log(div2(3, 0)); */






/* 
let num1 = 5;
let num2 = 1;
let result;

if (num2 === 0) {
  result = 0;
} else {
  result = num1 / num2;
}

console.log(result);
  */







/* let sum;
// sum = 1 + 2 + 3 + 4 + 5 + .... n
function pascalSum1(n) {
    return (n * (n + 1)) / 2;
}

function pascalSum2(n) {
    // with loop
    // var sum;
    let sum = 0;
    while (n >= 0) {
        sum += n;
        n--;
    }
    return sum;
}

function pascalSum3(n) {
    // with recursive
    // console.trace(n);
    if (n === 1) return 1;
    return n + pascalSum3(n - 1);
}

console.log("Result for number 5:", pascalSum2(5)); */







/* function greet(user) { 
  user = user || 'Mız mız';
  console.log(`Welcome! ${user}`);
}

greet('Mark');
greet(' ')
// greet(0)
// greet(); // ? what will the output be

function greet2(user = 'Mız mız') {
  console.log(`Welcome! ${user}`);
}

greet2('Mark');
greet2(' ')
// greet2(0)
// greet2(); // ? what will the output be */







/* console.log(sayHi1());
// console.log(sayHi2());

function sayHi1() {
  return 'Hello! sayhi1';
}
const sayHi2 = function greet() {
  return 'Hello! from 2';
};
console.log(sayHi2());
// console.log(greet()); */

/* const pascal = function pascalSum(n) {
  // with recursive
  if (n === 1) return 1;
  return n + pascalSum(n - 1);
};

console.log(pascal(5)) */





/* (function (n) {
  var sum = 0;
  while (n >= 0) {
    sum += n;
    n--;
  }
  console.log('result', sum);
})(4); */





/* -(function() {
  console.log(1)
})() 
+(function() {
    console.log(1)
  })()

~(function() {
  console.log(1)
})()
 */




/* var iife = function (){
  return 'Immediately Invoked Function Expressions(IIFEs) example ';
}();
console.log(iife); // 'Immediately Invoked Function Expressions(IIFEs) example ' */





/* // const car = () => {
//   return { make: "Bmw" } // car() returns returns {make: "Bmw"}
// } 

// const car = () =>  { make: "Bmw" } // car() returns undefined


const car = () => ({ make: "Bmw" }) // car() returns {make: "Bmw"}
console.log(car()) */





/* var arguments = [1, 2, 3];
var arr = () => arguments[0];

console.log(arr()); // 1

function foo(n) {
  var f = () => arguments[0] + n; // foo's implicit arguments binding. arguments[0] is n
  return f();
}

console.log(foo(3)); // 3 + 3 = 6 */




/* function myConcat(separator) {
    console.log(separator);    
    console.log(arguments);
    
    
    let result = ''; // initialize list
    // iterate through arguments
    for (let i = 1; i < arguments.length; i++) {
       result += arguments[i] + separator;
    }
    return result;
 }
 
 // returns "red, orange, blue, "
 console.log(myConcat(', ', 'red', 'orange', 'blue'));
 
 // returns "elephant; giraffe; lion; cheetah; "
 console.log(myConcat('; ', 'elephant', 'giraffe', 'lion', 'cheetah'));
 
 // returns "sage. basil. oregano. pepper. parsley. "
 console.log(myConcat('. ', 'sage', 'basil', 'oregano', 'pepper', 'parsley')); */





/* function myFun(a, b, ...manyMoreArgs) {
    console.log("a", a);
    console.log("b", b);
    console.log("manyMoreArgs", manyMoreArgs);
}

myFun("one", "two", "three", "four", "five", "six");

// a, "one"
// b, "two"
// manyMoreArgs, ["three", "four", "five", "six"] <-- notice it's an array */





/* function multiply(multiplier, ...theArgs) {
    return theArgs.map((element) => {
        return multiplier * element;
    });
}

let arr = multiply(2, 15, 25, 42);
console.log(arr); // [30, 50, 84]  */


