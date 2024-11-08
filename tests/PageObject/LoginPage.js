import { readExcelFile } from "../Utilities/ExcelUtils";  // Import the function

 class LoginPage {
    constructor(page) {
        this.page = page;
        this.username = page.locator('#username');
        this.password = page.locator('#password');
        this.login_btn = page.locator('#login');
        this.logout_btn = page.locator('#logout');
        
    }

    async goTo() {
        await this.page.goto('https://playwright-frontend-app-a9ea85794ad9.herokuapp.com/login');
    }

    async loginPage() {
        //readData from excelFile
        const testData = await readExcelFile('/Users/amreennaziasyed/Downloads/Amreen.xlsx', 'Login');

        // If testData is empty or no data found, throw an error
        if (testData.length === 0) {
            throw new Error('No test data found in the Excel sheet');
        }


        await this.username.fill(username);
        await this.password.fill(password);
        await this.login_btn.click();
    }

    async validation(){

        expect(await this.logout_btn).tobeDisplayed();
        

    }
}
module.exports = {LoginPage}