// const {chromium} = require('@playwright/test');
// let browser,page,context;
// import { createBdd } from "playwright-bdd";
// const { Before, After } = createBdd();

// Before(async () => {
//     browser = await chromium.launch();
//     context = await browser.newContext();
//     page = await context.newPage();
//     // await page.goto('https://playwright-frontend-app-a9ea85794ad9.herokuapp.com/login'); 
//     console.log(page)
//   });

//   After(async () => {
//     // await browser.close();
//   });

const { chromium } = require('@playwright/test');
import { createBdd } from 'playwright-bdd';
const { Before, After } = createBdd();

let browser, context, page;

Before(async function (testContext ) {
    try {
        browser = await chromium.launch();
        context = await browser.newContext();
       page = await context.newPage();
       testContext.page = page;
        // await page.goto('https://playwright-frontend-app-a9ea85794ad9.herokuapp.com/login');

        // Debug logging to confirm navigation
        console.log('Page title:', await this.page.title());
    } catch (error) {
        console.error('Error during Before hook:', error);
    }

    // Make sure the page is accessible as part of the test context
    this.page = page;
});

After(async function () {
    if (page) {
        await page.close();
    }
    if (context) {
        await context.close();
    }
    if (browser) {
        await browser.close();
    }
});

 