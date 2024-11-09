const { createBdd} = require('playwright-bdd');
const { Given, When, Then }= createBdd();
const { POManager } = require('../PageObject/POManager'); 
const { expect } = require('@playwright/test');
let dashboard_Page
const KeyOption = 'Dashboard';
 

 
Then('Admin should see LMS -Learning management system as title', async function() {
    
     dashboard_Page = this.pageManager.getDashboardPage();
     const title = await dashboard_Page.title(KeyOption);
     expect(title.actual_title).toBe(title.expectedtitle);
});

 
Then('LMS title should be on the top left corner of page', async function() {
     dashboard_Page = this.pageManager.getDashboardPage();
     const rect = await dashboard_Page.allignment();
   });

    
Then('Admin should see correct spelling in navigation bar text', async function() {
     
      dashboard_Page = this.pageManager.getDashboardPage(); 
     const text =   await dashboard_Page.navbartext(KeyOption);
      expect(text.actual_nav_text).toBe(text.expected_nav_text);
       
   
});

Then('Admin should see correct spelling and space in LMS title', async function(){
     dashboard_Page = this.pageManager.getDashboardPage();
     const title = await dashboard_Page.title(KeyOption);
     expect(title.actual_title).toBe(title.expectedtitle);
});


Then('Admin should see program in the 1st place', async function() {
   dashboard_Page = this.pageManager.getDashboardPage();
   const order = await dashboard_Page.navorder(KeyOption,2,0);
     expect(order.actual_nav_order).toBe(order.expected_nav_text);
});

 
Then('Admin should see program in the 2nd place', async function() {
     dashboard_Page = this.pageManager.getDashboardPage();
     const order = await dashboard_Page.navorder(KeyOption,3,1);
     expect(order.actual_nav_order).toBe(order.expected_nav_text);
});
   
    
   Then('Admin should see program in the 3rd place', async function(){
     dashboard_Page = this.pageManager.getDashboardPage();
     const order = await dashboard_Page.navorder(KeyOption,4,2);
     expect(order.actual_nav_order).toBe(order.expected_nav_text);
   });
   
    
   Then('Admin should see program in the 4th place', async function(){
     dashboard_Page = this.pageManager.getDashboardPage();
     const order = await dashboard_Page.navorder(KeyOption,5,3);
     expect(order.actual_nav_order).toBe(order.expected_nav_text);
   });