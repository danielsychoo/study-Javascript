const balancedBrackets = function (str) {
  const compareArr = '(){}[]'; // 오픈 0 2 4, 클로즈 1 3 5
  // edgeCase
  if(str === '') return true;
  if(str.length % 2 !== 0) return false;

  const storage = [];

  for(let i = 0; i < str.length; i++) {
    let compareIdx = compareArr.indexOf(str[i])
    if(compareIdx % 2 === 0) {
      storage.push(compareIdx + 1)
    } else {
      if(storage.pop() !== compareIdx) return false
    }
  }
  if(storage.length === 0) return true;
};


// let output = balancedBrackets('[](){}');
// console.log(output); // --> true

output = balancedBrackets('(())()(())');
console.log(output); // --> true

// let output = balancedBrackets('[(]{)}');
// console.log(output); // --> false


// const balancedBrackets = function (str) {
//   // edgeCase
//   if(str === '') {
//     return true;
//   }

//   let countR = 0; // () round 카운트 
//   let countC = 0; // {} curly 카운트
//   let countS = 0; // [] square 카운트
//   for(let i = 0 ; i < str.length; i++) {
//     // round 기준
//     if(str[i] === '(') {
//       countR++;
//     }
//     if(str[i] === ')' && countR <= 0) {
//       return false;
//     } else if(str[i] === ')') {
//       countR--;
//     }

//     // curly 기준
//     if(str[i] === '{') {
//       countC++;
//     }
//     if(str[i] === '}' && countC <= 0) {
//       return false;
//     } else if(str[i] === '}') {
//       countC--;
//     }

//     //square 기준
//     if(str[i] === '[') {
//       countS++;
//     }
//     if(str[i] === ']' && countS <= 0) {
//       return false;
//     } else if(str[i] === ']') {
//       countS--;
//     }
//   }
//   if(countR + countC + countS === 0) {
//     return true;
//   } else {
//     return false;
//   }
// };