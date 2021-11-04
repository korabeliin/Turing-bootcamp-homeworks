'use strict'

// 1
const something = "my variable!";
alert(something);

// 2
let value = prompt();
alert(value);

// 3
let num = 3;
let str = "";
console.log(`переменная num содержит число 3 - число, не являющееся нулём является ${!!num} в JavaScript`);
console.log(`переменная str содержит "" - пустая строка, не содержащая пробел, является ${Boolean(str)} в JavaScript`);

// 4
let numOne = +prompt("Введите первое число:");
let numTwo = +prompt("Введите второе число:");
let sum = numOne + numTwo;
console.log(`Сумма чисел ${numOne} и ${numTwo} равна ${sum}!!!`);
alert(`Сумма чисел ${numOne} и ${numTwo} равна ${sum}!!!`);

// 5 
let a = +prompt("Число a:");
let b = +prompt("Число b:");
let mod = a % b;
console.log(`Остаток: ${mod}`);
alert(`Остаток: ${mod}`);

//6
// let pre = 1;
// let post = 6;
// console.log(`переменная pre была равна 1, а теперь ${++pre} - как мы видим число увеличилось на 1, нам вернули новое значение переменной`);
// console.log("******************************")
// console.log(`переменная post была равна 6 и в консоли мы получаем то же число: ${post++} - в данном случае число изменилось, но возвращается старое значение переменной`);
// console.log("******************************")
// console.log(`но если вызвать переменую post, то мы увидим новое значение`);
// console.log("******************************")
// console.log(`post = ${post}`);

// 7
let evenOdd = +prompt("Ваше число:");

if(evenOdd % 2 === 0) {
  alert("Поздравляю, ваше число удивительно просто делится на два!");
} else {
  alert("Ваше число нечётно, оно лишь наслаивает числовую пыль");
}

// 8
// console.log(`1 == '1' - двойное равенство не сравнивает типы данных, только содержимое, поэтому в данном случае JScript выдаст ${1 == '1'}, но если бы мы сравнили 1 =='2', был бы false, так как рознятся не только типы, но и содержимое`);
// console.log(`1 === '1' - ${1 === '1'}, потому что разные типы данных, в строгом сравнении число не равно строке в JS`);
// console.log(`0 == false - ${0 == false}, насколько я знаю 0 и 1 во многих языках программирования равны соответсвенно False и True`);
// console.log(`0 === false - ${0 === false}, при строгом сравнении в JS число не может равняться булевому значению`);

// 9
let el = 11;
let hello = "Hello";
let obj = { a: 1 };
let zero = null;
let f = false;

console.log(`${typeof (el)} 
${typeof (hello)}
${typeof (obj)}
${typeof (zero)} - it's a bug! null is a primitive value
${typeof (f)}`);

// 10
const A = 201;
console.log(`${A % 2 === 0 ? "even" : "odd"}`);

// 11
let logIn = prompt("Ваш логин:");
let pass = prompt("Ваш пароль:");

alert(`${logIn === "Duna" && pass === "Arrakis" ? "Вы успешно вошли в систему" : "Неверный логин или пароль"}`);
alert(`${logIn === "Duna" || pass === "Arrakis" ? "Вы успешно вошли в систему" : "Неверный логин или пароль"}`);

// 12
// let a = '30'; //в задании 5 тоже есть переменная a
// console.log(`!a даёт ${!a}, т.к. a изначально true, получается !! - отрицает отрицание и приводит к изначальному логическому типу!`);