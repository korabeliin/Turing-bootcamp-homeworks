// 1
let myFunc = (a,b,c) => {
  console.log(a,b,c);
}

// 2
let compareFunc = (firstNum, secNum) => {
  if (firstNum > secNum) {
    return 1;
  } else if (firstNum < secNum) {
    return -1;
  } else {
    return 0;
  }
}

// 3
let sum = (firstNum, secNum) => firstNum + secNum;   

let sub = (firstNum, secNum) => firstNum - secNum; 

let mult = (firstNum, secNum) => firstNum * secNum; 

let div = (firstNum, secNum) => firstNum / secNum; 

// 4

let helloFunc = (name = 'гость') => { console.log(`Здравствуйте, ${name}!`) };

// 5
let fib = n => n <= 1 ? n : fib(n - 1) + fib(n - 2);

let fibonacci = n => {
  if (n <= 1) {
    return n;
  } else {
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
}


