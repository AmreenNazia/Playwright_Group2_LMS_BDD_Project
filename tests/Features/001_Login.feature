
Feature:
Login Page Verification

Background: 
Given Admin gives the correct LMS portal URL


Scenario: Validate login with valid credentials
Given Admin is in login Page
When Admin enter valid username and password from excel file and clicks login button 
Then Admin should land on dashboard page.  