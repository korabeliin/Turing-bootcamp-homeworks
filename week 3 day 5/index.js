// *******************PART 1*******************
// 1
console.log('// 1');
const divContClassName = document.getElementsByClassName('container');
const divContQuery = document.querySelector('.container');
const divWithId = document.getElementById('main_container');
const divMainCont = document.querySelector('#main_container');

console.log(divContClassName);
console.log(divContQuery);
console.log(divWithId);
console.log(divMainCont);

// 2
const jsDiv = document.getElementById('jsDiv');
jsDiv.className = 'yeah';
jsDiv.classList.add('sweet');

// 3
const changeDiv = document.querySelector('.change');
changeDiv.style.width = '250px';  // Отличие в том что element.style меняет стили с помощью добавления атрибута в html файле
changeDiv.style.height = '250px';

// 4
const list = document.querySelectorAll('.list');
for(let i = 1; i < list.length; i+=2){
  list[i].style.backgroundColor = 'grey';
  list[i].style.fontWeight = 'bold';
}

// 5
console.log('// 5');

const inputValueFunc = inputId => {
  return document.querySelector(inputId).value;
}

console.log(inputValueFunc('#special-input'));

// 6
console.log('// 6');
const disableInputFunc = inputClass => {
  return document.querySelector(inputClass).disabled = true;
}

console.log(disableInputFunc('.input'));

// 7
const parentDiv = document.querySelector('.parent-div');
const span = document.createElement('span');
parentDiv.append(span.textContent = 'Lorem ipsum dolor sit amet.');
parentDiv.append(span.textContent = 'Lorem ipsum dolor sit amet.');

// 8
console.log('// 8');
const textFunc = (id, str) => {
  const element = document.getElementById(id);
  // return element.textContent = str;
  return element.innerHTML = str;
}

console.log(textFunc('par', 'SOME TEXT HERE'));

// 9
const section = document.querySelector('.parent-element');

section.firstElementChild.style.color = '#ae2012';

// 10
const firstPar = document.getElementById('firstPar');

firstPar.nextElementSibling.nextElementSibling.insertAdjacentText('beforeend', '!!!');

// *******************PART 2*******************

// 1
const clickButton = document.querySelector('.click-btn');

let counter = 0;
clickButton.onclick = () => {
  counter += 1;
  clickButton.innerHTML = `Click Counter: ${counter}`;
}

// 2
const scrollingPar = document.querySelector('.scroll-num')

window.addEventListener('scroll', () => {
  let scrollNum = window.scrollY;
  let flooredNum = Math.floor(scrollNum);
  scrollingPar.innerHTML = `Scrolling length: ${flooredNum} pixels`;
});

// 3
const tableNum = document.querySelectorAll('.number');

tableNum.forEach(el => {
  el.addEventListener('click', () => {
    let currentNum = el.innerHTML;
    el.innerHTML = currentNum ** 2;
  });
});

// 4
const superTable = document.querySelector('.super-table');

superTable.addEventListener("mouseover", function (event) {
  let target = event.target;

  if (target.tagName != 'TD') return;

  highlight(target);
});

let selectedTd;

function highlight(td) {
  if (selectedTd) { 
    selectedTd.classList.remove('highlight');
  }
  selectedTd = td;
  selectedTd.classList.add('highlight'); 
}

// 5
const validator = document.querySelector('.validation');

validator.addEventListener('focusout', (event) => {
  event.target.value === 'secretpass' ? alert('Yeah, come in!') : alert('Bullshit!!!');
});

// 6
const form = document.getElementById('form');

form.addEventListener('focus', (event) => {
  event.target.classList.add('focused');
}, true);

// 7
const deleteFunc = el => {
  let btn = el;
  btn.remove();
}

// 8