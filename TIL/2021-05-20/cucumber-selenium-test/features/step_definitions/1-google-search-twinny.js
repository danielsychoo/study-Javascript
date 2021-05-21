const { Given, When, Then } = require('@cucumber/cucumber');
const { By, Key } = require('selenium-webdriver');

const googleSearchTwinny = (driver) => {

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

}

module.exports = googleSearchTwinny;

