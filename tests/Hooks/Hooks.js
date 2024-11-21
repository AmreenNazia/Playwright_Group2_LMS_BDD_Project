const { createBdd } = require('playwright-bdd');
const { Before, After } = createBdd();
import { chromium } from '@playwright/test';
import { POManager } from '../PageObject/POManager';
// import { writeFileSync } from 'fs';
// import { join } from 'path';
import * as allure from "allure-js-commons";
import { ContentType } from "allure-js-commons";

 


Before(async function () {
  this.browser = await chromium.launch({
    headless: true, // Run in headless mode
  });
  const context = await this.browser.newContext();
  this.page = await context.newPage();
  this.pageManager = new POManager(this.page);
});

// After(async function () {
 
//   await this.page.screenshot({ path: `screenshots/screenshot-${Date.now()}.png` });
//   // console.log("Browser will close");
 
// });

 



After(async () => {
  // await this.page.screenshot({ path: `screenshots/screenshot-${Date.now()}.png` });
   
 
  await allure.attachment("Text file", "This is the file content.", ContentType.TEXT);

  await allure.attachmentPath(`screenshots/screenshot-${Date.now()}.png`, {
    contentType: ContentType.PNG,
    fileExtension: "png",
  });
});


