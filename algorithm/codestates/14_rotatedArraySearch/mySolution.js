/*
 * 0. binarySearch의 방법
 * 1. middle을 탐색 후 좌우 대소비교(?)
 * 2. index로 조정
 */

const rotatedArraySearch = function (rotated, target) {
  let left = 0;
  let right = rotated.length - 1;
  let count = 0;

  while (left <= right) {
    let middle = parseInt((right + left) / 2);

    if(rotated[middle] === target) {
      return count + middle;
    } else {
      rotated.splice(middle, 1);
      count ++;
    }
  }
  return -1
}

let output = rotatedArraySearch([9, 10, 15, 4, 6, 8], 9);
console.log(output); // --> 4

// let output = rotatedArraySearch([4, 5, 6, 0, 1, 2, 3], 2);
// console.log(output); // --> 5