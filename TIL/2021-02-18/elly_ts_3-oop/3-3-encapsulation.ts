{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };

  // public
  // private
  // protected
  class CoffeeMaker {
    // 속성 2가지
    private static BEANS_GRAMM_PER_SHOT: number = 7; // class level
    private coffeeBeans: number = 0; // instance (object) level

    // constructor
    private constructor(coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans; // 생성자 사용시 전달된 parameter
    }

    // constructor를 대신 할 수 있는 함수
    static MakeMachine(coffeeBeans: number): CoffeeMaker { // class level
      return new CoffeeMaker(coffeeBeans);
    }

    fillCoffeeBeans(beans: number) {
      if(beans < 0) {
        throw new Error('value for beans should be greater than 0');
      } else {
        this.coffeeBeans += beans;
      }
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

  const maker = CoffeeMaker.MakeMachine(32);
  maker.fillCoffeeBeans(32);

  class User {
    get fullName(): string {
      return `${this.firstName} ${this.lastName}`;
    }
    private internalAge = 4;

    get age(): number {
      return this.internalAge;
    }
    set age(num: number) {
      this.internalAge = num;
    }

    constructor(private firstName: string, private lastName: string) {
    }
  }
  const user = new User('Steve', 'Jobs');
  console.log(user.fullName);
  user.age = 6;
  console.log(user.fullName);
}