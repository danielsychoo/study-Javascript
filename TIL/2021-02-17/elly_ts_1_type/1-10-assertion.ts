{
  /**
   * Type Assertions 💩
   */
  function jsStrFunc(): any {
    return 2;
  }
  const result = jsStrFunc();
  // any지만 string이라는 것을 확신할때 아래와 같이 assertion
  console.log((result as string).length);
  console.log((<string>result).length);

  const wrong: any = 5;
  console.log((wrong as Array<number>).push(1)); // 💩

  function findNumbers(): number[] | undefined {
    return undefined;
  }
  const numbers = findNumbers();
  numbers!.push(2); // 💩
}