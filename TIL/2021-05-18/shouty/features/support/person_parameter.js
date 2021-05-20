const { defineParameterType } = require('@cucumber/cucumber');
const Person = require('../../src/shouty');

defineParameterType({
    name: 'person', // person이라는 이름의 parameter
    regexp: /Lucy|Sean/, // 정규표현식으로 들어올 텍스트 정의
    transformer: name => new Person(name), // 자동으로 Person 인스턴스
})
