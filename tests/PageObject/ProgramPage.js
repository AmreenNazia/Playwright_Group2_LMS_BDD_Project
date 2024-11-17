const { expect } = require('@playwright/test');
const exp = require('constants');
const { ReusablePage } = require('./ReusablePage');
const { TIMEOUT } = require('dns');
const { getDataByKeyOption } = require('../Utilities/ExcelUtils'); 
const filepath = 'tests/TestData/PlayWright_Group2_Data.xlsx';
require('dotenv').config();

// const programName =  'GroupTwoPWTestingThree';
// const programDesc =  'GPTwo-Testing';

class ProgramPage {

  
  constructor(page) {
    this.page = page;
    this.program_btn = page.getByRole('button', { name: 'Program' });
    this.manage_program = page.getByText(' Manage Program');
    this.logout = page.getByText('Logout');
    this.header = page.getByText('LMS - Learning Management System');
    this.module_names = page.locator('//mat-toolbar//button//span[1]');
    this.overlayer = page.locator('.cdk-overlay-backdrop');
    this.submenu = page.getByRole('menuitem');
    this.details_program = page.locator('//thead//tr//th[@role="columnheader"]');
    this.disable_delete = page.locator('//div[@class="box"]//button');
    this.search_text = page.getByPlaceholder('Search...');
    this.table_columnheader = page.locator('//thead//tr//th');
    this.checkbox_headerlevel = page.locator('//table//th[1]//input[@type="checkbox"]');
    this.eachrow_checkbox = page.locator('//tbody//tr//td[1]');
    this.sorticons = page.locator('//th//p-sorticon');
    this.editIcon = page.locator('//tr[1]//button[@id = "editProgram"]');
    this.programDetailsPage = page.getByText('Program Details')
    this.mandatoryFields = page.locator('label').filter({ hasText: 'Name*' }).locator('span');
    this.aestrikAssetion = page.getByLabel('Program Details')
    this.specificEditIcon = page.locator('#editProgram');
    this.programNameTextBox = page.locator('#programName');
    this.saveProgram = page.getByText('Save');
    this.lastPageIcon = page.locator('.p-paginator-last p-paginator-element p-link p-ripple ng-star-inserted');
    this.savedProgramNameAssertion = page.locator('//td[2]')
    this.programDescriptionTextBox = page.locator('#programDescription');
    this.savedProgramDesc = page.locator('//td[3]');
    this.successMessage = page.locator('.Successful');
    this.activeRadioButton = page.locator('//p-radiobutton[@ng-reflect-input-id = "Active"]')
    this.savedStatus = page.locator('//td[4]')
    this.cancelProgramBtn = page.getByText('Cancel');
    this.closeIcon = page.locator('//span[@ng-reflect-ng-class = "pi pi-times"]');
    this.deletIcon = page.locator('//tr[1]//button[@id = "deleteProgram"]')
    this.deletConfirmation = page.locator('div').filter({ hasText: /^Confirm$/ })
    this.yesBtn = page.getByText('Yes');
    this.saveSuccesMessage= page.getByRole('alert')
    this.paginationBar = page.locator('p-paginator')
    this.noBtn = page.getByText('No');
    this.closeButton = page.getByRole('button', { name: '' })
    this.editanddelete_icons = page.locator('//tr//td[5]');
    this.bottomfooter = page.locator('//span[@class="p-paginator-current ng-star-inserted"]');
    this.footer = page.locator('//div[@class="p-datatable-footer ng-star-inserted"]');
   
    this.addNewProgram_btn = page.getByRole('menuitem', { name: 'Add New Program' });
    this.dialog_box = page.locator('//div[@role="dialog"]')
    this.programdetails = page.getByText('Program Details');
    this.name_star = page.locator('//div/label[@for="programName"]');
    this.save = page.getByRole('button', { name: 'Save'});
    this.cancel_btn = page.getByRole('button',{name: 'Cancel'});
    this.required_text = page.getByLabel('Program Details');
    this.add_programname = page.locator('//input[@id="programName"]');
     this.programdescription = page.locator('#programDescription')
    this.radiobutton =  page.locator('.p-radiobutton-box').first();
    this.successmessage = page.getByText('Successful', { exact: true });
    this.tableValues = page.locator('//tr//td[2]');
    this.desc_rowtable = page.locator('//tbody//tr//td[3]');
    
    
}
  async click_program() {
    await this.program_btn.waitFor({ state: 'visible' })
    await this.program_btn.click();
  }
  async validate_manageprogram() {
    const actual_text = await this.manage_program.textContent();
    return actual_text;
  }
  async logout_Menubar() {
       return this.logout;
     
  }
  async header_LMS() {
    return this.header;
    
  }
  async modulenames() {
    const actual_modules = await this.module_names.allTextContents();
    return actual_modules;
  }
  async over_layer() {
    const overlayVisible = await this.overlayer.isVisible();
    if (overlayVisible) {
      await this.overlayer.click();
    }
  }
  async submenubar() {

    const actual_submenu = await this.submenu.textContent();
    return actual_submenu;
  }
  async detailsOfProgram() {
    const programdetails = await this.details_program.allTextContents();
    console.log(programdetails)
    return programdetails;
  }

