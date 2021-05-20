const { Given, When, Then } = require('@cucumber/cucumber');
const { assertThat, is } = require('hamjest');
const Person = require('../src/shouty');


// 기본적인 정의
// Given('Lucy is located/standing {int} meter(s) from Sean', (distance) => {
//     this.lucy = new Person;
//     this.sean = new Person;
//     // this.distance = distance;
//     this.lucy.moveTo(distance);
// });

// custom parameter를 이용한 정의
Given('{person} is located/standing {int} meter(s) from Sean', (Lucy, distance) => {
    this.lucy = new Person;
    this.sean = new Person;
    // this.distance = distance;
    this.lucy.moveTo(distance);
});

When('{person} shouts {string}', (Sean, message) => {
    this.sean.shout(message);
    this.message = message;
});

Then('{person} hears {person}\'s message', (Lucy, Sean) => {
    // assertThat(this.lucy.messagesHeard(this.distance), is([this.message]))
    assertThat(this.lucy.messagesHeard(), is(this.message))
});