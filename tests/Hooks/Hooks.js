
const { createBdd } = require('playwright-bdd');
const { Before, After } = createBdd();
const playwright = require('@playwright/test');

const { POManager } = require('../PageObject/POManager');
// const { AfterStep } = require('@cucumber/cucumber');
 

 Before(async function () {
  // This hook will be executed before all scenarios
  const browser = await playwright.chromium.launch({
    headless: false,
  });
  const context = await browser.newContext();
  this.page = await context.newPage();
  
  this.pageManager = new POManager(this.page);
});


After(async function () {
  // Assuming this.driver is a selenium webdriver
  await this.page.screenshot({ path: `screenshots/screenshot-${Date.now()}.png` });
  // console.log("Browser will close");
});

 
