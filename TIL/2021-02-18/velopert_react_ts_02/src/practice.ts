// ? TS 속 기본 타입 정의 ----------------
let count = 0; // 숫자
count += 1;
// ! count = '갑분 문자열'; // 이러면 에러가 납니다!

const message: string = 'hello world'; // 문자열
const done: boolean = true; // 불리언 값
const numbers: number[] = [1, 2, 3]; // 숫자 배열
const messages: string[] = ['hello', 'world']; // 문자열 배열

// ! messages.push(1); // 숫자를 넣으려고 하면.. 안된다!

// let mightBeUndefined: string | undefined = undefined; // string 일 수도 있고 undefined 일 수도 있음
// let nullableNumber: number | null = null; // number 일 수도 있고 null 일 수도 있음
//
// let color: 'red' | 'orange' | 'yellow' = 'red'; // red, orange, yellow 중 하나임
// color = 'yellow';
// ! color = 'green'; // 에러 발생!

// ? TS 속 함수에서 타입 정의 -----------------
function sum(x: number, y: number): number {
  return x + y;
}
sum(1, 2);

function sumArray(numbers: number[]): number {
  return numbers.reduce((acc, cur) => acc + cur, 0);
}

const total = sumArray([1, 2, 3, 4, 5]);

// ? interface 사용해보기 ------------------
// Shape 라는 interface를 선언합니다.
interface Shape {
  getArea(): number; // Shape interface에는 getArea라는 함수가 꼭 있어야 하며 해당 함수의 반환값은 숫자입니다.
}

class Circle implements Shape {
  // 'implements' 키워드를 사용하여 해당 클래스가 Shape interface의 조건을 충족하겠다는 것을 명시합니다.
  constructor(public radius: number) {
    this.radius = radius;
  }

  // 너비를 가져오는 함수를 구현합니다.
  getArea() {
    return this.radius * this.radius * Math.PI;
  }
}

class Rectangle implements Shape {
  constructor (private width: number, private height: number) {
    this.width = width;
    this.height = height;
  }
  getArea() {
    return this.width * this.height;
  }
}

const circle = new Circle(5);
const rectangle = new Rectangle(10, 5);
console.log(circle.radius);
// ! console.log(rectangle.radius); // private이기에 오류

const shapes: Shape[] = [new Circle(5), new Rectangle(10, 5)];
shapes.forEach(shape => {
  console.log(shape.getArea());
});

// ? 일반 객체를 interface로 타입 설정하기
// interface Person {
//   name: string;
//   age?: number // ? 는, 설정을 헤도 되고 안해도 되는 값이라는 의미
// }
//
// interface Developer extends Person {
//   skills: string[];
// }
//
// const person: Person = {
//   name: '김사람',
//   age: 20
// }
//
// const expert: Developer = {
//   name: '김개발',
//   skills: ['javascript', 'react']
// }
//
// const people: Person[] = [person, expert];

// ? Type Alias 사용하기
type Person = {
  name: string;
  age?: number; // 물음표가 들어갔다는 것은, 설정을 해도 되고 안해도 되는 값이라는 것을 의미
}

// ? & 는 Intersection으로서 두 개 이상의 타입들을 합쳐줍니다.
type Developer = Person & {
  skills: string[];
}

const person: Person = {
  name: '김사람'
};

const expert: Developer = {
  name: '김개발',
  skills: ['javascript', 'react']
};

type People = Person[]; // Person[] 를 이제 앞으로 People 이라는 타입으로 사용 할 수 있습니다.
const people: People = [person, expert];

type Color = 'red' | 'orange' | 'yellow';
const color: Color = 'red';
const colors: Color[] = ['red', 'orange'];