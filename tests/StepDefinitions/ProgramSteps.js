const { createBdd} = require('playwright-bdd');
const { Given, When, Then }= createBdd();
const { POManager } = require('../PageObject/POManager'); 
const { expect } = require('@playwright/test');
const exp = require('constants');
const { emitWarning } = require('process');
let program;
 



// 1. Missing step definition for "tests/Features/003_Program.feature:5:1"
Given('Admin is logged in to LMS Portal', async function(){
        const reusablepage = this.pageManager.getReusablePage();
        await  reusablepage.navigate();
        await reusablepage.login();
  });
  
  Given('Admin is on dashboard page after Login', async function() {
    const reusablepage = this.pageManager.getReusablePage();
   const actual_Text =  await  reusablepage.validate();
   expect(actual_Text).toBe('Logout');
         
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
 program = this.pageManager.getProgramPage();
  await  program.click_program();
});
When('Admin clicks Program on navigation bar', async function() {
   program = this.pageManager.getProgramPage();
  await  program.over_layer();
  await  program.click_program();
});

// 2. Missing step definition for "tests/Features/003_Program/002_MenuBar.feature:24:1"
Then('Admin should see sub menu in menu bar as {string}', async function({}, expected_submenubar) {
   const actual_submenu = await program.submenubar();
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
  await program.checkbox_header();
   
 });

 Then('Admin should see check box default state as unchecked on the left side in all rows against program name', async function()  {
   program = await this.pageManager.getProgramPage(); 
   program.eachrowCheckbox();
});

Then('Admin should see the sort arrow icon beside to each column header except Edit and Delete', async function({}) {
  program = await this.pageManager.getProgramPage(); 
  program.checkSortIconsVisibility() ;
   
});

When('Admin clicks on Edit option for particular program', async function (){
  program =  await this.pageManager.getProgramPage();
  await program.clickEditIcon();
});

Then('Admin lands on Program details form', async function () {
  program =  await this.pageManager.getProgramPage();
  await program.AssertProgramDetailsPage();
});

Then('Admin should see window title as {string}', async function ({}, arg)  {
  program =  await this.pageManager.getProgramPage();
  await program.AssertProgramDetailsPage();
});

Then('Admin should see red {string} mark beside mandatory field {string}', async function ({}, arg, arg1)  {
  await program.AssertMandatoryFields();
});


When('Admin edits the program name and click on save button', async function (){
  program =  await this.pageManager.getProgramPage();
  await program.editProgramName();
});


Then('Updated program name is seen by the Admin', async function () {
  expect (await program.editProgramName).toBeTruthy();
});


When('Admin edits the description text and click on save button', async function (){
  program =  await this.pageManager.getProgramPage();
  await program.editProgramDescription();
});


Then('Admin can see the description is updated', async function (){
  expect (await program.editProgramDescription).toBeTruthy();
});


When('Admin can change the status of the program and click on save button', async function () {
  program =  await this.pageManager.getProgramPage();
  await program.statusUpdate();
});


Then('Status updated can be viewed by the Admin', async function () {
  expect (await program.statusUpdate).toBeTruthy();
});


When('Admin click on save button', async function () {
  program =  await this.pageManager.getProgramPage();
  await program.editProgramDescription();

});


Then('Admin can see the updated program details', async function () {
  expect (await program.editProgramDescription).toBeTruthy();
});


When('Admin click on cancel button', async function () {
  program =  await this.pageManager.getProgramPage();
  program.clickCancel();
});


Then('Admin can see the Program details form disappears', async function () {
  console.log('Admin clicked cancel no changes made')
});


When('Admin searches with newly updated {string}', async function () {
  program =  await this.pageManager.getProgramPage();
  program.editProgramName();
});


Then('Admin verifies that the details are correctly updated.', async function () {
  expect (await program.editProgramName).toBeTruthy();
});


When('Admin Click on {string} button',async function () {
  program =  await this.pageManager.getProgramPage();
  program.clickClose();
});


Then('Admin can see program details form disappear', async function () {
  console.log('Admin closed the program Description page')
});


When('Admin clicks on program in dashboard and admin lands on Manage program Page', async function () {      
  program = await this.pageManager.getProgramPage();
  await program.clickProgramMenu();
});


Given('Admin is on Program module', async function () {
  console.log('Admin is in the Manage Program page')
});

When('Admin clicks on delete button for a program', async function () {
  program = await this.pageManager.getProgramPage();
 await  program.clickDeleteIcon();
});

Then('Admin will get confirm deletion popup', async function () {
  await program.deleteConfirmation();
});

Given('Admin is on Confirm deletion form', async function () {
  program = await this.pageManager.getProgramPage();
  await program.searchProgram();
  await  program.clickDeletewithoutOverLay();
  await program.deleteConfirmation();
});


When('Admin clicks on {string} button', async function ({},args) {
  await program.clickYesBtn();
});

// 7. Missing step definition for "tests\Features\003_Program\006_DeleteProgram.feature:15:1"
Then('Admin can see {string} message', async function ({}, arg) {
  await program.successMessageAssertion();
});

// 8. Missing step definition for "tests\Features\003_Program\006_DeleteProgram.feature:19:1"
When('Admin Searches for {string}', async function ({}, arg)  {
  program = await this.pageManager.getProgramPage();
  await program.searchProgram();
  
});

// 9. Missing step definition for "tests\Features\003_Program\006_DeleteProgram.feature:20:1"
Then('There should be zero results.', async function () {
  await program.searchAssertion();
});

