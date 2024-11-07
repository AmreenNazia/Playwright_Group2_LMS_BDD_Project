import { createBdd } from "playwright-bdd";
const {Given, When, Then} = createBdd();
const {readExcelData} = require('../Utilities/ExcelUtils');
const testData = readExcelData('tests/TestData/TestData.xlsx', 'Login')
 


// 1. Missing step definition for "tests\Features\001_Login.feature:6:1"
Given('Admin gives the correct LMS portal URL', async ({testContext}) => {
  // const { page } = testContext;
    console.log("Admin is in the LMS Portal");
  });
  
  // 2. Missing step definition for "tests\Features\001_Login.feature:9:1"
  Given('Admin is in login Page', async (testContext) => {
    // const { page } = testContext;
    console.log("Admin is in the login page")
  });
  
  // 3. Missing step definition for "tests\Features\001_Login.feature:10:1"
  When('Admin enter valid {string} and {string} and clicks login button', async ( arg, arg1) => {
   
    
  });
  
  // 4. Missing step definition for "tests\Features\001_Login.feature:11:1"
  Then('Admin should land on dashboard page.', async () => {
    // ...
  });

  When('Admin enter valid username and password from excel file and clicks login button', async (testContext) => {
    const { page } = testContext;
    const credentials = testData.find(data => data.Key === 'userName');
    const password = testData.find(data => data.Key === 'password');
    console.log(credentials.Value);
    console.log(password.Value);
    await page.goto('https://playwright-frontend-app-a9ea85794ad9.herokuapp.com/login'); 
   
    // await this.page.pause();
    await page.locator('#username').fill(credentials.Value);
    await page.locator('#password').fill(password.Value);
  });
  