const { expect } = require('@playwright/test');
const exp = require('constants');
const { ReusablePage } = require('./ReusablePage');
// const { getDataByKeyOption } = require('../Utilities/ExcelUtils'); 
const filepath = 'tests/TestData/PlayWright_Group2_Data.xlsx';
require('dotenv').config();


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
    this.checkbox_headerlevel = page.locator('//tr//th[1]//input[@type="checkbox"]');
    this.eachrow_checkbox = page.locator('//tbody//tr//td[1]//input');
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
    const actual_text = await this.logout.textContent();
    return actual_text;
  }
  async header_LMS() {
    const actual_header = await this.header.textContent();
    return actual_header;
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
    return this.checkbox_headerlevel;
  }
  async eachrowCheckbox() {
    const checkboxes = await this.eachrow_checkbox.elementHandles();

    for (const checkbox of checkboxes) {
      await expect(checkbox).not.toBeChecked();
    }
      console.log('All checkboxes are verified to be unchecked.');
  }

  async checkSortIconsVisibility() {
    const sortIcons = await this.sorticons.elementHandles();
    const count = await sortIcons.count();
    for (let i = 0; i < count; i++) {
      await expect(sortIcons.nth(i)).toBeVisible();
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
    await (this.search_text).fill('PlayWrightGroupTwo');
    await this.overlayer.click();
    await (this.specificEditIcon).click();
    await (this.programNameTextBox).fill('PlayWrightGrouptwo');
    await (this.saveProgram).click();
    expect (await this.savedProgramNameAssertion).toHaveText('PlayWrightGrouptwo');
  }

  async editProgramDescription(){
    await (this.search_text).fill('PlayWright Automation using');
    await this.overlayer.click();
    await (this.specificEditIcon).click();
    await (this.programDescriptionTextBox).fill('PlayWright Automation using Java');
    await (this.saveProgram).click();
    await (this.successMessage);
    expect (await this.savedProgramDesc).toHaveText('PlayWright Automation using Java');
  }
  async statusUpdate(){
    await (this.search_text).fill('PlayWright Automation using');
    await this.overlayer.click();
    await (this.specificEditIcon).click();
    await (this.activeRadioButton).click();
    await (this.saveProgram).click();
    await (this.successMessage);
    expect (await this.savedStatus).toHaveText('Active');
  }

 async clickCancel(){
  await (this.search_text).fill('PlayWright Automation using');
    await this.overlayer.click();
    await (this.specificEditIcon).click();
    await (this.cancelProgramBtn).click();
    expect (await this.programDetailsPage).not.toBeVisible();
 }
 
 async clickClose(){
  await (this.search_text).fill('PlayWright Automation using');
  await this.overlayer.click();
  await (this.specificEditIcon).click();
  await (this.closeIcon).click();
  expect (await this.programDetailsPage).not.toBeVisible();
 }
}

module.exports = { ProgramPage }