  async disabled_delete() {
    expect(await this.disable_delete).toBeDisabled();
  }

  async search_box() {
    expect(await this.search_text).toBeVisible();

  }
  async datacolumnheaders() {
    const actual_header = await this.table_columnheader.allTextContents();
    return actual_header;
  }
  async checkbox_header() {
     await expect(this.checkbox_headerlevel).not.toBeChecked();
  }
  async eachrowCheckbox() {
    const count = await this.eachrow_checkbox.count();
    for (let i = 0; i < count; i++) {
      await expect(this.eachrow_checkbox.nth(i)).not.toBeChecked();
    }
     
      console.log('All checkboxes are verified to be unchecked.');
  }

  async checkSortIconsVisibility() {
    const count= await this.sorticons.count();
      for (let i = 0; i < count; i++) {
      await expect(this.sorticons.nth(i)).toBeVisible();
    }
    console.log('All sort icons are visible');
  }

  async clickEditIcon(){
    await this.overlayer.click();
    this.editIcon.click();
  }

  async AssertProgramDetailsPage(){
    expect (await this.programDetailsPage).toHaveText(/.*Program Details/);
  }

  async AssertMandatoryFields(){
    await expect(this.aestrikAssetion).toContainText('*');
  }

  async editProgramName(){
    await (this.search_text).fill(programName);
    await this.overlayer.click();
    await (this.specificEditIcon).click();
    await (this.programNameTextBox).fill(programName);
    await (this.saveProgram).click();
    expect (await this.savedProgramNameAssertion).toHaveText(programName);
  }

  async editProgramDescription(){
    await (this.search_text).fill(programDesc);
    await this.overlayer.click();
    await (this.specificEditIcon).click();
    await (this.programDescriptionTextBox).fill(programDesc);
    await (this.saveProgram).click();
    await (this.successMessage);
    expect (await this.savedProgramDesc).toHaveText(programDesc);
  }
  async statusUpdate(){
    await (this.search_text).fill(programName);
    await this.overlayer.click();
    await (this.specificEditIcon).click();
    await (this.activeRadioButton).click();
    await (this.saveProgram).click();
    await (this.successMessage);
    expect (await this.savedStatus).toHaveText('Active');
  }

 async clickCancel(){
  await (this.search_text).fill(programName);
    await this.overlayer.click();
    await (this.specificEditIcon).click();
    await (this.cancelProgramBtn).click();
    expect (await this.programDetailsPage).not.toBeVisible();
 }
 
 async clickClose(){
  await (this.search_text).fill(programDesc);
  await this.overlayer.click();
  await (this.specificEditIcon).click();
  await (this.closeIcon).click();
  expect (await this.programDetailsPage).not.toBeVisible();
 }

 async clickDeleteIcon(){
  await (this.overlayer).click();
  await (this.deletIcon).click();
 }
 