// 10. Missing step definition for "tests\Features\003_Program\006_DeleteProgram.feature:23:1"
Given('Admin is on Program Confirm Deletion Page after selecting a program to delete', async function () {   
  program = await this.pageManager.getProgramPage();
   await program.clickDeleteIcon();
});

When('Admin clicks on No button', async function ()  {
  await program.clickNoBtn();
});


Then('Admin can see Confirmation form disappears', async function (){
 expect (await program.deleteConfirmation()).toBeFalsy();
});

When('Admin Click on X button', async function (){
  program = await this.pageManager.getProgramPage();
  await program.clickCloseIcon();
});

Then('Admin can see Confirm Deletion form disappear', async function () {
  expect (await program.deleteConfirmation()).toBeFalsy();
});
Then('Admin should see the Edit and Delete buttons on each row of the data table', async function () {
   program = await this.pageManager.getProgramPage();
   program.edit_deletebuttons();

});

Then('Admin should see the text as {string} along with Pagination icon below the table. x- starting record number on that page y-ending record number on that page z-Total number of records', async function({}, text) {
  program = await this.pageManager.getProgramPage();
 const actual_text = await program.pagination_icons();
 expect(actual_text).toMatch(/Showing/);
  
 
});

Then('Admin should see the footer as In total there are z programs.', async function({}) {
  program = await this.pageManager.getProgramPage();
  const actual_footer = await program.footer_text();
   expect(actual_footer).toMatch(/In/)
});

/* Add New Program */

Given('Admin is on program module after reaching dashboard', async function ({}){
       const reusablepage = await this.pageManager.getReusablePage();
        program = await this.pageManager.getProgramPage();
       await reusablepage.navigate();
       await reusablepage.login();
       await program.click_program();
        
});

Given('Admin is on Program module', async function({}) {
       program = await this.pageManager.getProgramPage();
       const actual_page = await program.validate_manageprogram();
       expect(actual_page).toBe(' Manage Program');
});

// 3. Missing step definition for "tests/Features/003_Program/004_AddNewProgram.feature:8:1"
When('Admin clicks on New Program under the Program menu bar', async function({}) {
        program = await this.pageManager.getProgramPage();
        await program.over_layer();
        await program.click_program();
         
       await program.click_addNewProgram();
});

// 4. Missing step definition for "tests/Features/003_Program/004_AddNewProgram.feature:9:1"
Then('Admin should see pop up window for program details', async function ({}){
         program = await this.pageManager.getProgramPage();
        const dialob_box = await program.dialogbox();
        expect(dialob_box).toBeVisible();
});

Then('Admin should see window title as {string}', async function({}, expected) {
      program = await this.pageManager.getProgramPage();
     const actualtext = await program.program_details();
      expect(actualtext).toBe(expected);
});

Then('Admin should see red {string} mark beside mandatory field {string}', async function({}, arg, arg1) {
  program = await this.pageManager.getProgramPage();
  const actual_redStar= await program.redStar();
  expect(actual_redStar).toBe(arg1+arg)
});
Given('Admin is on Program details form', async function({})  {
  program = await this.pageManager.getProgramPage();
  await program.over_layer();
      await program.click_program();
      await program.click_addNewProgram();

});
When('Admin clicks save button without entering mandatory', async function({}) {
      
      await program.saveProgram();

});

// 2. Missing step definition for "tests/Features/003_Program/004_AddNewProgram.feature:25:1"
Then('Admin gets message {string}', async function({}, arg)  {
     const field_Required = await program.fieldsrequired();
     await expect(field_Required).toContainText('Program name is required.');
     await expect(field_Required).toContainText('Description is required.');
     await expect(field_Required).toContainText('Status is required.');
     

});

// 2. Missing step definition for "tests/Features/003_Program/004_AddNewProgram.feature:30:1"
When('Admin clicks Cancel button', async function({})  {
      await program.click_cancel();
});

// 3. Missing step definition for "tests/Features/003_Program/004_AddNewProgram.feature:31:1"
Then('Admin can see Program Details form disappears', async function({}) {
  
  const dialob_box = await program.dialogbox();
 await expect(dialob_box).not.toBeVisible();
});
 
 
When('Admin enters the Name in the text box from {string} and {string}', async function({}, keyoption, sheetname)  {
  await program.enter_programname(keyoption,sheetname);
});


Then('Admin can see the text entered', async function({}) {
   const actual_Text = await program.enteredText();
   expect(actual_Text).toBeVisible();
});

When('Admin enters the Description in text box from {string} and {string}', async function({}, keyoption, sheetname) {
  await program.enter_programDescription(keyoption,sheetname);
});

// 2. Missing step definition for "tests/Features/003_Program/004_AddNewProgram.feature:43:1"
Then('Admin can see the text entered in description box', async function({}) {
    const actual_Text = await program.entered_text();
    expect(actual_Text).toBeVisible();
});

When('Admin selects the status of the program by clicking on the radio button {string}', async function({}, arg) {
  await program.select_radioButton();
});

 
Then('Admin can see {string} status selected', async function({}, arg) {
  const radio_button =  await program.select_radioButton();
  expect(radio_button).toBeVisible();
});

 
When('Admin enter valid details for mandatory fields from {string} and {string} and Click on save button', async function ({},keyoption,sheetname) {
     await program.addNewProgram(keyoption,sheetname);
});

 
Then('Admin gets a message {string}', async function({}, arg) {
      const success_message = await program.alert_message();
      expect(success_message).toBeVisible();
});
