import { createBdd } from "playwright-bdd";
const {Given, When, Then} = createBdd();

// 1. Missing step definition for "tests\Features\001_Login.feature:6:1"
Given('Admin gives the correct LMS portal URL', async ({page}) => {
    console.log("Admin is in the LMS Portal");
  });
  
  // 2. Missing step definition for "tests\Features\001_Login.feature:9:1"
  Given('Admin is in login Page', async ({page}) => {
    console.log("Admin is in the login page")
  });
  
  // 3. Missing step definition for "tests\Features\001_Login.feature:10:1"
  When('Admin enter valid {string} and {string} and clicks login button', async ({}, arg, arg1) => {
    
  });
  
  // 4. Missing step definition for "tests\Features\001_Login.feature:11:1"
  Then('Admin should land on dashboard page.', async ({}) => {
    // ...
  });
  