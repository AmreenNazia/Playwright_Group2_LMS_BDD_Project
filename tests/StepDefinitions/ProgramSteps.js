const { createBdd} = require('playwright-bdd');
const { Given, When, Then }= createBdd();
const { POManager } = require('../PageObject/POManager'); 
const { expect } = require('@playwright/test');
const exp = require('constants');
let program;
let reusablepage;


// 1. Missing step definition for "tests/Features/003_Program.feature:5:1"
Given('Admin is logged in to LMS Portal', async function(){
        this.reusablepage = this.pageManager.getReusablePage();
        await this.reusablepage.navigate();
        await this.reusablepage.login();
  });
  
  // 2. Missing step definition for "tests/Features/003_Program.feature:8:1"
  Given('Admin is on dashboard page after Login', async function(){
      console.log("Admin is on the Dashboard Page");
  });
  
  // 3. Missing step definition for "tests/Features/003_Program.feature:9:1"
  When('Admin clicks Program on the navigation bar', async function() {
      this.program = this.pageManager.getProgramPage();
     await this.program.click_program();
  });
  
  // 4. Missing step definition for "tests/Features/003_Program.feature:10:1"
  Then('Admin should be navigated to Program module', async function()   {
    const actual_text = await this.program.validate_manageprogram();
    expect(actual_text).toBe(' Manage Program');
  });

   
Then('Admin should see Logout in menu bar', async function() {
   program = await this.pageManager.getProgramPage();
   const logout_visible=await program.logout_Menubar();
   expect(logout_visible).toBe('Logout');
});

 
Then('Admin should see the heading {string}', async function({},header){
  program = await this.pageManager.getProgramPage();
  const actual_header = await program.header_LMS();
  expect(actual_header).toBe(header);
});

Then('Admin should see the module names as in order {string}', async function({}, expected_modulenames) {
   program = await this.pageManager.getProgramPage();
   const actual_modules = await program.modulenames();
   expect(actual_modules).toBe(expected_modulenames);
});

Given('Admin is on program page', async function(){
  this.reusablepage = this.pageManager.getReusablePage();
  this.program = this.pageManager.getProgramPage();
  await this.reusablepage.navigate();
  await this.reusablepage.login();
  await this.program.click_program();
});
When('Admin clicks Program on navigation bar', async function() {
  this.program = this.pageManager.getProgramPage();
  await this.program.over_layer();
  await this.program.click_program();
});

// 2. Missing step definition for "tests/Features/003_Program/002_MenuBar.feature:24:1"
Then('Admin should see sub menu in menu bar as {string}', async function({}, expected_submenubar) {
   const actual_submenu = await this.program.submenubar();
   expect(actual_submenu).toBe(expected_submenubar);
});

Then('Admin should see heading {string}', async function({}, expected){
   this.program = await this.pageManager.getProgramPage();
   const actual_header = await this.program.validate_manageprogram();
   expect(actual_header).toBe(expected);
});
Then('Admin should able to see Program name, description, and status for each program', async function() {
   this.program = await this.pageManager.getProgramPage();
   const  actual_programdetails = await this.program.detailsOfProgram();
   expect(actual_programdetails).toEqual(["Program Name ", "Program Description ", "Program Status "])
});

Then('Admin should see a Delete button in left top is disabled', async function() {
    program = await this.pageManager.getProgramPage();
    program.disabled_delete();
 });

 Then('Admin should see Search bar with text as {string}', async function({}, expected) {
   program = await this.pageManager.getProgramPage();
   program.search_box();
   
 });

 Then('Admin should see data table with column header on the Manage Program Page as  Program Name, Program Description, Program Status, Edit\\/Delete', async function () {
    program = await this.pageManager.getProgramPage();
   const actual_header = await program.datacolumnheaders();
   expect(actual_header).toStrictEqual(["","Program Name ", "Program Description ", "Program Status "," Edit / Delete "]);
   
 });

 Then('Admin should see checkbox default state as unchecked beside Program Name column as header', async function({}) {
   program = await this.pageManager.getProgramPage(); 
  const checkbox = await program.checkbox_header();
  expect(checkbox).not.toBeChecked();
 });

 Then('Admin should see check box default state as unchecked on the left side in all rows against program name', async function()  {
   program = await this.pageManager.getProgramPage(); 
   program.eachrowCheckbox();
});

Then('Admin should see the sort arrow icon beside to each column header except Edit and Delete', async function({}) {
  program = await this.pageManager.getProgramPage(); 
  program.checkSortIconsVisibility() ;
   
});