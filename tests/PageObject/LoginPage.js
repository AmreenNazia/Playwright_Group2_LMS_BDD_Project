const { getDataByKeyOption } = require('../Utilities/ExcelUtils')
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

    async validLogin(keyOption,sheetName){
        const filepath = 'tests/TestData/PlayWright_Group2_Data.xlsx';
        // const sheetName = 'Login';
        const testData = getDataByKeyOption(filepath,sheetName,keyOption);
        const userName = testData['UserNameData'];
        console.log(userName)
        const password = testData['PasswordData']
        console.log(password)
        await this.username.fill(userName);
        await this.password.fill(password);
        await this.login_btn.click();
    }

    async validate(){
        const text = await this.logout.textContent();
        return text;
    }
    
    async verifyURL() {
            try {
                const response = await this.page.goto('https://playwright-frontend-app-a9ea8579ad9.herokuapp.com/logi', {
                    timeout: 60000, // Set a longer timeout if needed
                    waitUntil: 'load'
                });
                await this.page.pause();
        
                if (response) {
                    const status = response.status();
                    if (status >= 400) {
                        console.log(`This is a Broken URL with status: ${status}`);
                    }
                } else {
                    console.log('No response from the URL');
                }
            } catch (error) {
                console.error('Navigation error:', error);
            }
        }
        
}
module.exports = {LoginPage}