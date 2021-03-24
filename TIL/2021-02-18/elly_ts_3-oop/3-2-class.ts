{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };

  class CoffeeMaker {
    // 속성 2가지
    static BEANS_GRAMM_PER_SHOT: number = 7; // class level
    coffeeBeans: number = 0; // instance (object) level

    // constructor
    constructor(coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans; // 생성자 사용시 전달된 parameter
    }

    // constructor를 대신 할 수 있는 함수
    static MakeMachine(coffeeBeans: number): CoffeeMaker { // class level
      return new CoffeeMaker(coffeeBeans);
    }

    // function
    makeCoffee(shots: number): CoffeeCup {
      if(this.coffeeBeans < shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT) {
        throw new Error('Not enough coffee beans!');
      }

      this.coffeeBeans -= shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT;
      return {
        shots: shots,
        hasMilk: false,
      };
    }
  }

  const maker = new CoffeeMaker(32);
  console.log(maker);
  const maker2 = new CoffeeMaker(14);
  console.log(maker2);

  const maker3 = CoffeeMaker.MakeMachine(10);
  console.log(maker3);
}