const { expect } = require('@playwright/test');
const exp = require('constants');
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
    this.editanddelete_icons = page.locator('//tr//td[5]');
    this.bottomfooter = page.locator('//span[@class="p-paginator-current ng-star-inserted"]');
    this.footer = page.getByText(' In total there are 20 programs. ');
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
    const count= await this.sorticons.count();
      for (let i = 0; i < count; i++) {
      await expect(this.sorticons.nth(i)).toBeVisible();
    }
    console.log('All sort icons are visible');
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
  }


module.exports = { ProgramPage }