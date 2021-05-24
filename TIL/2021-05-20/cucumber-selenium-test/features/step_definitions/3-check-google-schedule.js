const { Given, When, Then } = require('@cucumber/cucumber');
const { By, Key, Browser } = require('selenium-webdriver');

const checkGoogleSchedule = (driver) => {

    Given('마이페이지 탭으로 이동', async () => {
        const scheduleBtn = await driver.findElement(By.id('topMenu800000000'));

        return scheduleBtn.click();
    });

    Then('마이페이지 수정 버튼 클릭', async () => {
        await driver.sleep(10000); // 넘어가는 속도 조절

        const modifyBtn = await driver.findElement(By.linkText("수정"));

        console.log(modifyBtn);

        return await modifyBtn.click();
        // Write code here that turns the phrase above into concrete actions
        return 'pending';
    });

    Then('일정 등록 저장', async () => {
        // Write code here that turns the phrase above into concrete actions
        return 'pending';
    });

    Then('개인 캘린더에 일정 생성', async () => {
        // Write code here that turns the phrase above into concrete actions
        return 'pending';
    });
}

module.exports = checkGoogleSchedule;