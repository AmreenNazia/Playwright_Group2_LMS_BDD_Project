const { expect } = require('@playwright/test');
const filepath = 'tests/TestData/PlayWright_Group2_Data.xlsx';
const { getDataByKeyOption } = require('../Utilities/ExcelUtils');
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
    const sheetName = 'Login';
    // const keyOption = 'ValidCredential';
    
    const testData = getDataByKeyOption(filepath,sheetname,KeyOption);
    let userName = testData['UserNameData'];
    console.log(userName)
    let password = testData['PasswordData']
    
    console.log(password)

    if(userName === undefined || password === undefined){
        userName = '';
        password = '';
    }
    
    await this.username.fill(userName);
    await this.password.fill(password);
    await this.login_btn.click();
    
}
async validate(){
  const text = await this.logout.textContent();
  return text;
}

}
module.exports= {ReusablePage}