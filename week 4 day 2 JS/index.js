// 1

class Employee {
  constructor(name, age, salaryPerHour, hours){
    this.name = name;
    this.age = age;
    this.salPerHour = salaryPerHour;
    this.hours = hours;
  }
  getSalary() {
    return `${this.name}'s salary is ${this.salPerHour * this.hours}$ per day!`
  }
}

const firstEmployee = new Employee('John', 33, 25, 6);
const secondEmployee = new Employee('Dolores', 28, 33, 5);


// 2
class EmployeeTwo {
  #name;
  #age;
  #salPerHour;
  #hours;
  constructor(name, age, salaryPerHour, hours) {
    this.#name = name;
    this.#age = age;
    this.#salPerHour = salaryPerHour;
    this.#hours = hours;
  }

  set name(newName){return this.#name = newName;}
  set age(newAge){return this.#age = newAge;}
  set salPerHour(newSal){return this.#salPerHour = newSal;}
  set hours(newHours){return this.#hours = newHours;}

  get name() {return this.#name;}
  get age() {return this.#age;}
  get salPerHour() {return this.#salPerHour;}
  get hours() {return this.#hours;}
  get salary() {return this.#getSalary();}
  
  #getSalary() {
    return `${this.#name}'s salary is ${this.#salPerHour * this.#hours}$ per day!`
  }
}

const person = new EmployeeTwo('Kaleb', 45, 40, 8);


// 3
class ValidNum {
  constructor(num){
    this.number = num;
  }
  even(){
    return this.number % 2 === 0 ? true : false;
  }
  isInt(){
    return this.number % 1 === 0;
  }
  isFloat(){
    return this.number % 1 !== 0;
  }
  isPositive(){
    return this.number > 0;
  }
  isNegative(){
    return this.number < 0;
  }
}

const x = new ValidNum(5);
const y = new ValidNum(6);


// 4
class MyString {
  constructor(str){
    this.string = str;
  }
  capitalize(){
    const splitStr = this.string.split(' ');
    for (let i = 0; i < splitStr.length; i++) {
      splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
    }
    return this.string = splitStr.join(' ');
  }
  lowercase(){
    const splitStr = this.string.split(' ');
    for (let i = 0; i < splitStr.length; i++) {
      splitStr[i] = splitStr[i].charAt(0).toLowerCase() + splitStr[i].substring(1);
    }
    return this.string = splitStr.join(' ');
  }
  symbols(){
    const splitStr = this.string.split(' ');
    let allSymbls = 0
    for (let el of splitStr) {
      let symbols = el.length;
      allSymbls += symbols;
    }
    return allSymbls;
  }
}

const str = new MyString('my new string');

// 5
class AccountingEmployee extends Employee {
  work(){
    console.log("Yeah, I'm doing my job");
  }
}

const accEmloyee = new AccountingEmployee('Dora', 30, 30, 6);
console.log(accEmloyee.work());


// 6
class DOMElement {
  constructor(selector){
    this.selector = selector;
  }
  nodeText(text){
    return document.querySelector(`${this.selector}`).innerText = text;
  }
  nodeHtml(html){
    return document.querySelector(`${this.selector}`).innerHTML = html;
  }
  addNode(tag){
    return document.querySelector(`${this.selector}`).appendChild(document.createElement(tag))
  }
  addEndStr(str){
    const string = document.createTextNode(str);
    return document.querySelector(`${this.selector}`).appendChild(string);
  }
  addBegStr(str){
    const string = document.createTextNode(str);
    return document.querySelector(`${this.selector}`).prepend(string);
  }
  changeAttr(attr, text){
    return document.querySelector(`${this.selector}`).setAttribute(attr, text)
  }
  child(){
    return document.querySelector(`${this.selector}`).firstElementChild;
  }
  del(){
    return document.querySelector(`${this.selector}`).remove();
  }
}

const element = new DOMElement('.container');