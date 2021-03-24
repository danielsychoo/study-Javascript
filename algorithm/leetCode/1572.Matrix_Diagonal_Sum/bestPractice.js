var diagonalSum = function(mat) {
  const matLength = mat.length;
  let sum = 0;
  // for문을 돌면서 해당 줄의 해당 Index를 더함 (같은 줄의 뒤에서도 빼줌)
  for (let i = 0; i < matLength; i++) {
    sum += mat[i][i] + mat[i][matLength - 1 - i];
  }
  // 중앙 값이 있다면 (length가 홀수라면)
  if (matLength % 2 === 1) {
    const mid = Math.floor(matLength / 2);
    sum -= mat[mid][mid]; // 중앙 값이 두 번 더해졌으므로 빼줌
  }

  return sum;
};