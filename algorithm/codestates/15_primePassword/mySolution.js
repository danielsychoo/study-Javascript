/*
 * 1. for-loop 을 이용해 각 index 별로 수정 (한개씩만 바꿔야 하므로)
 * 2. 소수인지 판별
 * 3. 이거 백트랙킹이 필요한지.. 만약 그렇다면 recursive
 */

const primePassword = (curPwd, newPwd) => {
  // edgeCase
  if (curPwd === newPwd) {
    return 0;
  }
  let count = 0;
  let splitCurPwd = String(curPwd).split('');
  let splitNewPwd = String(newPwd).split('');
  while(curPwd !== newPwd) {
    for(let index = 3; index >= 0; index --) { // 1의자리부터 각 자리수 확인
      for(let value = 0 ; value < 9; value ++) {
        splitCurPwd[index] = value;
        if(splitCurPwd[index] === splitNewPwd[index]) {
          break;
        }

        if(isPrime(Number(splitCurPwd.join('')))) {
          count ++;
        }
      }
    }
  }
  return count;
  // 1. 각 자리수 비교하여
  // 2. 마지막 자리수 ++ 하며 소수인지 확인
  // 3. 소수이면 10자리 ??
}

//소수판별 함수
const isPrime = function(n) {
  if (n % 2 === 0) {
    return false;
  }
  let divisor = 3;
  let limit = Math.sqrt(n);
  while (limit >= divisor) {
    if (n % divisor === 0) {
      return false;
    }
    divisor += 2;
  }
  return true;
}

// let output = primePassword(1033, 1033);
// console.log(output); // --> 0

output = primePassword(3733, 8779);
console.log(output); // --> 3 (3733 -> 3739 -> 3779 -> 8779)