import { createBdd } from "playwright-bdd";
const { Given, When, Then } = createBdd();
const { POManager } = require('../PageObject/POManager'); 
 

Given('Admin gives the correct LMS portal URL', async () => {
    console.log("Admin is in the LMS Portal");
});

Given('Admin is in login Page', async () => {
    console.log("Admin is in the login page");
});

When('Admin enter valid username and password from excel file and clicks login button', async () => {
   
    // const pageManager = new POManager(page);  
    // const login_Page = pageManager.getLoginPage();
    //  poManager = new POManager(this.page)
   const login_page =   this.poManager.getLoginPage();
    await   login_page.goTo();
    await   login_page.loginPage();
});

Then('Admin should land on dashboard page.', async () => {
    //  await  this.login_page.validation();
});