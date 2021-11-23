// 1
const clocksFunc = () => {
  const time = new Date()
  const hours = time.getHours();
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();

  const clocks = `${hours}:${minutes}:${seconds}`;
  document.querySelector('span').innerText = clocks;
  setTimeout(clocksFunc, 1000);
}

clocksFunc();

// 2
const secondsRemained = () => {
  const time = new Date()
  const hours = time.getHours();
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();

  const oneDaySeconds = 86400;
  const secRemained = `${oneDaySeconds - (hours * 3600 + minutes * 60 + seconds)}`;
  document.querySelector('.remained').innerText = secRemained;

  setTimeout(secondsRemained, 1000);
}

secondsRemained();
// setInterval(secondsRemained, 1000);

// 3
const input = document.querySelector('.timer-input');
const button = document.querySelector('.timer-button');
let span = document.querySelector('.timer-span');

const countdown = () => {
  if(span.innerText > 0) {
    span.innerText--;
  } else (
    clearInterval(intervalID)
  )
}

const startTimer = () => {
  span.innerText = +input.value
  intervalID = setInterval(countdown, 1000);
}

button.addEventListener('click', startTimer);

// 4
const randomNum = (firstNum, secondNum) => {
  firstNum = Math.floor(firstNum);
  secondNum = Math.ceil(secondNum);
  return Math.floor(Math.random() * (secondNum - firstNum) + firstNum);
}

// 5
// const fakeRequest = () => {
//   return new Promise((resolve) => setTimeout(() => {
//     resolve("It's OK!");
//     console.log('fakeRequest resolved');
//   }, 3000));
// }

// fakeRequest();


// 6 
// const fakeRequestTwo = () => {
//   return new Promise((resolve, reject) => setTimeout(() => {
//     reject("Error, something went wrong!");
//     console.log('fakeRequestTwo rejected');
//   }, 3000));
// }

// fakeRequestTwo();

// 7
// const randomNumPromise = () => {
//   return new Promise((resolve, reject) => {
//     const rand = Math.floor(Math.random() * 20 + 1);
//     setTimeout(() => {
//       if(rand < 10) {
//         resolve(`Number is: ${rand}, it's ok`);
//         console.log(`resolved - Number is: ${rand}, it's ok`)
//       } reject(`rejected error - Number is: ${rand}`);
      
//     }, 5000);
//   });
// } 

// 8
// randomNumPromise()
//   .then((res) => {
//     console.log('Request finished, num < 10.', res)
//   })
//   .catch((err) => {
//     console.log('Error, num >= 10.', err)
//   })

// 9 && // 10
const arr = [10, 9, 8, 2];

const even = (arr) => {
    const even = arr.filter(e => e % 2 === 0)
  console.log(even);
}

const sum = (arr) => {
    const sum = arr.reduce((x, y) => x + y);
    console.log(sum);
}
