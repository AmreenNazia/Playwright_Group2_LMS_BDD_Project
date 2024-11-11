const { createBdd} = require('playwright-bdd');
const { Given, When, Then }= createBdd();
const { POManager } = require('../PageObject/POManager'); 
const { expect } = require('@playwright/test');
let dashboard_Page
const KeyOption = 'Dashboard';
 
When('Admin enter valid username and password from the scenario {string} and {string} and clicks login button', async function ({}, KeyOption, sheetname) {
    const login_Page = this.pageManager.getReusablePage();
     await login_Page.navigate();
     await login_Page.validLogin(KeyOption,sheetname);
   });
   
   Then('Admin should land on dashboard page.', async function () {
     await expect(this.page.getByText('Logout')).toBeVisible();
   });
 
Then('Admin should see LMS -Learning management system as title from scenario {string}', async function({}, KeyOption) {
    
     dashboard_Page = this.pageManager.getDashboardPage();
     const title_text = await dashboard_Page.title(KeyOption);
     expect(title_text.actual_title).toBe(title_text.expectedtitle);
});

 
Then('LMS title should be on the top left corner of page from scenario {string}', async function({}, KeyOption) {
     dashboard_Page = this.pageManager.getDashboardPage();
      await dashboard_Page.allignment();
   });

    
Then('Admin should see correct spelling in navigation bar text from scenario {string}', async function({}, KeyOption) {
     
      dashboard_Page = this.pageManager.getDashboardPage(); 
     const text =   await dashboard_Page.navbartext(KeyOption);
      expect(text.actual_nav_text).toBe(text.expected_nav_text);
       
   
});

Then('Admin should see correct spelling and space in LMS title from scenario {string}', async function({}, KeyOption){
     dashboard_Page = this.pageManager.getDashboardPage();
     const title = await dashboard_Page.title(KeyOption);
     expect(title.actual_title).toBe(title.expectedtitle);
});


Then('Admin should see program in the 1st place from scenario {string}', async function({}, KeyOption) {
   dashboard_Page = this.pageManager.getDashboardPage();
   const order = await dashboard_Page.navorder(KeyOption);
     expect(order.actual_nav_order).toBe(order.expected_nav_text);
});

 
Then('Admin should see program in the 2nd place from scenario {string}', async function({}, KeyOption){
     dashboard_Page = this.pageManager.getDashboardPage();
     const order = await dashboard_Page.navorder(KeyOption);
     expect(order.actual_nav_order).toBe(order.expected_nav_text);
});
   
    
   Then('Admin should see program in the 3rd place from scenario {string}', async function({}, KeyOption){
     dashboard_Page = this.pageManager.getDashboardPage();
     const order = await dashboard_Page.navorder(KeyOption);
     expect(order.actual_nav_order).toBe(order.expected_nav_text);
   });
   
    
   Then('Admin should see program in the 4th place from scenario {string}', async function({}, KeyOption){
     dashboard_Page = this.pageManager.getDashboardPage();
     const order = await dashboard_Page.navorder(KeyOption);
     expect(order.actual_nav_order).toBe(order.expected_nav_text);
   });
   


 