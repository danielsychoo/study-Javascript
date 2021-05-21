const driverUtils = {
    async closeBrowser(driver) {
        await driver.close();
        return;
    }
}

module.exports = driverUtils;