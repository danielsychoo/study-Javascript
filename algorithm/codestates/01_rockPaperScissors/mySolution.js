const rockPaperScissors = function (count) {
  // parameter가 입력되면 count = count, 없으면 count = 3
  count = count || 3;
  // 1. 경우의 수를 모두 담은 array
  const rpsExample = ["rock", "paper", "scissors"];
  const result = [];
  // 2. recursion function
  let playGames = function (round, gameBoard) {
    for(let i = 0; i < rpsExample.length; i++) {
      let currentRps = rpsExample[i];
      // baseCase
      if(round === 0) {
        result.push(gameBoard);
        return;
      }
      // gameBoard에 currentRps를 concat
      playGames(round - 1, gameBoard.concat(currentRps));
    }
  }
  // 처음에 gameBoard를 []로 지정
  playGames(count, []);
  return result;
}

console.log(rockPaperScissors());