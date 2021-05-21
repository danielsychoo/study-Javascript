const { Given, When, Then } = require('@cucumber/cucumber');
const { Builder, By, Key } = require('selenium-webdriver');

Given('크롬브라우저로 구글에 접속', async () => {
    const driver = await new Builder().forBrowser('chrome').build();
    this.driver = driver;

    return driver.get('https://www.google.com');
});

When('검색창에 {string}을/를 검색', (searchingKeyword) => {
    return this.driver.findElement(By.name('q')).sendKeys(searchingKeyword, Key.ENTER);
});

Then('{string} 창으로 이동', async (matchKeyword) => {
    const title = await this.driver.getTitle();

    if(title !== matchKeyword) return 'error';
    else return;
});

Then('크롬브라우저 닫기', async () => {
    await this.driver.close();
    return;
});