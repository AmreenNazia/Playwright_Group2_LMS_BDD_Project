const { readExcelFile } = require('../Utilities/ExcelUtils');  // Import the function
const { expect } = require('playwright/test');

 class LoginPage {
    constructor(page) {
        this.page = page;
        this.username = page.locator('#username');
        this.password = page.locator('#password');
        this.login_btn = page.locator('#login');
       this.logout = page.getByText('Logout');
    
        
    }

    async goTo() {
        await this.page.goto('https://playwright-frontend-app-a9ea85794ad9.herokuapp.com/login');
    }

    async loginPage() {
        // Wait for the data from the Excel file
        const testData = readExcelFile('tests/TestData/PlayWright_Group2_Data.xlsx', 'Login');
        const username = testData.find(data => data.Key === 'userName');
        const password = testData.find(data => data.Key === 'password');
        await this.username.fill(username.Value);
        await this.password.fill(password.Value);
        await this.login_btn.click();
    }

    async validate(){
        
       await expect(this.logout).toBeVisible();
    }
}
module.exports = {LoginPage}