 async deleteConfirmation(){
  expect (await this.deletConfirmation).toBeVisible();
 }

 async clickProgramMenu(){
  await (this.program_btn).click();
 }
 async clickYesBtn(){
 
  await (this.yesBtn).click();
 }

 async clickDeletewithoutOverLay(){
  await (this.deletIcon).click();
 }

 async clickNoBtn(){
  await (this.noBtn).click();
 }

 async searchProgram(){
  const sheetname = 'Program';
  const Keyoption = 'DeleteProgram';
  const testData = getDataByKeyOption(filepath,sheetname,Keyoption);
  const programName = testData['Input_name'];
  await this.search_text.fill(programName);
 }
 async overLayClick(){
  await (this.overlayer).click();
 }

 async successMessageAssertion(){
   expect(await this.saveSuccesMessage).toBeVisible();
 }

 async searchAssertion(){
  expect (await this.paginationBar).toContainText('Showing 0 to 0 of 0 entries');
 }

async clickCloseIcon(){
  await this.closeButton.click();
}

  async edit_deletebuttons(){
    const count= await this.editanddelete_icons.count();
    for (let i = 0; i < count; i++) {
    await expect(this.editanddelete_icons.nth(i)).toBeVisible();
  }
  console.log('All Edit/Delete icons are visible');
}
async pagination_icons(){
 const pagination_text =  await this.bottomfooter.textContent();
 const actualtext =await pagination_text.toString();
 return actualtext;
}
async footer_text(){
  const footer_Text = await this.footer.textContent();
  const actual_footer = await footer_Text.toString();
  return actual_footer;
}
async click_addNewProgram(){
  
  await this.addNewProgram_btn.click();
}

async dialogbox(){
      return this.dialog_box;
}
async program_details(){
 const actual_programdetails = await this.programdetails.textContent();
 return actual_programdetails;
}

async redStar(){
      const actualtext = await this.name_star.textContent();
      return actualtext;
}
async save_program(){
  await this.saveProgram.click();
}

async fieldsrequired(){
return this.required_text;
}

async click_cancel(){
  await this.cancel_btn.click();
}

async cancel(){
  return this.cancel_btn;
}

async enter_programname(Keyoption,sheetname){
  const testData = getDataByKeyOption(filepath,sheetname,Keyoption);
  const program_name = testData['Input_name'];
  await this.add_programname.fill(program_name);
  
}
async enteredText(){
 return this.add_programname;
}
async enter_programDescription(Keyoption,sheetname){
  const testData = getDataByKeyOption(filepath,sheetname,Keyoption);
  const program_description = testData['Input_desc'];
  await this.programdescription.fill(program_description);
  
}
async entered_text(){
  return this.programdescription;
 }

 async select_radioButton(){
    await this.radiobutton.click();
    return this.radiobutton;
  }

  async addNewProgram(keyoption,sheetname){
    const testData = getDataByKeyOption(filepath,sheetname,keyoption);
  const program_name = testData['Input_name'];
  const program_description = testData['Input_desc'];
    await this.add_programname.fill(program_name);
    await this.programdescription.fill(program_description);
    await this.radiobutton.click();
    await this.save.click();
  }

  async searchcreatedProgram (keyoption,sheetname){
    const testData = getDataByKeyOption(filepath,sheetname,keyoption);
  const program_name = testData['Input_name'];
 await this.page.reload();
  await this.search_text.fill(program_name);

  }
  async descriptionVisibility(keyoption,sheetname){
    const testData = getDataByKeyOption(filepath,sheetname,keyoption);
  const program_desc = testData['Input_desc'];
  const text = await this.desc_rowtable.textContent();
  return {program_desc, text}
  }
  async alert_message(){
     
    return  this.saveSuccesMessage;
 
  
     
  }

  async fillSearchBar(String){
    await this.search_text.fill(String);
  }

  async valueAssertion(ele){
    const value = await ele.textContent();
    return value;
  }

  async getTableValues(){
    return this.tableValues;
  }


}
module.exports = { ProgramPage }