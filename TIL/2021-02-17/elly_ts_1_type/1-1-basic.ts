{
  /**
   * Javascript
   * Primitive: number, string, boolean, bigint, symbol, null, undefined
   * Object: function, array.....
   */

  // * number
  const num: number = -6;

  // * string
  const str: string = 'hello';

  // * boolean
  const boal: boolean = false;

  // * undefined <- 값이 있는지 없는지 불분명
  let name: undefined; // 💩
  let age: number | undefined;
  age = undefined;
  age = 1;

  function find(): number | undefined {
    return undefined;
  };

  // ? null <- 분명하게 값이 비어있음
  let person: null; // 💩
  let person2: string | null;

  // ! unknown <- 어떤 타입인지 알 수 없으므로 다들어감 // 💩
  let notSure: unknown = 0;
  notSure = 'he';
  notSure = true;

  // ! any <- 어떤 타입이든 담을 수 있음 // 💩
  let anything: any = 0;
  anything = 'hello';

  // ? void <- 함수에서 아무것도 리턴하지 않음
  function print(): void {
    console.log('hello');
    return;
  }

  let unusable: void = undefined; // 💩

  // ? never <- 구지 사용한다면 에러처리시 사용
  function throwError(message: string): never {
    // message -> server (log)
    throw new Error(message);
    while (true) {}
  }

  // ! object
  let obj: object; // 💩
  function acceptSomeObject(obj: object) {

  }
  acceptSomeObject({ name: 'ellie' });
  acceptSomeObject({ animal: 'dog' });
}