const LPS = function (str) {
  if (str.length < 2) return 0;

  // 문자열을 두 부분으로 나누고
  // 각 부분의 첫 인덱스를 저장
  let leftIdx = 0;
  // 문자열의 길이가 홀수일 수 있으므로, 올림한다.
  let rightIdx = Math.ceil(str.length / 2);

  while (rightIdx < str.length) {
    // LPS 검사를 시작한 위치부터 지금까지 계속 같은 경우
    // 다음 문자도 같은지 확인하기 위해 인덱스를 이동한다.
    if (str[leftIdx] == str[rightIdx]) {
      leftIdx++;
      rightIdx++;
    } else if (leftIdx == 0) {
      // 아직 LPS를 찾지 못한 경우
      // 다음 길이(더 짧은 길이)의 LPS를 검사한디
      // 테스트 케이스 예: 'aaabbccaaaab'
      rightIdx++;
    } else {
      // leftIdx가 j이고 rightIdx가 k라 가정
      // j, k > 0 이고, j <= k
      // 최소 길이 j의 LPS를 찾은 상황
      // 아래와 같은 경우 처음부터 다시 LPS를 찾을 필요가 없다.
      // 왼쪽 부분이 'aaab...'이고, 오른쪽 부분이 'aaaa...'인 경우,
      // 첫 불일치가 발생한 상황(leftIdx, rightIdx 모두 3)에서
      // 첫 세 개의 a를 재활용할 수 있다.
      // 테스트 케이스 예: 'aaabbcaaaaab'
      leftIdx--;
    }
  }

  // LPS가 없는 경우
  return leftIdx;
};