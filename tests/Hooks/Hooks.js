const { createBdd } = require('playwright-bdd');
const { Before, After } = createBdd();
import { chromium } from '@playwright/test';
import { POManager } from '../PageObject/POManager';
import { writeFileSync } from 'fs';
import { join } from 'path';

Before(async function () {
  this.browser = await chromium.launch({
    headless: true, // Run in headless mode
  });
  const context = await this.browser.newContext();
  this.page = await context.newPage();
  this.pageManager = new POManager(this.page);
});

After(async function () {
  const testInfo = this.testInfo; // Access test info via `this`

  if (testInfo?.status === 'failed' && this.page) {
    const screenshotPath = `./allure-results/${testInfo.title}.png`;
    const screenshotBuffer = await this.page.screenshot();
    writeFileSync(screenshotPath, screenshotBuffer);
  }

  // Cleanup browser and page
  if (this.page) {
    await this.page.close();
  }
  if (this.browser) {
    await this.browser.close();
  }
});
