{
  /**
   * Enum
   */
  // JavaScript 💩
  const MAX_NUM = 6;
  const MAX_STUDENTS_PER_CLASS = 10;
  const MONDAY = 0;
  const TUESDAY = 1;
  const WEDNESDAY = 2;
  // Object.freeze()로 하면 한번 정의 후 수정이 안되게 할 수 있다.
  const DAYS_ENUM = Object.freeze({ "MONDAY": 0, "TUESDAY": 1, "WEDNESDAY": 2 });
  const dayOfToday = DAYS_ENUM.MONDAY;

  // TypeScript (그러나 TS에서는 가능한한 쓰지 말아야 할 enum)
  enum Days {
    Monday = 1,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday
  }
  console.log(Days.Monday);
  let day = Days.Saturday;
  day = Days.Tuesday;
  day = 10; // ! TS에서 enum을 쓰지 말아야 할 이유
  console.log(day);

  // ? 그렇다면 어떻게 해야 할까?
  type DaysOfWeek = 'Monday' | 'Tuesday' | 'Wednesday' | 'Thursday' | 'Friday' | 'Saturday' | 'Sunday';
  let dayOfweek: DaysOfWeek = 'Monday';
  dayOfweek = 'Wednesday';
}