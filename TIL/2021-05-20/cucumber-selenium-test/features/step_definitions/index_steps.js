const { setDefaultTimeout, AfterAll } = require('@cucumber/cucumber');
const { Builder, Capabilities } = require('selenium-webdriver');
require('chromedriver');
require('dotenv').config();

// 인터넷 불안정으로 timeout 오류가 뜨지 않도록 시간 늘려놓음
setDefaultTimeout(60 * 1000);

// 입력할 비밀번호의 경우 dotenv로 뺌
const envUserInfo = {
    bizboxPassword: process.env.BIZBOX_PASSWORD,
    googlePassword: process.env.GOOGLE_PASSWORD,
};

// 각 steps들 모음
const googleSearchTwinny = require('./1-google-search-twinny');
const loginToBizbox = require('./2-login-to-bizbox');
const checkGoogleSchedule = require('./3-check-google-schedule');


// driver setup
const capabilities = Capabilities.chrome();
capabilities.set('chromeOptions', { "w3c": false, "excludeSwitches": ["disable-popup-blocking"] });
const driver = new Builder().withCapabilities(capabilities).build();

// 각 시나리오 테스트 실시
googleSearchTwinny(driver); // 첫 번째 시나리오
loginToBizbox(driver, envUserInfo.bizboxPassword); // 두 번째 시나리오
checkGoogleSchedule(driver, envUserInfo.googlePassword); // 세 번째 시나리오