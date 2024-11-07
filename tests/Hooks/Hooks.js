const {chromium} = require('@playwright/test');
let browser,page,context;
import { createBdd } from "playwright-bdd";
const { Before, After } = createBdd();

Before(async () => {
    browser = await chromium.launch();
    context = await browser.newContext();
    page = await context.newPage();
    await page.goto('https://playwright-frontend-app-a9ea85794ad9.herokuapp.com/login'); 
  });

  After(async () => {
    await browser.close();
  });