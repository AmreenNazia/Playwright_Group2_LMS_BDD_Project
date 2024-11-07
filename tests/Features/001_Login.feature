
Feature:
Login Page Verification

Background: 
Given Admin gives the correct LMS portal URL

Scenario Outline: Validate login with valid credentials
Given Admin is in login Page
When Admin enter valid "<userName>" and "<password>" and clicks login button 
Then Admin should land on dashboard page.  

Examples:
|   userName                    |   password        |
|   playwrightuser@gmail.com    |   Playwright@1234 |
