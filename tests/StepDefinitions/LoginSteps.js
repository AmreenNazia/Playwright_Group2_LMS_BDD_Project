import { createBdd } from "playwright-bdd";
const { Given, When, Then } = createBdd();
const { POManager } = require('../PageObject/POManager'); 
const { expect } = require('@playwright/test')
let login_Page;

Given('Admin gives the correct LMS portal URL', async function () {
    console.log("Admin is in the LMS Portal");
});

Given('Admin is in login Page', async function () {
    console.log("Admin is in the login page");
});

When('Admin enter valid username and password from excel file and clicks login button', async function () {
   
     login_Page = this.pageManager.getLoginPage();
    await   login_Page.goTo();
    await   login_Page.loginPage();
});

Then('Admin should land on dashboard page.', async function () {
    await login_Page.validate();
});