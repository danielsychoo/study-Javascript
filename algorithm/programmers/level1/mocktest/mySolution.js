function solution(answers) {
  // 1. 각 찍는 순서대로 배열로
  let firstAbandoner = [1,2,3,4,5];
  let secondAbandoner = [2,1,2,3,2,4,2,5];
  let thirdAbandoner = [3,3,1,1,2,2,4,4,5,5];

  // 2. 입력되는 answers의 길이에 맞추어 extend하는 함수
  const extendAbandonerTool = function (tool) {
    // 몇 번 extend 해야 할지 (이때 answers보다 무조건 길어야 하므로 ceil로 올림)
    let times = Math.ceil(answers.length / tool.length)
    let extendTool = [];
    if(times !== 1) {
      for(let i = 0; i < times; i++) {
        extendTool = extendTool.concat(tool);
      }
    } else {
      return tool;
    }
    return extendTool
  };

  // 3. extend 실시
  firstAbandoner = extendAbandonerTool(firstAbandoner);
  secondAbandoner = extendAbandonerTool(secondAbandoner);
  thirdAbandoner = extendAbandonerTool(thirdAbandoner);

  // 4. 채점하는 함수
  let score = 0;
  let countStudents = 0;
  let resultBoard = [];
  const scoringFunction = function (student) {
    countStudents++; // 몇 번째 수포자인지 체크
    for(let i = 0; i < answers.length; i++) {
      if(answers[i] === student[i]) {
        score++;
      }
    }
    resultBoard.push([countStudents, score])
    score = 0; // 다음 채점을 위해 0으로 초기화
  };

  // 5. 채점실시
  scoringFunction(firstAbandoner);
  scoringFunction(secondAbandoner);
  scoringFunction(thirdAbandoner);

  // 6. score 순서로 sort
  resultBoard.sort( (a, b) => b[1] - a[1]);

  // 7. 결과도출
  let answer = [];
  if(resultBoard[0][1] !== resultBoard[1][1]) { // 1등이 혼자일 때
    answer.push(resultBoard[0][0]);
  } else if(resultBoard[0][1] === resultBoard[2][1]) { // 세 명 모두 동점일 때
    answer.push(1, 2, 3);
  } else { // 1, 2등만 동점일 때
    if(resultBoard[0][0] < resultBoard[1][0]) { // 수포자 번호순으로
      answer.push(resultBoard[0][0], resultBoard[1][0]);
    } else {
      answer.push(resultBoard[1][0], resultBoard[0][0]);
    }
  }
  return answer;
}