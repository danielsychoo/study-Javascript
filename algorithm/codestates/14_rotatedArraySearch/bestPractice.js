const rotatedArraySearch = function (rotated, target) {
  let left = 0,
    right = rotated.length - 1;

  while (left <= right) {
    let middle = parseInt((right + left) / 2);

    if (rotated[middle] === target) {
      return middle;
    }

    if (rotated[left] < rotated[middle]) {
      // 왼쪽 절반이 정렬되어 있는 상태
      if (target < rotated[middle] && rotated[left] <= target) {
        right = middle - 1;
      } else {
        left = middle + 1;
      }
    } else {
      // 오른쪽 절반이 정렬되어 있는 상태
      if (target <= rotated[right] && rotated[middle] < target) {
        left = middle + 1;
      } else {
        right = middle - 1;
      }
    }
  }

  return -1;
};

let output = rotatedArraySearch([9, 10, 15, 4, 6, 8], 6);
console.log(output); // --> 4