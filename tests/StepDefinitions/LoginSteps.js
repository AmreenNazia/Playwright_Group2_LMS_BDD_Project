import { createBdd } from "playwright-bdd";
const { Given, When, Then } = createBdd();
const { POManager } = require('../PageObject/POManager'); 
const { expect } = require('@playwright/test')
let login_Page;

Given('Admin gives the correct LMS portal URL', async function () {
    login_Page = this.pageManager.getLoginPage();
    await login_Page.goTo();
    
});

Given('Admin is in login Page', async function () {
    await login_Page.goTo();
    await expect(this.page.getByText('Please login to LMS application')).toBeVisible();
});

When('Admin enter valid username and password from excel file and clicks login button', async function () {
        await login_Page.loginPage();
});

Then('Admin should land on dashboard page.', async function () {
    await expect(this.page.getByText('Logout')).toBeVisible();
});