
const { createBdd } = require('playwright-bdd');
const { Before, After } = createBdd();

const playwright = require('@playwright/test');
  const { POManager } = require('../PageObject/POManager');
const { AfterStep, Status } = require('@cucumber/cucumber');
const path = require('path');

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
  console.log("Browser will close");
});

// AfterStep(async function ({result}){
//   if(result.status = Status.FAILED){
//     await this.page.screenshot({path: 'Screenshots/screenshot1.png'});
//   }
// });