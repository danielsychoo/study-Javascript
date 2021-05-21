const { Given, When, Then } = require('@cucumber/cucumber');
const { By, Key } = require('selenium-webdriver');

const loginToBizbox = (driver, bizboxPassword) => {
    
    Given('비즈박스 접속', async () => {
        return await driver.get('https://bizbox.twinny.io/gw/uat/uia/egovLoginUsr.do');
    });

    When('비즈박스 아이디 {string} 입력', async (id) => {
        this.id = id;
        return await driver.findElement(By.name('id')).sendKeys(id);
    });

    When('비즈박스 패스워드 입력 후 로그인', async () => {
        return await driver.findElement(By.name('password')).sendKeys(bizboxPassword, Key.ENTER);
    });

    Then('로그인 성공 비즈박스 홈으로 이동', async () => {
        const userInfoId = await driver.findElement(By.className('divi_txt')).getText();

        if(!userInfoId.includes(this.id)) throw new Error('error');
        else return;
    });
    
}

module.exports = loginToBizbox;