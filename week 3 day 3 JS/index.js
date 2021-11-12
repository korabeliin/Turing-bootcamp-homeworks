'use strict'

// console.log("**********PART 1**********");

// 1
// console.log("// 1");

// let a = 0;

// while(a <= 10) {
//   console.log(a);
//   a++;
// }

// do {
//   console.log(a);
//   a++;
// } while (a < 11);

// for(; a < 11; a++) {
//   console.log(a);
// }

// 2

// let stopWord = prompt();

// for (let i = 0; stopWord !== "Завершить" && i <= 10; i++){
//   console.log(i);
//   stopWord = prompt();
//   console.log(stopWord);
// }

// 3    all odd numbers from 0 to 20
// console.log("// 3");
// for(let i = 0; i <= 20; i++) {
//   if (i % 2 !== 0) {
//     console.log(i);
//   }
// }

// 4 
// console.log("// 4");
// const A = 201;

// switch (A % 2) {
//   case 0:
//     console.log('A чётное');
//     break;
//   default:
//     console.log('A нечётное');
//     break;
// }

// 5
// let firstVar = 1;
// let secVar = 2;
// let thirdVar = 0;

// thirdVar = firstVar;
// firstVar = secVar;
// secVar = thirdVar;

// 6
// console.log("// 6");

// let floatNum = 143.2343;
// console.log(Math.round(floatNum * 100) / 100);

// 7
// console.log("// 7");
// let decimalNum = 42.2654;
// console.log(Math.round(decimalNum * 10) / 10);

// 8
// console.log("// 8");

// let str = 'I learn JavaScript';

// for(let i = 0; i < str.length - 1; i++) {
//   // console.log(i);
//   if (str[i] === "J") {
//     console.log(`The index is ${i}`);
//   }
// }

// 9
// console.log("// 9");

// let returnFunc = () => {
//   let num = 0;
//   return () => {
//     num++;
//     return num;
//   }
// }

// let myFunk = returnFunc();

// console.log(myFunk());
// console.log(myFunk());
// console.log(myFunk());

// 10
// console.log("// 10");

// let nums = {
//   one: 1,
//   two: 'two',
//   getOne() {
//     return this.one;
//   },
//   getOwnObject() {
//     return this;
//   }
// }
// console.log(nums.getOwnObject());
// console.log(nums.getOne());

// function getTwo() {
//   return this.two;
// }
// function takeOne() {
//   return this.getOne();
// }
// console.log(getTwo.call(nums));
// console.log(takeOne.call(nums));


// 11
// console.log("// 11");

// let squarePow = (n, callbackFn) => {
//   return callbackFn(n*n);
// }
// squarePow(2, (x) => {console.log(x*x);});

// 12
// console.log("// 12");

// function curry(f) { 
//   return function (a) {
//     return function (b) {
//       return f(a, b);
//     };
//   };
// }

// function sum(a, b) {
//   return a + b;
// }

// let curriedSum = curry(sum);

// console.log(curriedSum(60)(12)); 


console.log("**********PART 2**********");

// 1
console.log("// 1");

let alphabet = {
  a: 'a',
  b: 'b',
  c: 'c'
}

console.log(alphabet['a'], alphabet.a);

// 2
console.log("// 2");

let myObj = {
  a: 2,
  b: "Coding"
}

let copyObj = Object.assign({}, myObj);
let secCopyObj = {...myObj};

console.log(copyObj);
console.log(secCopyObj);

// 3
console.log("// 3");

let newObj = {
  a: 4
}

console.log(newObj);
newObj['b'] = 5;
console.log(newObj);
delete newObj.a;
console.log(newObj);

//  4
console.log('// 4');
let person = {};

person.name = "Иван";
person.lastName = "Иванов";
person.salary = 5000;

for (const property in person) {
  console.log(`${property}: ${person[property]}`);
}

// 5
console.log('// 5');
// let numbers = [0,1,2,3,4,5,6,7,8,9,10];

// for(const num in numbers){
//   console.log(typeof(num), num);
// }

// for (const num of numbers) {
//   console.log(typeof (num), num);
// }

// 6
console.log('// 6');
function Animal(name, kind){
  this.name = name;
  this.kind = kind;
}

