const { setDefaultTimeout } = require('@cucumber/cucumber');
const { Builder, Capabilities } = require('selenium-webdriver');
require('chromedriver');

setDefaultTimeout(60 * 10000);

const checkCucumberInReact = require('./1-check-cucumber-inReact');

// deriver setup
const capabilities = Capabilities.chrome();
capabilities.set('chromeOptions', { "w3c": false });
const driver = new Builder().withCapabilities(capabilities).build();

checkCucumberInReact(driver);