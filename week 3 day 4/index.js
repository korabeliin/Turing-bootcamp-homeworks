// 1
let firstObj = {
  a: 1,
  b: 2,
  c: 3
}

const keyValueFunc = obj => {
  let keys = Object.keys(obj)
  let val = Object.values(obj)
  for (let i = 0; i < keys.length; i++){
    console.log(`Key: ${keys[i]} - ${val[i]} :Value`)
  }
}

// 2
let secondObj = {
  word: 'hello',
  num: 666,
  bool: true
}

const getPropsFunc = obj => {
  return Object.getOwnPropertyNames(obj);
}

// 3
let firstArr = [1,2,3,4,5];
let secondArr = ['name', 'user', 'matrix'];
let thirdArr = [true, false]; 

let map = new Map();
map.set(firstArr, 'first').set(secondArr, 'second').set(thirdArr, 'third');

// 4
const objMap = map.keys();
for (let el of objMap) {
  console.log(el);
}

// 5
const setCollection = new Set();

setCollection.add(1).add(2).add(3);
console.log(setCollection);

// 6
const newSetColl = new Set([1,2,3]);

console.log(newSetColl.has(3));
console.log(newSetColl.has(4));

// 7
const massive = [45, 34, 45, true, true, 'string', 'name', 'string'];

const mySet = new Set(massive); //no duplicates!
console.log(mySet);

// 8
const myMap = new Map();
myMap.set('Monday', 'Понедельник').set('Tuesday', 'Вторник').set('Wednesday', 'Среда');
myMap.set('Thursday', 'Четверг').set('Friday', 'Пятница').set('Saturday', 'Суббота').set('Sunday', 'Воскресенье');
console.log(myMap);