
const { assert } = require('console');
const { getDataByKeyOption } = require('../Utilities/ExcelUtils');  

const { expect } = require('playwright/test');
const spellchecker = require('simple-spellchecker')



 class LoginPage {
    constructor(page) {
        this.page = page;
        this.username = page.locator('#username');
        this.password = page.locator('#password');
        this.login_btn = page.locator('#login');
       this.logout = page.getByText('Logout');
       this.errorMessage = page.locator('#errormessage');
       this.signInPage = page.locator('#signin-content');
       this.signinPage = page.getByText('Please login to LMS application');
       this.userErrorMessage = page.getByText(' Please enter your user name ');
       this.passErrorMessage = page.getByText(' Please enter your password ');
       this.formPage = page.locator('.ng-untouched ng-pristine ng-invalid');
       this.links = page.locator('link');
        // this.logout_btn = page.locator('//div//button//span[text()="Logout"]');

    }

    async goTo() {
        await this.page.goto('https://playwright-frontend-app-a9ea85794ad9.herokuapp.com/login');
         
    }
    // async InvaligoTo() {
    //     await this.page.goto('https://playwright-frontend-app-a9ea8579ad9.herokuapp.com/logi');
    // }



    async loginPage() {

        
        // Wait for the data from the Excel file
        // const testData = await readExcelFile('/Users/amreennaziasyed/Downloads/Amreen.xlsx', 'Login');
        // const filepath = 'tests/TestData/PlayWright_Group2_Data.xlsx';
        // const sheetName = 'Login';
        // const keyOption = 'ValidCredential'

        // const testData = getDataByKeyOption(filepath,sheetName,keyOption);
        // const userName = testData['UserNameData'];
        // console.log(userName)
        // const password = testData['PasswordData']
        // console.log(password)
        // // If testData is empty or no data found, throw an error
        // if (testData.length === 0) {
        //     throw new Error('No test data found in the Excel sheet');
        // }

        // // // Log in using the first set of credentials from the test data (you can adjust this as needed)
        // const { username, password } = testData[0];  // Assuming you're using the first row's credentials

        // if (!username || !password) {
        //     throw new Error('Username or password not found in test data');
        // }
        // const username = testData.find(data => data.Key === 'userName');
        // const password = testData.find(data => data.Key === 'password');

        await this.username.fill(userName);
        await this.password.fill(password);
        await this.login_btn.click();
    }

    async validate(){
        const text = await this.logout.textContent();
        return text;
    }

    async validLogin(keyOption){
        const filepath = 'tests/TestData/PlayWright_Group2_Data.xlsx';
        const sheetName = 'Login';
        // const keyOption = 'ValidCredential';
        
        const testData = getDataByKeyOption(filepath,sheetName,keyOption);
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
    

    async InvalidloginAssertion(){
        const filepath = 'tests/TestData/PlayWright_Group2_Data.xlsx';
        const sheetName = 'Login';
        const keyOption = 'InvalidCredential';
        const testData = getDataByKeyOption(filepath,sheetName,keyOption);
        const expErrorMsg = testData['ErrorMessage']
        await expect (this.errorMessage).toContainText(expErrorMsg);

    }
    async nullUserErrorMessage(){
        const filepath = 'tests/TestData/PlayWright_Group2_Data.xlsx';
        const sheetName = 'Login';
        const keyOption = 'InValidNullUsername'
        const testData = getDataByKeyOption(filepath,sheetName,keyOption);
        const expErrorMsg = testData['ErrorMessage']
        await expect(this.userErrorMessage).toContainText(expErrorMsg);
    
    }
    async nullPasswordErrorMsg(){
        const filepath = 'tests/TestData/PlayWright_Group2_Data.xlsx';
        const sheetName = 'Login';
        const keyOption = 'InValidNullPassword'
        const testData = getDataByKeyOption(filepath,sheetName,keyOption);
        const expErrorMsg = testData['ErrorMessage']
        await expect(this.passErrorMessage).toContainText(expErrorMsg);
    }
    async signInPageValidation(){
        await expect(this.signinPage).toBeVisible();
    }
    async getuserErrorMessage(){
        return userErrorMessage;
    }
    async getpassErrorMessage(){
        return passErrorMessage;
    }
    
    async geterrorMessage(){
        return errorMessage;
    }

    async verifyURL(){
        try {
            await this.page
       const response =  await this.page.goto('https://playwright-frontend-app-a9ea8579ad9.herokuapp.com/logi', {
            timeout: 60000, // Set a longer timeout if needed
            waitUntil: 'load'
          });
          await this.page.pause();
        
        if (response){
            const status = response.status();
            if(status >= 400){
                console.log(`This is a Broken URL ${status}`);
            }
        }
        else{
            console.log('No response from the URL')
        }
    }
    catch(error){
        console.error('Navigation error:', error);

    }

}

  async verifySpellingofFields(){
     expect(this.signinPage).toHaveText('Please login to LMS application');
     expect(this.username).toHaveText('User');
     expect(this.password).toHaveText('Password')
  }

  

  async verifyBrokenLink(){
    const linksCount = await this.links.count();
    for (let i = 0; i < linksCount; i++ ){
        const url = await (this.links).nth(i).getAttribute('href');
        if(url){
            try {
        // Verify the URL using axios to make an HTTP request
        const response = await axios.get(url);
        console.log(`URL: ${url} - Status: ${response.status}`);
      } catch (error) {
        console.error(`Error with URL: ${url} - ${error.message}`);
      }
    } else {
      console.warn('Link without href found');
    }
  }
        }
    }
  

 

module.exports = {LoginPage}