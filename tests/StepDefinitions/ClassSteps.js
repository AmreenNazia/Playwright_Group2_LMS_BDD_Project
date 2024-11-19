const { createBdd} = require('playwright-bdd');
const { Given, When, Then }= createBdd();
const { POManager } = require('../PageObject/POManager'); 
const { expect, selectors } = require('@playwright/test');
const exp = require('constants');
require('dotenv').config();

let class_page;
let paginationAndSorting;
let reusablepage;


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
  /***Add New Class ***/


  // 1. Missing step definition for "tests/Features/005_Class/002_AddNewClass.feature:4:1"
Given('Admin is on the Manage class page after login', async function({})  {
  const reusablepage = await this.pageManager.getReusablePage();
  await reusablepage.navigate();
  await reusablepage.login();
  class_page = await this.pageManager.getClassPage();
  const selector = await class_page.clickClass();
   await reusablepage.click(selector)

});

// 2. Missing step definition for "tests/Features/005_Class/002_AddNewClass.feature:7:1"
Given('Admin is on the Manage class page', async function({})  {
  const actualtext = await class_page.manageclass_text();
  expect(await actualtext).toBe(' Manage Class')
});

// 3. Missing step definition for "tests/Features/005_Class/002_AddNewClass.feature:8:1"
When('Admin clicks add new class under the class menu bar.', async function({}) {
  const program = await this.pageManager.getProgramPage();
  await program.over_layer();
  class_page = await this.pageManager.getClassPage();
  const selector = await class_page.clickClass();
  const reusablepage = this.pageManager.getReusablePage();
  await reusablepage.click(selector);
  const selector1 = await class_page.addNewClass();
  await reusablepage.click(selector1)

});

// 4. Missing step definition for "tests/Features/005_Class/002_AddNewClass.feature:9:1"
Then('Admin should see a popup open for class details with empty form along with <SAVE> and <CANCEL> button and Close\\(X) Icon on the top right corner of the window', async function({})  {
 const program = await this.pageManager.getProgramPage();
  const dialob_box = await program.dialogbox();
  const reusablepage = this.pageManager.getReusablePage();
await reusablepage.isVisible(dialob_box);
});

Then('Admin should see few input fields and their respective text boxes in the class details window', async function({})  {
  class_page = await this.pageManager.getClassPage(); 
    await class_page.inputFields(); 
   
});
/**** Add new class Popup****/

 

// 2. Missing step definition for "tests/Features/005_Class/003_AddNewClassPopup.feature:7:1"
Given('Admin is on the Class Popup window', async function({}) {
  const program = await this.pageManager.getProgramPage();
  await program.over_layer();
  class_page = await this.pageManager.getClassPage();
  const selector = await class_page.clickClass();
  const reusablepage = this.pageManager.getReusablePage();
  await reusablepage.click(selector);
  const selector1 = await class_page.addNewClass();
  await reusablepage.click(selector1)
});

// 3. Missing step definition for "tests/Features/005_Class/003_AddNewClassPopup.feature:8:1"
When('Admin enters mandatory fields in the form and clicks on save button from {string} and {string}', async function({}, keyoption, sheetname)  {
   const class_page = await this.pageManager.getClassPage();
   await class_page.add_NewClass(keyoption,sheetname);

});

// 4. Missing step definition for "tests/Features/005_Class/003_AddNewClassPopup.feature:9:1"
Then('Admin gets message Class added Successfully', async function({})  {
  const selector = await class_page.getsuccessmessage();
    const reusablepage = await this.pageManager.getReusablePage();
    await reusablepage.isVisible(selector);
    console.log("Successfull Class added")
});


When('Admin clicks on program in dashboard and admin lands on class Page', async function() {
  const class_page = await this.pageManager.getClassPage();
  const class_Btn = await class_page.clickClass();
  const reusablepage = await this.pageManager.getReusablePage();
  await reusablepage.click(class_Btn)
});

// 2. Missing step definition for "tests\Features\005_Class\005_Sort Class details.feature:10:1"
When('Admin clicks on the Batchname sort icon', async function()  {
  paginationAndSorting = await this.pageManager.getPaginationAndSorting();
  const sorticon = await paginationAndSorting.getbatchNamecol();
  await paginationAndSorting.clickSortIcon(sorticon);
});

// 3. Missing step definition for "tests\Features\005_Class\005_Sort Class details.feature:11:1"
Then('Admin should see Class details are sorted by Batch Name', async function()  {
  const sortingCells = await paginationAndSorting.getbatchNameCell();
await paginationAndSorting.pagination_Asc_Sorting(sortingCells);
});

