// 메모이제이션용 배열은 따로 빼주고
let memo = [0, 1];
function fibonacci(n) {
  // memo 배열이 없으면
  if(memo[n] === undefined) {
    memo[n] = fibonacci(n - 2) + fibonacci(n - 1);
  }

  return memo[n];
};

// let output = fibonacci(0);
// console.log(output); // --> 0

// let output = fibonacci(1);
// console.log(output); // --> 1

let output = fibonacci(5);
console.log(output); // --> 5

// let output = fibonacci(9);
// console.log(output); // --> 34