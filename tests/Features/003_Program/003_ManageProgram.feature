 
Feature: Manage Program Page validation

Background: 
Given Admin is logged in to LMS Portal


Scenario:Verify heading in manage program
Given Admin is logged in to LMS Portal
When Admin clicks Program on the navigation bar
Then Admin should see heading " Manage Program"

Scenario:Verify view details of programs
Given Admin is logged in to LMS Portal
When Admin clicks Program on the navigation bar
Then Admin should able to see Program name, description, and status for each program

Scenario:Verify the Multiple Delete button state 
Given Admin is logged in to LMS Portal
When Admin clicks Program on the navigation bar
Then Admin should see a Delete button in left top is disabled


Scenario:Verify the Search button 
Given Admin is logged in to LMS Portal
When Admin clicks Program on the navigation bar
Then Admin should see Search bar with text as "Search..."

Scenario: Verify column header name of data table
Given Admin is logged in to LMS Portal
When Admin clicks Program on the navigation bar
Then Admin should see data table with column header on the Manage Program Page as  Program Name, Program Description, Program Status, Edit/Delete

 
Scenario: Verify checkbox default state beside Program Name column header
Given Admin is logged in to LMS Portal
When Admin clicks Program on the navigation bar
Then Admin should see checkbox default state as unchecked beside Program Name column as header
 
Scenario: Verify checkboxes default state beside each Program names in the data table 
Given Admin is logged in to LMS Portal
When Admin clicks Program on the navigation bar
Then Admin should see check box default state as unchecked on the left side in all rows against program name 
 
Scenario: Verify Sort icon in manage program
Given Admin is logged in to LMS Portal
When Admin clicks Program on the navigation bar
Then Admin should see the sort arrow icon beside to each column header except Edit and Delete 
 


