// 4. Missing step definition for "tests\Features\005_Class\005_Sort Class details.feature:14:1"
When('Admin clicks on the Class topic sort icon', async function()  {
  paginationAndSorting = await this.pageManager.getPaginationAndSorting();
  const sorticon = await paginationAndSorting.getclassTopicCol();
  await paginationAndSorting.clickSortIcon(sorticon);
});

// 5. Missing step definition for "tests\Features\005_Class\005_Sort Class details.feature:15:1"
Then('Admin should see Class details are sorted by Class Topic', async function()  {
  const sortingCells = await paginationAndSorting.getclassTopicCell();
  await paginationAndSorting.pagination_Asc_Sorting(sortingCells);
});

// 6. Missing step definition for "tests\Features\005_Class\005_Sort Class details.feature:18:1"
When('Admin clicks on the Class descreption  sort icon', async function()  {
  paginationAndSorting = await this.pageManager.getPaginationAndSorting();
  const sorticon = await paginationAndSorting.getclassDesCol();
  await paginationAndSorting.clickSortIcon(sorticon);
});

// 7. Missing step definition for "tests\Features\005_Class\005_Sort Class details.feature:19:1"
Then('Admin should see Class details are sorted by Class Description', async function()  {
  const sortingCells = await paginationAndSorting.getclassDesCell();
  await paginationAndSorting.pagination_Asc_Sorting(sortingCells);
});

// 8. Missing step definition for "tests\Features\005_Class\005_Sort Class details.feature:22:1"
When('Admin clicks on the Status sort icon', async function()  {
  paginationAndSorting = await this.pageManager.getPaginationAndSorting();
  const sorticon = await paginationAndSorting.getclass_statusCol();
  await paginationAndSorting.clickSortIcon(sorticon);
});

// 9. Missing step definition for "tests\Features\005_Class\005_Sort Class details.feature:23:1"
Then('Admin should see Class details are sorted by Status', async function()  {
  const sortingCells = await paginationAndSorting.getclass_statusCell();
  await paginationAndSorting.pagination_Asc_Sorting(sortingCells);
});

// 10. Missing step definition for "tests\Features\005_Class\005_Sort Class details.feature:26:1"
When('Admin clicks on the Class Date sort icon', async function()  {
  paginationAndSorting = await this.pageManager.getPaginationAndSorting();
  const sorticon = await paginationAndSorting.getclass_DateCol();
  await paginationAndSorting.clickSortIcon(sorticon);
});
// 1. Missing step definition for "tests\Features\005_Class\005_Sort Class details.feature:27:1"
Then('Admin should see Class details are sorted by Class Date', async function()  {
  const sortingCells = await paginationAndSorting.getclass_DateCell();
  await paginationAndSorting.pagination_Asc_Sorting(sortingCells);
});

// 2. Missing step definition for "tests\Features\005_Class\005_Sort Class details.feature:30:1"
When('Admin clicks on the Staff Name sort icon', async function() {
  paginationAndSorting = await this.pageManager.getPaginationAndSorting();
  const sorticon = await paginationAndSorting.getstaffNameCol();
  await paginationAndSorting.clickSortIcon(sorticon);
});

// 3. Missing step definition for "tests\Features\005_Class\005_Sort Class details.feature:31:1"
Then('Admin should see Class details are sorted by Staff name', async function()  {
  const sortingCells = await paginationAndSorting.getstaffNameCell();
  await paginationAndSorting.pagination_Asc_Sorting(sortingCells);

});

// 1. Missing step definition for "tests\Features\005_Class\006_Pagination.feature:9:1"
When('Admin clicks Next page link on the class table', async function(){
  paginationAndSorting = this.pageManager.getPaginationAndSorting();
const ele = await paginationAndSorting.getNextLink1();
const ele1 =  await paginationAndSorting.getOverLayer();
await paginationAndSorting.click(ele1)
await ele.scrollIntoViewIfNeeded();
await paginationAndSorting.validateNextPageLink();
});

// 2. Missing step definition for "tests\Features\005_Class\006_Pagination.feature:10:1"
Then('Admin should see the next page record on the table  with Pagination has next active link enabled', async function() {
  await paginationAndSorting.getNextLink(); 
});

// 3. Missing step definition for "tests\Features\005_Class\006_Pagination.feature:18:1"
Then('Admin should see the previous page record on the table with pagination has previous page link enabled', async function() {
  paginationAndSorting = this.pageManager.getPaginationAndSorting();
  const ele = await paginationAndSorting.getPreviousLink1();
  await ele.scrollIntoViewIfNeeded();
  expect( await ele).toBeEnabled();
});

