{
    var CoffeeMaker_1 = /** @class */ (function () {
        // constructor
        function CoffeeMaker(coffeeBeans) {
            this.coffeeBeans = 0; // instance (object) level
            this.coffeeBeans = coffeeBeans; // 생성자 사용시 전달된 parameter
        }
        // constructor를 대신 할 수 있는 함수
        CoffeeMaker.MakeMachine = function (coffeeBeans) {
            return new CoffeeMaker(coffeeBeans);
        };
        // function
        CoffeeMaker.prototype.makeCoffee = function (shots) {
            if (this.coffeeBeans < shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT) {
                throw new Error('Not enough coffee beans!');
            }
            this.coffeeBeans -= shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT;
            return {
                shots: shots,
                hasMilk: false
            };
        };
        // 속성 2가지
        CoffeeMaker.BEANS_GRAMM_PER_SHOT = 7; // class level
        return CoffeeMaker;
    }());
    var maker = new CoffeeMaker_1(32);
    console.log(maker);
    var maker2 = new CoffeeMaker_1(14);
    console.log(maker2);
    var maker3 = CoffeeMaker_1.MakeMachine(10);
    console.log(maker3);
}
