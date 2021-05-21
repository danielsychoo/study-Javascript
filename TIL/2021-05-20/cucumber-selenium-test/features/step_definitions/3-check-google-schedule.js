const { Given, When, Then } = require('@cucumber/cucumber');
const { By, Key, Browser } = require('selenium-webdriver');

const checkGoogleSchedule = (driver, googlePassword) => {

    Given('일정 탭으로 이동', async () => {
        const scheduleBtn = await driver.findElement(By.id('topMenu300000000'));

        return scheduleBtn.click();
    });

    Then('스케줄 오늘 날짜를 클릭', async () => {
        await driver.sleep(4000); // 넘어가는 속도 조절
        // const today = await new Date().getDate();
        const getTodayForm = await driver.findElement(By.xpath("/html/body/div[2]/div[2]/div[1]/div[6]/div[3]/div[2]/div/table/tbody/tr/td/div/div/div[4]/div[1]/table/tbody/tr/td[6]"));


        console.log(getTodayForm);

        return await getTodayForm.click();

        // if(notSignInText) return notSignInText.click();
        // else return;
        return 'pending';
    });

    Then('구글 아이디 {string} 입력', async () => {
        // Write code here that turns the phrase above into concrete actions
        return 'pending';
    });

    Then('구글 패스워드 입력 후 로그인', async () => {
        // Write code here that turns the phrase above into concrete actions
        return 'pending';
    });

    When('오늘 일정 확인', async () => {
        // Write code here that turns the phrase above into concrete actions
        return 'pending';
    });

    Then('비즈박스 홈으로 이동', async () => {
        // Write code here that turns the phrase above into concrete actions
        return 'pending';
    });

    Then('비즈박스 로그아웃', async () =>  {
        // Write code here that turns the phrase above into concrete actions
        return 'pending';
    });

}

module.exports = checkGoogleSchedule;