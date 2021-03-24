const bubbleSort = function (arr) {
  let smallerEl = 0;
  let biggerEl = 0;
  for(let i = 0; i < arr.length; i++) {
    let count = 0; // 시간단축용
    for(let n = 0; n < arr.length; n++) {
      if(arr[n] > arr[n + 1]) {
        count++;
        smallerEl = arr[n + 1];
        biggerEl = arr[n];
        arr[n] = smallerEl;
        arr[n + 1] = biggerEl;
      }
    }
    if(count === 0) return arr; // 단축실시!!!
  }
  return arr;
}


let output = bubbleSort([5, 4, 3, 2, 1]);
console.log(output); // --> [1, 2, 3, 4, 5]