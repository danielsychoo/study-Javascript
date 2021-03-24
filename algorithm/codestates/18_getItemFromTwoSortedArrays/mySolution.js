const getItemFromTwoSortedArrays = function (arr1, arr2, k) {
  const concatedArr = arr1.concat(arr2);
  concatedArr.sort((a, b) => (a - b));

  let left = 0;
  let right = concatedArr.length - 1;

  while(left <= right) {
    let middle = parseInt((left + right) / 2);

    if(middle === k) {
      return concatedArr[middle - 1];
    }

    if(k < middle) {
      right = middle;
    } else {
      left = middle;
    }
  }
  return -1;
};

let arr1 = [1, 4, 8, 10];
let arr2 = [2, 3, 5, 9];
let result = getItemFromTwoSortedArrays(arr1, arr2, 6);
console.log(result); // --> 8