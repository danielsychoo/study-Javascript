/*
 *  O(logN)이 되려면 횟수가 절반씩 줄어야 함
 *
 *  2^8 (짝수)
 *  = 2^4 * 2^4
 *  = 2^2 * 2^2 * 2^2 * 2^2
 *
 *  2^9 (홀수)
 *  = 2 * 2^4 * 2^4
 *  = 2 * 2^2 * 2^2 * 2^2 * 2^2
 */
function power(base, exponent) {
  // baseCase
  if(exponent === 0) {
    return 1;
  }

  const halfExponent = Math.floor(exponent / 2); // 홀수처리를 위해 내림
  const recursive = power(base, halfExponent); // 재귀로 절반씩 들어감
  let result = recursive * recursive % 1000000009; // 점화식처럼 (위 주석 참조)

  if(exponent % 2 !== 0) {
    result = result * base % 1000000009; // 홀수는 base 한번 더 연산
  }
  return result;
}

let output = power(4, 15);
console.log(output); // --> 73741815

// let output = power(2, 10);
// console.log(output); // --> 1024


// function power(base, exponent) {
//   let result = 1;
//   const recursive = function(base, exponent) {
//     // baseCase
//     if(exponent === 0) {
//       return 1;
//     }
//     result *= base;
//     result %= 1000000009;
//     recursive(base, exponent - 1);
//   }
//   recursive(base, Math.floor(exponent / 2)); // 재귀 실행
//   result *= result; // 절반 돌았으므로 제곱
//   result %= 1000000009;
//
//   if(exponent % 2 !== 0) { // exponent가 홀수였으면
//     result *= base; // base 한번 더 곱함
//     result %= 1000000009;
//   }
//   return result;
// }