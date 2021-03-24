{
  /**
   * Type Aliases
   * type을 custom해서 쓸 수 있고,
   * 이때 객체자체를 custom할 수도 있음
   */
  type Text = string;
  const name: Text = 'daniel';
  const address: Text = 'korea';

  type Num = number;
  type Student = {
    name: string,
    age: number,
  }
  const student: Student = {
    name: 'daniel',
    age: 12,
  }
  console.log(student);

  /**
   * String Literal Types
   * type에 Literal 자체를 할당시켜서 (강제로)
   * 이 type을 따라가면 무조건 해당 Literal이 나와야만 하게 만듬
   * (왜 쓰는지는 다음 강의에서 보기로 함)
   */
  type Name = 'name';
  let danielName: Name;
  danielName = 'name';
  type JSON = 'json'
  const json: JSON = 'json';

  type Boal = true;
}