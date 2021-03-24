"use strict";
// ? TS 속 기본 타입 정의 ----------------
let count = 0; // 숫자
count += 1;
// ! count = '갑분 문자열'; // 이러면 에러가 납니다!
const message = 'hello world'; // 문자열
const done = true; // 불리언 값
const numbers = [1, 2, 3]; // 숫자 배열
const messages = ['hello', 'world']; // 문자열 배열
// ! messages.push(1); // 숫자를 넣으려고 하면.. 안된다!
let mightBeUndefined = undefined; // string 일 수도 있고 undefined 일 수도 있음
let nullableNumber = null; // number 일 수도 있고 null 일 수도 있음
let color = 'red'; // red, orange, yellow 중 하나임
color = 'yellow';
// ! color = 'green'; // 에러 발생!
// ? TS 속 함수에서 타입 정의 -----------------
function sum(x, y) {
    return x + y;
}
sum(1, 2);
function sumArray(numbers) {
    return numbers.reduce((acc, cur) => acc + cur, 0);
}
const total = sumArray([1, 2, 3, 4, 5]);
class Circle {
    // 'implements' 키워드를 사용하여 해당 클래스가 Shape interface의 조건을 충족하겠다는 것을 명시합니다.
    constructor(radius) {
        this.radius = radius;
        this.radius = radius;
    }
    // 너비를 가져오는 함수를 구현합니다.
    getArea() {
        return this.radius * this.radius * Math.PI;
    }
}
class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
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
const shapes = [new Circle(5), new Rectangle(10, 5)];
shapes.forEach(shape => {
    console.log(shape.getArea());
});
