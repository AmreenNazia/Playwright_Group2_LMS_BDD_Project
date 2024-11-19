import { createBdd } from 'playwright-bdd';
const { Before, After } = createBdd();
import { chromium } from '@playwright/test';
import { POManager } from '../PageObject/POManager';
 
 

 Before(async function () {
  const browser = await chromium.launch({
    headless: true,
  });
  const context = await browser.newContext();
  this.page = await context.newPage();
  
  this.pageManager = new POManager(this.page);
});


After(async function () {
 
  await this.page.screenshot({ path: `screenshots/screenshot-${Date.now()}.png` });
  // console.log("Browser will close");
 
});

 
 

 