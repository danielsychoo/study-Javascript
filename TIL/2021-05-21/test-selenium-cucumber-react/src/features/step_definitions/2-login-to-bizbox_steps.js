const { Given, When, Then, AfterAll, setDefaultTimeout } = require('@cucumber/cucumber');
const { Builder, By, Key } = require('selenium-webdriver');
require("chromedriver");

const all = (driver) => {
    const bizboxInfo = {
        id: process.env.BIZBOX_ID,
        password: process.env.BIZBOX_PASSWORD,
    };
    
    
    Given('크롬브라우저로 비즈박스 접속', async () => {
        // const driver = await new Builder().forBrowser('chrome').build();
        // this.driver = driver;
    
        return driver.get('https://bizbox.twinny.io/gw/uat/uia/egovLoginUsr.do');
    });
    
    When('아이디 입력', () => {
        return driver.findElement(By.name('id')).sendKeys(bizboxInfo.id);
    });
    
    When('패스워드 입력 후 로그인', () => {
        return driver.findElement(By.name('password')).sendKeys(bizboxInfo.password, Key.ENTER);
    });
    
    Then('로그인 성공 홈으로 이동', async () => {
        const userInfoId = await driver.findElement(By.className('divi_txt')).getText();
        
        if(!userInfoId.includes(bizboxInfo.id)) throw new Error('error');
        else return;
    });
}

module.exports = all;

