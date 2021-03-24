const isSubsetOf = function (base, sample) {
  // 1. base와 sample 순서대로 정렬
  base.sort((a, b) => a - b);
  sample.sort((a, b) => a - b);
  // 2. 같은지 확인하기 위한 function 생성
  const findItemInSortedArr = (item, arr, from) => {
    for (let i = from; i < arr.length; i++) {
      if (item === arr[i]) return i;
      else if (item < arr[i]) return -1;
    }
    return -1;
  };
  // 3. sample을 전부 확인하기 위한 for loop
  let baseIdx = 0;
  for (let i = 0; i < sample.length; i++) {
    // 0부터 싹 돌다가 찾으면 index를 못찾으면 -1을 return 하는 함수이므로
    // 그 결과가 -1이면 false, 아니면 true
    baseIdx = findItemInSortedArr(sample[i], base, baseIdx);
    if (baseIdx === -1) return false;
  }
  return true;
};