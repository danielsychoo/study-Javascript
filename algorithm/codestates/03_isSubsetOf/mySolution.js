const isSubsetOf = function (base, sample) {
  // 1. base와 sample을 크기에 따라 정렬
  base = base.sort((a, b) => a - b);
  sample = sample.sort((a, b) => a - b);
  // EdgeCase 제거
  if (sample[0] > base[base.length - 1] || sample[sample.length - 1] < base[0]) {
    return false;
  }
  // 2. for loop을 이용해 전체 순회
  let result = false;
  for (let i = 0; i < sample.length; i++) {
    // 이때, i보다 앞에있는 n은 애초에 범위 밖이기에 n=i
    for (let n = i; n < base.length; n++) {
      if (sample[i] === base[n]) {
        result = true;
        break; // true면 멈추셈
      } else {
        result = false;
      }
    }
  }
  return result;
}

let base = [1, 2, 3, 4, 5];
let sample = [1, 3];
let output = isSubsetOf(base, sample);
console.log(output); // --> true

// sample = [6, 7];
// output = isSubsetOf(base, sample);
// console.log(output); // --> false

// let base = [10, 99, 123, 7];
// let sample = [11, 100, 99, 123];
// output = isSubsetOf(base, sample);
// console.log(output); // --> false