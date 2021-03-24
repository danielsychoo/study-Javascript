const largestProductOfThree = function (arr) {
  // 수도코드 -> 경우의 수를 따져 edge만 제외
  arr.sort((a,b) => (b-a)); // 정렬 ㄱㄱ

  // 첫번째는 양수 두번째부터는 음수 <- 맨앞 * 맨뒤에서 둘
  if(arr[0] > 0 && arr[1] < 0) {
    return arr[0] * arr[arr.length-1] * arr[arr.length-2];
  }
  // 첫번째 양수보다 맨 뒤 음수 둘이 더 크면 <- 맨앞 * 맨뒤에서 둘
  if(arr[0] > 0 && arr[arr.length-2] < 0 && Math.abs(arr[0]) < Math.abs(arr[arr.length-2])) {
    return arr[0] * arr[arr.length-1] * arr[arr.length-2];
  }

  // edge외의 나머지 전부
  return arr[0] * arr[1] * arr[2];
}

let output = largestProductOfThree([2, 1, 3, 7]);
console.log(output); // --> 42 (= 2 * 3 * 7)

output = largestProductOfThree([-1, 2, -5, 7]);
console.log(output); // --> 35 (= -1 * -5* 7)