const constructFunc = new Animal('Camel', 'Mammal');

console.log(constructFunc.name);
console.log(constructFunc.kind);
console.log(constructFunc);

// 7
console.log('// 7');
let string = "dsgergerthsrtg";

const sortFunc = str => { 
  let sortedStr = str.split('').sort().join(''); 
  console.log(sortedStr);
}

sortFunc(string);

// 8
console.log('// 8');
let numsArray = [345,2,66,32,1,4,90,897];

const srtFunc = arr => {
  let sorted = arr.sort();
  return sorted;
}

// 9
console.log('// 9');
const findIndex = (arr, el) => {
  for (let i = 0; i < arr.length - 1; i++) {
    if(el === arr[i]){
      return i;
    }
  }
}

console.log(`Index of number 90 is ${findIndex(numsArray, 90)}`);

// 10
console.log('// 10');
let twoDimArr = [[45,77,234,8],[1,4,6,7,3], [67,55,695,2]];

for (let subArr of twoDimArr) {
  console.log(...subArr);
  // console.log(subArr.join('') + '\n')
}

// 11
console.log('// 11');
let monthsArr = [
  [{'en': ['Jan','Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']}], 
  [{'ru' : ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь']}]
]

let monthFunc = (lang, m) => {
  if(lang === 'en'){
    console.log(monthsArr[0][0]['en'][m-1]);
  } else if (lang === 'ru') {
    console.log(monthsArr[1][0]['ru'][m - 1]);
  }
}
// 12
console.log('// 12');
let obj = {
  isJS: true,
  num: 666,
  string: 'Excelsior'
}

const cloneFunc = obj => {
  let cloneObj = {...obj};
  console.log('Clone Object:');
  return cloneObj;
}  

// 13
console.log('// 13');
let numsArr = [46, 67, 4, 345, 2389, 567];

const counterFunc = arr => {arr.reduce((a,b) => a + b, 0)};

// 14           Is it right???
console.log('// 14');
let newObjFunc = (protObj) => {
  let obj = {
    name: "",
    id: 1,
    surname: '',
    __proto__: protObj
  }
  return obj;
}

// 15
console.log('// 15');
let multiArr = [['word', 45, true], [77, 89, 'number']];

let unionFunc = arr => {
  let newArr = [];
  for(let el of arr){
    for(let i of el){
      newArr.push(i);
    }
  }
  return newArr;
}

console.log(unionFunc(multiArr));

// 17
console.log('// 17');

const human = {
  firstName: 'Иван', 
  lastName: 'Иванов', 
  years: 25 
};

const { naame = 'Иван', age = 25} = human;

console.log(naame, age);

// 18
console.log('// 18');
let week = ['Понедельник', 'Вторник', 'Среда'];

let [first, second, third] = week;
console.log(first);
console.log(second);
console.log(third);


// 19
console.log('// 19');
let somethingArr = ['test', true, 99];

let [test, truth, num] = somethingArr;
console.log(test, truth, num);

[test, truth, num] = [truth, test, num];
console.log(truth, test, num);

// 20
console.log('// 20');
let intsArray = [456,22,98,1536,44,879,3,6,8,3,9,768];

console.log(`Unsorted: ${intsArray}`);

let sorted = intsArray.sort((a, b) => a - b);

console.log(`Sorted: ${sorted}`);

// 21
console.log('// 21');
let myArray = ["name", 656, 343, false];

let newElFunc = (index, newEl) => {
  let newArr = myArray[index + 1] = newEl;
  return newArr;
}

newElFunc(3, true);
console.log(myArray);

// 22
console.log('// 22');
let massive = ['test', 65, false];
let data = {
  id: 43,
  name: 'name',
  age: 101
}

let copyObjFunc = obj => {
  let copyObj = Object.assign({}, obj);
  return copyObj;
}

let copyArrFunc = arr => {
  let copyArr = [...arr];
  return copyArr;
}

// 23
console.log('// 23');
let letters = ['a', 'b', 'c'];
let digits = [1, 2, 3];

let combinedArr = letters.concat(digits);
let combinedArrTwo = [...digits, ...letters];

console.log(combinedArr);
console.log(combinedArrTwo);



