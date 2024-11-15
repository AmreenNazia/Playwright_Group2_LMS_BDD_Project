const { createBdd} = require('playwright-bdd');
const { Given, When, Then }= createBdd();
const { POManager } = require('../PageObject/POManager'); 
const { expect } = require('@playwright/test');
const exp = require('constants');
let class_page;


// 1. Missing step definition for "tests/Features/005_Class/001_ClassPagination.feature:4:1"
Given('Admin is on the Dashboard page after login', async function({})  {
     const reusablepage = await this.pageManager.getReusablePage();
     await reusablepage.navigate();
     await reusablepage.login();

  });
  
  // 2. Missing step definition for "tests/Features/005_Class/001_ClassPagination.feature:7:1"
  Given('Admin is on the dashboard page after login', async function({}) {
   const dashboard_Page = await this.pageManager.getDashboardPage();
    const title_locator = await dashboard_Page.getHeadertitle();
    const reusablepage = this.pageManager.getReusablePage();
    await reusablepage.isVisible(title_locator);
  });
  
  // 3. Missing step definition for "tests/Features/005_Class/001_ClassPagination.feature:8:1"
  When('Admin clicks the Class Navigation bar in the Header', async function({}) {
    class_page = await this.pageManager.getClassPage();
    const selector = await class_page.clickClass();
    const reusablepage = await this.pageManager.getReusablePage();
    await reusablepage.click(selector)
  });
  
  // 4. Missing step definition for "tests/Features/005_Class/001_ClassPagination.feature:9:1"
  Then('Admin should land on the {string} page', async function({}, expectedText)  {
        const actualtext = await class_page.manageclass_text();
        expect(await actualtext).toBe(expectedText)
  });

  Then('Admin should see the {string} Title', async function({}, expectedtext) {
    const dashboard_Page = await this.pageManager.getDashboardPage();
    const title_locator = await dashboard_Page.getHeadertitle();
    const reusablepage = this.pageManager.getReusablePage();
    await reusablepage.isVisible(title_locator);
    expect(await title_locator.textContent()).toBe(expectedtext);
  });
  Then('Admin should see the {string} Header', async function({}, expectedText) {
    const selector = await class_page.manageclass();
    const reusablepage = this.pageManager.getReusablePage();
    await reusablepage.isVisible(selector);
    expect(await selector.textContent()).toBe(expectedText)
  });
  Then('Admin should see the Searchbar in Manage class page', async function({}){
    const selector = await class_page.searchbox();
    const reusablepage = this.pageManager.getReusablePage();
    await reusablepage.isVisible(selector);
  });
  Then('Admin should see the datatable heading like Batchname,class topic,class descrption,status,class Date,staff name,Edit\\/Delete', async function({}) {
    const selector = await class_page.classHeader();
    const reusablepage = this.pageManager.getReusablePage();
    await reusablepage.isVisible(selector);
  });
  Then('Admin should see the  showing x to y of  z entries and enabled pagination controls under the data table', async function({}){
    const selector = await class_page.paginationText();
    const reusablepage = this.pageManager.getReusablePage();
    await reusablepage.isVisible(selector);
    expect(await selector.textContent()).toMatch(/Showing/)
  });

  Then('Validate the sort icon of all the field in datatable', async function({}) {
     const program = await this.pageManager.getProgramPage();
     await program.checkSortIconsVisibility();
  });
  Then('Validating the Delete button under the Manage class', async function ({}) {
   const program = await this.pageManager.getProgramPage();
    const disabledDelete =  await program.disabled_delete();
    expect(await disabledDelete).toBeDisabled();
  });

  Then('Admin should see Total no of classes in below of the data table.', async function({}) {
  const  program = await this.pageManager.getProgramPage();
  const actual_footer = await program.footer_text();
   expect(await actual_footer).toMatch(/In/)
  });
  