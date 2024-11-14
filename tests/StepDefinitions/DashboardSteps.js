const { createBdd} = require('playwright-bdd');
const { Given, When, Then }= createBdd();
const { POManager } = require('../PageObject/POManager'); 
const { expect } = require('@playwright/test');
let dashboard_Page
const KeyOption = 'Dashboard';
 
When('Admin enter valid username and password from the scenario {string} and {string} and clicks login button', async function ({}, KeyOption, sheetname) {
    const login_Page = await this.pageManager.getReusablePage();
     await login_Page.navigate();
     await login_Page.validLogin(KeyOption,sheetname);
   });
   
   Then('Admin should land on dashboard page.', async function () {
    dashboard_Page = await this.pageManager.getDashboardPage();
     const title_locator = await dashboard_Page.getHeadertitle();
     const reusablepage = this.pageManager.getReusablePage();
     await reusablepage.isVisible(title_locator);
    
     
   });
 
Then('Admin should see LMS -Learning management system as title', async function({}) {
    dashboard_Page = await this.pageManager.getDashboardPage();
     const title_locator = await dashboard_Page.getHeadertitle();
     const reusablepage = this.pageManager.getReusablePage();
     await reusablepage.isVisible(title_locator);
    
});

 
Then('LMS title should be on the top left corner of page', async function({}) {
     dashboard_Page =await  this.pageManager.getDashboardPage();
      await dashboard_Page.allignment();
   });

    
Then('Admin should see correct spelling in navigation bar text', async function({}) {
  dashboard_Page = await this.pageManager.getDashboardPage();
  const navbar_locator = await dashboard_Page.getNavbarText();
  const reusablepage = this.pageManager.getReusablePage();
  await reusablepage.isVisible(navbar_locator);
});

Then('Admin should see correct spelling and space in LMS title', async function({}){
  dashboard_Page = await this.pageManager.getDashboardPage();
  const title_locator = await dashboard_Page.getHeadertitle();
  const reusablepage = this.pageManager.getReusablePage();
  await reusablepage.isVisible(title_locator);
});


 
Then('Admin should see {string} in the 1st place', async function({}, name)  {
  dashboard_Page = await this.pageManager.getDashboardPage();
  const navbarorder_locator = await dashboard_Page.getnavorderlocator();
  const reusablepage = this.pageManager.getReusablePage();
  await reusablepage.navbar_order(name,navbarorder_locator);
});


 
Then('Admin should see {string} in the 2nd place', async function({},name){
  dashboard_Page = await this.pageManager.getDashboardPage();
  const navbarorder_locator = await dashboard_Page.getnavorderlocator();
  const reusablepage = this.pageManager.getReusablePage();
  await reusablepage.navbar_order(name,navbarorder_locator);
});
   
    
   Then('Admin should see {string} in the 3rd place', async function({},name){
    dashboard_Page = await this.pageManager.getDashboardPage();
    const navbarorder_locator = await dashboard_Page.getnavorderlocator();
    const reusablepage = this.pageManager.getReusablePage();
    await reusablepage.navbar_order(name,navbarorder_locator);
   });
   
    
   Then('Admin should see {string} in the 4th place', async function({},name){
    dashboard_Page = await this.pageManager.getDashboardPage();
    const navbarorder_locator = await dashboard_Page.getnavorderlocator();
    const reusablepage = this.pageManager.getReusablePage();
    await reusablepage.navbar_order(name,navbarorder_locator);
   });
   


 