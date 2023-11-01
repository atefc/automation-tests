const {Builder, By, Browser, Key, until} = require('selenium-webdriver');

const SERVER_URL = 'http://localhost:4200';

describe('Test login', () => {
    let driver;
    before(() => {
        driver = new Builder().forBrowser(Browser.CHROME).build();
    });

    it('Check that login works with correct credentials',async () => {
        await driver.get('http://localhost:4200/login');
        //await driver.findElement(By.('sixbm-textfield[e2eMsgIdentifier="e2e-invalid_msg-email"]')).sendKeys('atef.chikh-ext@sixense-group.com', Key.RETURN);
        await driver.findElement(By.xpath('//*[@id="mat-input-0"]')).sendKeys('atef.chikh-ext@sixense-group.com', Key.RETURN);
        await driver.findElement(By.xpath('//*[@id="mat-input-1"]')).sendKeys('Atch*9102!', Key.RETURN);
        await driver.findElement(By.id('login-button')).click();
        await driver.wait(until.elementLocated(By.className('user-details')), 8*1000);
        
        const dropdown = await driver.findElement(By.tagName('ng-select'));
        await dropdown.click();
        

        console.log('dropdown : ', dropdown);
    })
})