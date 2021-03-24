const LPS = function (str) {
  // edgeCase
  if(str.length <= 1) {
    return 0;
  }

  let middle = parseInt(str.length / 2);

  if(str.length % 2 === 0) { // str의 길이가 짝수면
    let left = 0, right = str.length - 1;

    while(left < middle) {
      if(str[left] === str[right]) {
        left++;
        right--;
      } else {
        return left;
      }
    }
    return left;
  } else { // str의 길이가 홀수면
    let left = 0, right = middle + 1;

    while(right <= str.length - 1) {
      if(str[left] === str[right]) {
        left++;
        right++;
      } else {
        return left;
      }
    }
    return left;
  };
};

let output = LPS('abcab');
console.log(output); // --> 2

// let output = LPS('abbbcc');
// console.log(output); // --> 0

// output = LPS('aaaa');
// console.log(output); // --> 2
// // prefix: str.slice(0, 2)
// // suffix: str.slice(2)
// // non-overlapping 조건이 없는 경우 정답은 4 입니다.

// output = LPS('aaaaa');
// console.log(output); // --> 2
// prefix: str.slice(0, 2)
// suffix: str.slice(3)
// non-overlapping 조건이 없는 경우 정답은 5 입니다.