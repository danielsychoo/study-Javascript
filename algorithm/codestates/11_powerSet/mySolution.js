/*
 * 1. 중복단어 제외
 * 2. 알파벳 순서 정렬 (사전식 순서)
 * 3. 빈 문자열 포함
 */
const powerSet = function (str) {
  // 정렬
  const sorted = str.split('').sort();

  // 중복 제거
  const deduplicated = sorted.reduce((acc, item) => {
    if (acc[acc.length - 1] === item) {
      return acc;
    } else {
      return acc.concat(item);
    }
  });

  let subSets = [];
  const pickOrNot = (idx, subset) => {
    // base case
    if (idx === deduplicated.length) {
      // 마지막 문자까지 검토한 경우
      subSets.push(subset);
      return;
    }

    // recursive case
    // idx번째 문자가 포함되지 않는 경우
    pickOrNot(idx + 1, subset);

    // idx번째 문자가 포함되는 경우
    pickOrNot(idx + 1, subset + deduplicated[idx]);
  };

  pickOrNot(0, '');

  return subSets.sort();
};

// let output1 = powerSet('abc');
// console.log(output1); // ['', 'a', 'ab', 'abc', 'ac', 'b', 'bc', 'c']

let output2 = powerSet('jjump');
console.log(output2); // ['', 'j', 'jm', 'jmp', 'jmpu', 'jmu', 'jp', 'jpu', 'ju', 'm', 'mp', 'mpu', 'mu', 'p', 'pu', 'u']