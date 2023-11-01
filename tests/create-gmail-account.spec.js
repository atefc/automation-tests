const { Browser, Builder, By, Key, until } = require("selenium-webdriver");

describe("", () => {
  let driver;
  before(() => {
    driver = new Builder().forBrowser("chrome").build();
  });

  it("create a new gmail account", async () => {
    await driver.get("http://www.google.com/ncr");
    const rejectButton = await driver.wait(
      until.elementIsEnabled(driver.findElement(By.id("W0wltc")))
    );
    console.log(rejectButton);
    await rejectButton.click();
    await driver
      .findElement(By.name("q"))
      .sendKeys("Create a new gmail account", Key.RETURN);
    await driver.wait(
      until.titleIs("Create a new gmail account - Google Search"),
      1000
    );
    const link = await driver.findElement(By.xpath('//a[@jsname="UWckNb"]'));
    await link.click();
    await driver.wait(
      until.elementIsVisible(driver.findElement(By.tagName("h1")))
    );
    const createButton = await driver.findElement(
      By.xpath(
        '//*[@id="hcfe-content"]/section/div/div[1]/article/section/div/div[1]/div/p[1]/a'
      )
    );
    await createButton.click();
    //    await driver.wait(until.elementIsVisible(driver.findElement(By.xpath('//button[@jscontroller="soHxf"]'))));
    //  const button = await driver.findElement(By.xpath('//button[@jscontroller="soHxf"]'));
    //  await button.click();
    driver.quit();
  });
});
