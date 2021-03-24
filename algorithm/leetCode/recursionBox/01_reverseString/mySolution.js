/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
  let left = 0;
  let right = s.length - 1;
  let middle = parseInt(s.length / 2);

  const recursive = function(arr) {
    // baseCase
    if(left === middle) {
      return;
    }

    let temp = arr[left];
    arr[left] = arr[right];
    arr[right] = temp;

    left ++;
    right --;
    recursive(arr);
  }
  recursive(s);
  console.log(s);
};

let s = ["h", "e", "l", "l", "o"];
reverseString(s);