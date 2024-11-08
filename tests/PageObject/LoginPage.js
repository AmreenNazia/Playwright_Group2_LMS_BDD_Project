const { assert } = require('console');
const { readExcelFile } = require('../Utilities/ExcelUtils');  // Import the function
const { expect } = require('playwright/test');

 class LoginPage {
    constructor(page) {
        this.page = page;
        this.username = page.locator('#username');
        this.password = page.locator('#password');
        this.login_btn = page.locator('#login');
       this.logout = page.getByText('Logout');
        // this.logout_btn = page.locator('//div//button//span[text()="Logout"]');
        
    }

    async goTo() {
        await this.page.goto('https://playwright-frontend-app-a9ea85794ad9.herokuapp.com/login');
    }

    async loginPage() {
        // Wait for the data from the Excel file
        const testData = await readExcelFile('/Users/amreennaziasyed/Downloads/Amreen.xlsx', 'Login');
        
        // // If testData is empty or no data found, throw an error
        // if (testData.length === 0) {
        //     throw new Error('No test data found in the Excel sheet');
        // }

        // // // Log in using the first set of credentials from the test data (you can adjust this as needed)
        // const { username, password } = testData[0];  // Assuming you're using the first row's credentials

        // if (!username || !password) {
        //     throw new Error('Username or password not found in test data');
        // }
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