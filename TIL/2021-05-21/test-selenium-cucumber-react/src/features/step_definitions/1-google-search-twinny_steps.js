const { Given, When, Then, setDefaultTimeout } = require('@cucumber/cucumber');
const { Builder, By, Capabilities, Key } = require('selenium-webdriver');
require("chromedriver");

const all = require('./2-login-to-bizbox_steps');

setDefaultTimeout(60 * 1000);

// driver setup
const capabilities = Capabilities.chrome();
capabilities.set('chromeOptions', { "w3c": false });
const driver = new Builder().withCapabilities(capabilities).build();

Given('크롬브라우저로 구글에 접속', async () => {

    return await driver.get('https://www.google.com');
});

When('검색창에 {string}을/를 검색', async (searchingKeyword) => {
    return await driver.findElement(By.name('q')).sendKeys(searchingKeyword, Key.ENTER);
});

Then('{string} 구글 검색결과 창으로 이동', async (matchKeyword) => {
    const title = await driver.getTitle();

    if(title !== matchKeyword) throw new Error('error');
    else return;
});

all(driver);

// AfterAll('크롬브라우저 닫기', async () => {
//     await driver.close();
//     return;
// });


