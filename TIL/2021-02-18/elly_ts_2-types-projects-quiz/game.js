{
    /**
     * Let's make a game 🕹
     */
    var position_1 = {
        x: 0,
        y: 0
    };
    var move = function (direction) {
        console.log(direction);
        switch (direction) {
            case 'up':
                position_1.y++;
                break; // return이 없기 때문에 break를 안걸어주면 무조건 default까지 진행된다.
            case 'down':
                position_1.y--;
                break;
            case 'left':
                position_1.x--;
                break;
            case 'right':
                position_1.x++;
                break;
            default:
                throw new Error('Unknown direction');
        }
    };
    console.log(position_1); // { x: 0, y: 0}
    move('up');
    console.log(position_1); // { x: 0, y: 1}
    move('down');
    console.log(position_1); // { x: 0, y: 0}
    move('left');
    console.log(position_1); // { x: -1, y: 0}
    move('right');
    console.log(position_1); // { x: 0, y: 0}
}
