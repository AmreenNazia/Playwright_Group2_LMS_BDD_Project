import { createBdd } from "playwright-bdd";
const { Given, When, Then } = createBdd();
const { POManager } = require('../PageObject/POManager'); 
const { expect } = require('@playwright/test')
const { getDataByKeyOption } = require('../Utilities/ExcelUtils');  // Import the function
let login_Page;

Given('Admin gives the correct LMS portal URL', async function () {
    login_Page = this.pageManager.getLoginPage();
    await login_Page.goTo();
    
});

Given('Admin is in login Page', async function () {
   console.log("***Admin is in the login Page**")
});

// 1. Missing step definition for "tests\Features\001_Login.feature:6:1"
Given('Admin launch the browser', async function() {
  login_Page = this.pageManager.getLoginPage();
 await login_Page.goTo();
});



When('Admin enter valid username and password from excel file and clicks login button', async function ({},KeyOption) {
   
     login_Page = this.pageManager.getLoginPage();
    await   login_Page.goTo();
    await   login_Page.validLogin(KeyOption);
});



  // 2. Missing step definition for "tests\Features\001_Login.feature:19:1"
  When('Admin enter valid username and password from excel file for the scenario {string} and clicks login button', async function({},KeyOption)  {
   
     login_Page = this.pageManager.getLoginPage();
    await   login_Page.goTo();
    await   login_Page.validLogin(KeyOption);
  });
  
  // 3. Missing step definition for "tests\Features\001_Login.feature:28:1"
  When('Admin enter invalid credentials from excel file for the Scenario {string} and clicks login button', async  function ({},KeyOption)   {
    login_Page = this.pageManager.getLoginPage();
    await   login_Page.goTo();
    await   login_Page.validLogin(KeyOption);
    
  });
  
  // 4. Missing step definition for "tests\Features\001_Login.feature:29:1"
  Then('Admin should receive an error message', async function () {
    login_Page = this.pageManager.getLoginPage();
    await login_Page.InvalidloginAssertion();
    
  });
  
//   // 5. Missing step definition for "tests\Features\001_Login.feature:38:1"
  When('Admin enter value only in password for the {string} from the exceland clicks login button', async function ({},KeyOption)  {      
    login_Page = this.pageManager.getLoginPage();
    await   login_Page.goTo();
    await   login_Page.validLogin(KeyOption);
  });

  // 1. Missing step definition for "tests\Features\001_Login.feature:47:1"
When('Admin enter value only in adminname for the {string} from the excel and clicks login button', async function ({},KeyOption) {     
  login_Page = this.pageManager.getLoginPage();
    await   login_Page.goTo();
    await   login_Page.validLogin(KeyOption);
});

  
  // 7. Missing step definition for "tests\Features\001_Login.feature:54:1"
  When('Admin try to login leaving adminname and password blank for the {string} from the excel and clicks login button', async function ({},KeyOption)  {
    login_Page = this.pageManager.getLoginPage();
    await   login_Page.goTo();
    await   login_Page.validLogin(KeyOption);
  });
  
//   // 8. Missing step definition for "tests\Features\LoginPageValidation.feature:8:1"
  Then('Admin should land on the login page', async function ()  {
    login_Page = this.pageManager.getLoginPage();
    await login_Page.goTo();
    await login_Page.signInPageValidation();
  });
  
  Then('Admin should receive an error message for the InValidEmptyUserAndPassword', async function ()  {
    await login_Page.nullUserErrorMessage();
  });
  

  // 1. Missing step definition for "tests\Features\001_Login.feature:40:1"
Then('Admin should receive an error message for null userName', async function () {
  await login_Page.InvalidloginAssertion();
});

// 2. Missing step definition for "tests\Features\001_Login.feature:48:1"
Then('Admin should receive an error message for null password', async function ()  {
  
  await login_Page.nullPasswordErrorMsg();
});
  
Given('Admin launches the browser', async function ()  {
  login_Page = this.pageManager.getLoginPage();
  await login_Page.goTo();
});

// 1. Missing step definition for "tests\Features\LoginPageValidation.feature:14:1"
When('Admin gives the invalid LMS portal URL', async function ()  {
  
  await login_Page.verifyURL();
});
  
  
  // 10. Missing step definition for "tests\Features\LoginPageValidation.feature:12:1"
  Then('Admin should recieve application error', async function ()  {
     expect(login_Page.verifyURL).toBeTruthy();
  });

  Then('HTTP response >= {int}. Then the link is broken', async function()  {
    login_Page.verifyBrokenLink();
  });
  
  // 2. Missing step definition for "tests\Features\LoginPageValidation.feature:20:1"
  Then('Admin should see correct spellings in all fields', async function ()  {
  login_Page = this.pageManager.getLoginPage();
  await login_Page.goTo();
    await login_Page.verifySpellingofFields();
  });
  
  // 3. Missing step definition for "tests\Features\LoginPageValidation.feature:24:1"
  Then('Admin should see  LMS - Learning Management System', async function ()  {
    
  });
  
//   // 4. Missing step definition for "tests\Features\LoginPageValidation.feature:28:1"
//   Then('Admin should see company name below the app name', async function ()  {
//     // ...
//   });
  
//   // 5. Missing step definition for "tests\Features\LoginPageValidation.feature:32:1"
//   Then('Admin should see {string}', async function (arg)  {
//     // ...
//   });
  
//   // 6. Missing step definition for "tests\Features\LoginPageValidation.feature:36:1"
//   Then('Admin should see two text field', async function ()  {
//     // ...
//   });
  
//   // 7. Missing step definition for "tests\Features\LoginPageValidation.feature:40:1"
//   Then('Admin should {string} in the first text field', async function ( arg)  {
//     // ...
//   });
  
//   // 8. Missing step definition for "tests\Features\LoginPageValidation.feature:44:1"
//   Then('Admin should see field mandatory \\(*) symbol next to Admin text', async function ()  {
//     // ...
//   });
  
//   // 9. Missing step definition for "tests\Features\LoginPageValidation.feature:48:1"
//   Then('Admin should {string} in the second text field', async function( arg)  {
//     // ...
//   });
  
//   // 10. Missing step definition for "tests\Features\LoginPageValidation.feature:52:1"
//   Then('Admin should see * symbol next to password text', async function ()  {
//     // ...
//   });

//   // 1. Missing step definition for "tests\Features\LoginPageValidation.feature:56:1"
// Then('Admin should see input field on the centre of the page', async function ()  {
//     // ...
//   });
  
//   // 2. Missing step definition for "tests\Features\LoginPageValidation.feature:60:1"
//   Then('Admin should see login button', async function () {
//     // ...
//   });
  
//   // 3. Missing step definition for "tests\Features\LoginPageValidation.feature:64:1"
//   Then('Admin should see Admin in gray color', async function ()  {
//     // ...
//   });
  
//   // 4. Missing step definition for "tests\Features\LoginPageValidation.feature:68:1"
//   Then('Admin should see password in gray color', async function()  {
//     // ...
//   });
  

