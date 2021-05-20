const { Given, When, Then, AfterAll } = require ('@cucumber/cucumber');
// const assert = require('assert');

const { Builder, By } = require('selenium-webdriver');
const driver = new Builder().forBrowser('chrome').build();



Given('I am on the Google homepage', async () => {
    await driver.get('https://www.google.com/');
    // return 'pending';
});

When('I search for {string}', async (string) => {
    // const element = await driver.findElement(By.name('q'));
    const element = await driver.findElement(By.id("q"));

    element.sendKeys(string, Key.RETURN);
    await (await driver).sleep(1000);
    // return 'pending';
});

Then('the page title is {string}', async (string) => {
    assert.equal(await driver.getTitle(), string);
    // return 'pending';
});

// AfterAll('end', async () => {
//     await driver.quit();
// })