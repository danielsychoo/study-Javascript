const { Given, When, Then } = require('@cucumber/cucumber');
const { By, Key } = require('selenium-webdriver');

const checkCucumberInReact = (driver) => {

    Given('크롬브라우저로 localhost 접속', async () => {
        return await driver.get('http://localhost:3000')
    });

    When('아이디에 {string} 입력', async (id) => {
        this.id = id;

        return await driver.findElement(By.name('id')).sendKeys(id);
    });

    When('비밀번호에 {string} 입력', async (password) => {
        this.password = password;

        return await driver.findElement(By.name('password')).sendKeys(password)
    });

    When('로그인 버튼 클릭', async () => {
        return await driver.findElement(By.name('loginBtn')).click();
    });

    Then('{string} 와 {string} 가 콘솔에 출력', (resultId, resultPassword) => {
        if(this.id === resultId && this.password === resultPassword) return console.log('All Pass');
        else return console.log('error');
    });

    Then('크롬브라우저 닫기', () => {
        driver.close();
    })
};

module.exports = checkCucumberInReact;