/*
 * 삽입정렬(insertion sort)은 자료 배열의 모든 요소를
 * 앞에서부터 차례대로 이미 정렬된 배열 부분과 비교하여,
 * 자신의 위치를 찾아 삽입함으로써 정렬을 완성하는
 * 알고리즘이다.
 * K번째 반복 후의 결과 배열은, 앞쪽 k + 1항목이 정렬된 상태이다.
 * (위키백과)
 *
 * 1. arr[1] 부터 check. (arr[0]부터 기준점 잡을 필요 X)
 * 2. for loop으로 기준점 이전을 싹 대소비교
 * 3. 위치변경.. splice를 이용해야 하려나 ?
 * 4. advanced를 생각하면 빈배열에 받아야 하므로 splice 필요 없을 듯
 * 5. 빈배열을 parameter로 넣으려면 재귀가 맞지 않을까 싶은데..
 */
const insertionSort = function (arr, callback = (item) => item) {
  let result = [arr[0]];
  arr.shift();

  const recursive = (arr) => {
    // baseCase
    if(arr.length === 0) {
      return;
    }

    for(let i = 0; i < result.length; i++) {
      let currentNum = arr[0];
      if (callback(arr[i]) > currentNum) {
        result.splice(i, 0, currentNum); // 해당위치에 추가
        break;
      }

      if(i === result.length - 1) {
        result.push(arr[0]);
        break;
      }
    }
    arr.shift();
    recursive(arr);
  }
  recursive(arr);
  return result;
};

// let output = insertionSort([3, 1, 21]);
// console.log(output); // --> [1, 3, 21]

// let output = insertionSort([1, 2, 43, 100, 21]);
// console.log(output); // --> [1, 2, 21, 43, 100]

let output = insertionSort([20, -10, -11, 2, 29]);
console.log(output); // --> [-11, -10, 2, 20, 29]

// const insertionSort = function (arr) {
//   let result = [arr[0]];
//   arr.shift();
//
//   const recursive = (arr) => {
//     // baseCase
//     if(arr.length === 0) {
//       return;
//     }
//
//     for(let i = 0; i < result.length; i++) {
//       let currentNum = arr[0];
//       if (result[i] > currentNum) {
//         result.splice(i, 0, currentNum); // 해당위치에 추가
//         break;
//       }
//
//       if(i === result.length - 1) {
//         result.push(arr[0]);
//         break;
//       }
//     }
//     arr.shift();
//     recursive(arr);
//   }
//   recursive(arr);
//   return result;
// };