// 4. Missing step definition for "tests\Features\005_Class\006_Pagination.feature:21:1"
When('Admin clicks Start page link', async function() {
  paginationAndSorting = this.pageManager.getPaginationAndSorting();
  const ele = await paginationAndSorting.getFirstLink();
  await ele.scrollIntoViewIfNeeded();
  await paginationAndSorting.click(ele)
});


When('Admin clicks on the edit icon', async function() {
 class_page = this.pageManager.getClassPage();
});


Then('A new pop up with class details appears', async function() {
  await class_page.checkEditIcon();
});

// 1. Missing step definition for "tests\Features\005_Class\004_EditNewClass.feature:13:1"
When('Admin clicks the edit icon', async function () {
  class_page = this.pageManager.getClassPage();
  await class_page.clickEditIcon();
});

Then('Admin should see batch name field is disabled', async function() {
  expect(await class_page.getBatchNameField()).toBeDisabled();
});

Then('Admin should see class topic field is disabled', async function() {
  expect (await class_page.getClassTopicField()).toBeDisabled();
});

// 5. Missing step definition for "tests\Features\005_Class\004_EditNewClass.feature:21:1"
Given('Admin is on the Edit Class Popup window', async function() {
  class_page = this.pageManager.getClassPage();
  reusablepage = this.pageManager.getReusablePage();
  const topic = reusablepage.getClassTopicValue();;
  console.log(topic);
  await class_page.searchClass(topic);
});

// 6. Missing step definition for "tests\Features\005_Class\004_EditNewClass.feature:22:1"
When('Update the fields with valid {string} data from excel {string}  and click save', async function ({}, KeyOption, SheetName) {
 await class_page.validEditClass(KeyOption,SheetName);
  const text = await class_page.validEditClass(KeyOption,SheetName);
});

// 7. Missing step definition for "tests\Features\005_Class\004_EditNewClass.feature:23:1"
Then('Admin gets message {string} and see the updated values in data table', async function ({}, arg)  {
  const expValue = await reusablepage.getNewClassDescValue();
  await class_page.getsuccessmessage();
  // expect(await text).toEqual(expValue);
});
// 8. Missing step definition for "tests\Features\005_Class\004_EditNewClass.feature:31:1"
When('Update the fields with invalid {string} data from excel {string} and click save', async function ({}, KeyOption,SheetName)  {

});


When('Update the mandatory fields with valid {string} data from excel {string} and click save', async function ({}, arg,arg1) {
  // ...
});

// 1. Missing step definition for "tests\Features\005_Class\004_EditNewClass.feature:49:1"
When('Update the optional fields with valid {string} data from excel {string} and click save', async function ({}, KeyOption,SheetName)  {
  class_page = this.pageManager.getClassPage();
  await class_page.optionalFieldsEdit(KeyOption,SheetName);
 
});
Then('Admin gets message Class details updated Successfully  and see {string} and {string} the updated values in data table', async function({}, KeyOption,SheetName) {
  await class_page.getsuccessmessage();
  await class_page.editAssertion(KeyOption,SheetName);
});
// 2. Missing step definition for "tests\Features\005_Class\004_EditNewClass.feature:58:1"
When('Admin enters only numbers or special char in the text fields for {string} data from excel {string}', async function ({}, KeyOption,SheetName) {
  class_page = this.pageManager.getClassPage();
  await class_page.optionalFieldsEdit(KeyOption,SheetName);
});

// 3. Missing step definition for "tests\Features\005_Class\004_EditNewClass.feature:59:1"
Then('Admin should get Error message' , async function ()  {
 expect (await class_page.getErrorMessage()).toBeVisible();
 
});

// 4. Missing step definition for "tests\Features\005_Class\004_EditNewClass.feature:67:1"
When('Admin clicks Cancel button on edit popup', async function ()  {
  class_page = this.pageManager.getClassPage();
  await class_page.clickCancel();
});

// 5. Missing step definition for "tests\Features\005_Class\004_EditNewClass.feature:68:1"
Then('Admin can see the class details popup disappears and can see nothing changed for particular Class', async function() {
  class_page = this.pageManager.getClassPage();
  reusablepage = this.pageManager.getReusablePage();
  const topic = reusablepage.getClassTopicValue();;
  console.log(topic);
  const actual = await class_page.getclassTopic_Specific();
  expect(await actual).toEqual(topic);
});


