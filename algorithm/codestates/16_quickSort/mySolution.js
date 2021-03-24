/*
 * 퀵 정렬은 분할 정복 방법을 통해 리스트를 정렬한다. (위키백과)
 * 1. 리스트 가운데서 하나의 원소를 고른다. (일반적으로 좌측)
 * 2. 피벗 앞에는 피벗보다 값이 작은 모든 원소들이 오고, 피벗 뒤에는 피벗보다 값이 큰 모든 원소들이 오도록 피벗을 기준으로 리스트를 둘로 나눈다.
 * 3. 분할 된 두 개의 작은 리스트에 대해 재귀적으로 이 과정을 반복한다.
 * 4. baseCase는 리스트의 크기가 0이나 1이 될 때까지 이다.
 */
const quickSort = function (arr) {
  // TODO: 여기에 코드를 작성합니다.
  
  let count = 0;
  const recursive = function(arr) {
    let left = 0, right = arr.length - 1;
    // baseCase
    if(count === right) {
      return;
    }

    while(left < right) {
      if(arr[left] > arr[left + 1]) {
        let temp = arr[left];
        arr[left] = arr[left + 1];
        arr[left + 1] = temp;
      }
      left++;
    }
    count++;
    recursive(arr);
  }
  recursive(arr);
  return arr;
}


// let output = quickSort([3, 1, 21]);
// console.log(output); // --> [1, 3, 21]

let output = quickSort([5, 4, 3, 2, 1]);
console.log(output); // --> [1, 2, 3, 4, 5]