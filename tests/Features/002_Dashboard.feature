
Feature: Validating Dashboard Page
    Background:
        Given Admin gives the correct LMS portal URL

    Scenario:  Verify after login Admin lands on dashboard page
        Given Admin is in login Page
        When Admin enter valid username and password from excel file and clicks login button 
        Then Admin should land on dashboard page.

    Scenario: Verify LMS title
        Given Admin is in login Page
        When Admin enter valid username and password from excel file and clicks login button 
        Then Admin should see LMS -Learning management system as title
    
    Scenario: Verify LMS title alignment
       Given Admin is in login Page
        When Admin enter valid username and password from excel file and clicks login button 
        Then LMS title should be on the top left corner of page

    Scenario: Validate navigation bar text
       Given Admin is in login Page
        When Admin enter valid username and password from excel file and clicks login button 
        Then Admin should see correct spelling in navigation bar text

    Scenario: Validate LMS title has correct spelling and space
       Given Admin is in login Page
        When Admin enter valid username and password from excel file and clicks login button 
        Then Admin should see correct spelling and space in LMS title
 
    Scenario: Validate navigation bar order 1st program
       Given Admin is in login Page
        When Admin enter valid username and password from excel file and clicks login button 
        Then Admin should see program in the 1st place

    Scenario: Validate navigation bar order 2nd batch
       Given Admin is in login Page
        When Admin enter valid username and password from excel file and clicks login button 
        Then Admin should see program in the 2nd place
    
    Scenario: Validate navigation bar order 3rd class
       Given Admin is in login Page
        When Admin enter valid username and password from excel file and clicks login button 
        Then Admin should see program in the 3rd place

    Scenario: Validate navigation bar order 4th Logout
       Given Admin is in login Page
        When Admin enter valid username and password from excel file and clicks login button 
        Then Admin should see program in the 4th place
