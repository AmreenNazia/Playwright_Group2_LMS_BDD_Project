const { expect } = require('@playwright/test');
const filepath = 'tests/TestData/PlayWright_Group2_Data.xlsx';
const { getDataByKeyOption } = require('../Utilities/ExcelUtils');
const { equal } = require('assert');
require('dotenv').config();

class ReusablePage{
constructor(page){
    this.page = page;
          this.url = process.env.LMS_URL;   
          this.username = page.locator('#username');
        this.password = page.locator('#password');
        this.login_btn = page.locator('#login');
        this.loginPageHeader = process.env.LOGIN_PAGEHEADER;
        this.editProgramName = process.env.EDIT_PROGRAM;
        this.editProgramDesc = process.env.EDIT_PROGRAMDES;
        this.logout = page.getByText('Logout');
}
async navigate() { 
    await this.page.goto(this.url);
  }

  async login() {
    await this.username.fill(process.env.USEREMAIL);  // Use the username stored in .env
    await  this.password.fill(process.env.PASSWORD);  // Use the password stored in .env
    await this.login_btn.click();
  }
  async getEditProgramName(){
    return this.editProgramName;
  }
  async getEditProgramDesc(){
    return this.editProgramDesc;
  }

  async validLogin(KeyOption,sheetname){
    const filepath = 'tests/TestData/PlayWright_Group2_Data.xlsx';
    const testData = getDataByKeyOption(filepath,sheetname,KeyOption);
    let userName = testData['UserNameData'];
    let password = testData['PasswordData']
    await this.username.fill(userName);
    await this.password.fill(password);
    await this.login_btn.click();
    
}
async validate(){
  const text = await this.logout.textContent();
  return text;
}

async isVisible(selector){
  
  const element = await (selector);
  return element !== null && await element.isVisible();
}
 

async notVisible(selector){
  
  const element = await (selector);
  return element !== null && await element.isVisible();
}
async navbar_order(name, selector) {
  await selector.first().waitFor({ state: 'visible' });
  const count = await selector.count();
 
  for (let i = 0; i < count; i++) {
    const element = selector.nth(i);
    const element_name = await element.textContent();
 
    if (element_name === name) {
      await expect(element).toBeVisible();
      console.log(name + " is in the " + (i+1) + " position");
      return; // Exit once the item is found and validated
    }
  }
  console.log(name + " was not found in the navbar");
}
async click(selector){
await selector.click();
}


}
module.exports= {ReusablePage}