const memo = [0, 1];
let fibonacci = function (n, memo) {
  if (memo[n] !== undefined) return memo[n];
  memo[n] = fibonacci(n - 1, memo) + fibonacci(n - 2, memo);
  return memo[n];
};