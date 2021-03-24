{
  // Array
  const fruits: string[] = ['🍎', '🍌']; // 배열의 타입을 정하는 (아래의 이유로 더 추천 ✨)
  const scores: Array<number> = [1, 3, 4]; // 두 가지의 방법
  function printArray(fruits: readonly string[]) { /* readonly를 이용하기 위해서는 위 방법만 가능 */ }

  // Tuple (아래처럼 가독성이 떨어지기 때문에 추천하지 않음 💩)
  // 대신에 -> interface, type alias, class로 대체하여 사용 ✨
  let student: [string, number];
  student = ['name', 123];
  student[0] // name
  student[1] // 123
  const [name, age] = student;

}
