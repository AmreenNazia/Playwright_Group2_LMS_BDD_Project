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
    login_Page = this.pageManager.getLoginPage();
 
    await expect(this.page.getByText('Please login to LMS application')).toBeVisible();
});
When('Admin enter valid username and password from the scenario {string} and {string} and clicks login button', async function ({}, KeyOption, sheetname) {
    login_Page = this.pageManager.getLoginPage();
    await login_Page.goTo();
    await login_Page.validLogin(KeyOption,sheetname);
  });
 
Then('Admin should land on dashboard page.', async function () {
    await expect(this.page.getByText('Logout')).toBeVisible();
});