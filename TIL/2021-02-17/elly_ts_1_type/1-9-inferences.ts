{
  /**
   * Type Inference
   * type추론 자체는 별로 좋지 않다.
   * 왠만하면 type을 모두 직접 지정해주자
   */
  let text = 'hello';
  function print(message = 'hello') {
    console.log(message);
  }
  print('hello');

  function add(x:number, y:number): number {
    return x + y;
  }

  const result = add(1, 2);
}