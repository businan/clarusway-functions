/* sayHi()

function sayHi() {
    console.log('inside sayHi function')
    return 'Hello'
}
console.log(sayHi()) */

/* function sayHi(name) {
  
  name = 'Jhon';
  console.log(name);
  console.log(`Hello! ${name}`);
}

let myName = 'Leon';
sayHi(myName);
console.log(myName);
 */

/* let student = {name: "Leon"}

function sayHi2(student) {
  console.log(`Hello! ${student.name}`);
  student.name = 'John';
  student = {name: "Bart"}
  console.log(student.name);
}
sayHi2(student);
console.log(student.name); */

/* function sum(a, b) {
    return a + b;
}

function addTwo(number) {
    return sum(parseInt(number), 2);
}

console.log(addTwo("5")); */

/* function div(num1, num2) {
    if (num2 === 0)  {
        return "Zero divition error"
    }
    return num1 / num2
    
}

function div2(num1, num2) {
    return num2 === 0 ? "Zero divition error"  : num1 / num2
    // return num2 ? num1 / num2 : 'Zero divition error';
}


console.log(div(3,2))
console.log(div2(3,0))

const div3 = (num1, num2) => num2 === 0 ? "Zero division error" : num1 / num2
console.log(div3(3,2)) */

// result  = 1 + 2 + 3 + 4 + 5

/* function pascalNumber1(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        //console.log(i)
        sum += i;
    }
    return sum;
}

function pascalNumber2(n) {
    return (n * (n + 1)) / 2;
}

function pascalNumber3(n) {
    if (n === 1) return 1;
    return n + pascalNumber3(n - 1); 
    // return 5 + pascalNumber3(4) 
    // retrun 5 + 4 +pascalNumber3(3)
    // return 5 + 4 + 3 + pascalNumber3(2)
    // return 5 + 4 + 3 + 2 + pascalNumber3(1)
    // return 5 + 4 + 3 + 2 + 1
}

// console.log(pascalNumber1(9));
// console.log(pascalNumber2(9));
console.log(pascalNumber3(5)); */

/* function sum() {
    // console.log(arg)
    // console.log(arguments)
    let sum = 0;
    for (let i = 0; i < arguments.length; i++) {
    
        // console.log(arguments[i])
        sum += arguments[i];
    }
    // console.log(sum)
    return sum;
    
}
console.log(sum(1,2,3,4,5)) */

/* function sum(...numbers) {
    console.log(numbers)
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
    
        // console.log(arguments[i])
        sum += numbers[i];
    }
    // console.log(sum)
    return sum;
    
}
console.log(sum(1,2,3,4,5,6,7)) */

/* function myConcat(separator, second, ...others) {
    console.log(separator);    
    console.log(arguments);
    console.log(others)
    
    let result = ''; // initialize list
    // iterate through arguments
    for (let i = 0; i < others.length; i++) {
       result += others[i] + separator;  // red, orange, blue,
    }
    return result;
 }
 
 // returns "red, orange, blue, "
 console.log(myConcat(', ', 'red', 'orange', 'blue')); */

/*  function greet(user = 'User') {
    console.log(`Welcome! ${user}`);
  }
  
  greet('Leon');
  greet('')
  greet(0)
  greet(); // ? what will the output be  */

/* console.log(sayHi1());
// console.log(sayHi2());

function sayHi1() {
  return 'Hello! from sayhi1';
}
const sayHi2 = function greet() {
  return 'Hello! from sayHi2';
};
console.log(sayHi2());
console.log(greet()); */

/* const pascal = function pascalSum(n) {
  // with recursive
  if (n === 1) return 1;
  return n + pascalSum(n - 1);
};

console.log(pascal(5)) */

/* let result = (function trian(num) {
    if (num === 1) return 1;
    return num + trian(num-1);
})(3);

let result2 = (function trian(num){
    if (num === 1) return 1;
    return num + trian(num-1);
})(6)

console.log(result)
console.log(result2) */

/* (function sumNumber(n) {
    var sum = 0;
    while (n >= 0) {
      sum += n;
      n--;
    }
    console.log('result', sum);
})(6); 
// console.log(sumNumber(5)) */

/* let n = 5
const iife = function(n){
    console.log(n)
    return n
}(n);

console.log(iife);  */

/* console.log(mult(4, 6));
function mult (n1, n2) {
    return n1 * n2;
  }

const mult1 = function (n1, n2) {
  return n1 * n2;
};

const mult2 = (num1, num2) => (num1 * num2);

// console.log(sumWithSameNumber(5));

const sumWithSameNumber = num => {
    console.log(num)
    return num + num;
} 


console.log(mult1(4, 6));
console.log(mult2(4, 6));
console.log(sumWithSameNumber(5)); */



/* const car = () => {
    return { name: "BMW" };
};

const car2 = () => ({ name: "BMW" })

console.log(car());
console.log(car2());
 */




/* // Block Scope

console.log('outside before if block var a: ', a)
// console.log('outside before if block var b: ', b)

if (true) {
  var a = "value a"
  let b = "value b"
  console.log('inside if block var a: ', a)
  console.log('inside if block var b: ', b)
}
// console.log('outside after if block var a: ', a)
// console.log('outside after if block var b: ', b)   */



/* console.log('outside  function block var a: ', a)
console.log('outside  function block var b: ', b)


function sayHi() {
  var a = "value a"
  let b = "value b"
  console.log('inside function block var a: ', a)
  console.log('inside function block var b: ', b)
};

sayHi()

// console.log('outside  function block var a: ', a)
// console.log('outside  function block var b: ', b)
 */

/* const cat = {
    name: 'Mizza',
    age: 8,
    whatName() {
        console.log(this)
        return this.whatName
    }
};
console.log(cat.whatName());  
console.log(cat.name);  
console.log(cat.age);   */



let num1 = 10;
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
    // console.log({ num3, num4 });
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
