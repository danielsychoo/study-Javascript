const memo = [0, 1, 2];
let tiling = function (n) {
  if(n === 1) {
    return 1;
  }
  if(n === 2) {
    return 2;
  }

  if(memo[n] === undefined) {
    memo[n] = tiling(n - 2) + tiling(n - 1);

  }
  // 설마 1, 2, 3, 5, 8, 13, ...
  return memo[n];
};
//memo[4] = memo[2] + memo[3]
//memo[4] = 2 + 1 + 2 = 5

//memo[5] = memo[3] + memo[4]
//memo[5] = memo[1] + memo[2] + memo[2] + memo[3]
//memo[5] = 1 + 2 + 2 + memo[1] + memo[2]
//memo[5] = 8




// let output = tiling(2);
// console.log(output); // --> 2

output = tiling(4);
console.log(output); // --> 5

/*
----------
1 a b c d e
2 a b c d e
----------
1 a a c c e
2 b b d d e
----------
1 a a c d e
2 b b c d e
----------
1 a b b d d
2 a c c e e
----------
1 a b c c e
2 a b d d e
----------
1 a b c d d
2 a b c e e
----------
 */


// 1 --> 1
// 2 --> 2
// 3 --> 3
// 4 --> 5
// 5 --> 8(?)

