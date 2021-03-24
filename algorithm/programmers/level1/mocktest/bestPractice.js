function solution(answers) {
  var answer = [];
  // 1. 답안을 Array로 만들고
  var a1 = [1, 2, 3, 4, 5];
  var a2 = [2, 1, 2, 3, 2, 4, 2, 5]
  var a3 = [ 3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  // 2. filter로 answers중 답과 같은 값만 filtering
  // 이때, i % a1.length 를 하게 되면, 내 풀이 방법처럼 extend를 할 필요가 없이
  // a1.length가 지나가고 나면 다시 나머지로 0부터 시작된다
  var a1c = answers.filter((a,i)=> a === a1[i%a1.length]).length;
  var a2c = answers.filter((a,i)=> a === a2[i%a2.length]).length;
  var a3c = answers.filter((a,i)=> a === a3[i%a3.length]).length;
  var max = Math.max(a1c,a2c,a3c);
  // 이와같이 작성되면 어차피 순서가 1,2,3의 순서로 체크하기 때문에
  // sort가 구지 필요 없어진다.
  if (a1c === max) {answer.push(1)};
  if (a2c === max) {answer.push(2)};
  if (a3c === max) {answer.push(3)};

  return answer;
}