{
  /**
   * Let's make a game 🕹
   */

  const position = {
    x: 0,
    y: 0,
  };

  type Direction = 'up' | 'down' | 'left' | 'right';

  const move = (direction: Direction): void => {
    console.log(direction);

    switch (direction) {
      case 'up':
        position.y ++;
        break; // return이 없기 때문에 break를 안걸어주면 무조건 default까지 진행된다.
      case 'down':
        position.y --;
        break;
      case 'left':
        position.x --;
        break;
      case 'right':
        position.x ++;
        break;
      default:
        throw new Error('Unknown direction');
    }
  }

  console.log(position); // { x: 0, y: 0}
  move('up');
  console.log(position); // { x: 0, y: 1}
  move('down');
  console.log(position); // { x: 0, y: 0}
  move('left');
  console.log(position); // { x: -1, y: 0}
  move('right');
  console.log(position); // { x: 0, y: 0}
}
