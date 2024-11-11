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
}
async navigate() { 
    await this.page.goto(this.url);
  }

  async login() {
    await this.username.fill(process.env.USERNAME);  // Use the username stored in .env
    await  this.password.fill(process.env.PASSWORD);  // Use the password stored in .env
    await this.login_btn.click();
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

}

module.exports= {ReusablePage}