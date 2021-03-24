{
    // function calculate(calculate: Calculate, num1: number, num2: number): number {
    //   if(calculate === 'add') return num1 + num2;
    //   if(calculate === 'substract') return num1 - num2;
    //   if(calculate === 'multiply') return num1 * num2;
    //   if(calculate === 'divide') return num1 / num2;
    //   if(calculate === 'remainder') return num1 % num2;
    // }
    var calculate = function (command, num1, num2) {
        switch (command) {
            case 'add':
                return num1 + num2;
            case 'substract':
                return num1 - num2;
            case 'multiply':
                return num1 * num2;
            case 'divide':
                return num1 / num2;
            case 'remainder':
                return num1 % num2;
            default: // switch를 쓸때 마지막에는 default로 에러를 잡자
                throw new Error('Unknown command');
        }
    };
    console.log(calculate('add', 1, 3)); // 4
    console.log(calculate('substract', 3, 1)); // 2
    console.log(calculate('multiply', 4, 2)); // 8
    console.log(calculate('divide', 4, 2)); // 2
    console.log(calculate('remainder', 5, 2)); // 1
}
