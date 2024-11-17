
Feature:Add New Class popup
Background: :
Given Admin is on the Manage class page after login

Scenario Outline:Admin is on the Manage Class page after login
Given Admin is on the Class Popup window
When Admin enters mandatory fields in the form and clicks on save button from "<KeyOption>" and "<sheetName>"
Then Admin gets message Class added Successfully 
Examples:
|KeyOption|sheetName|
|validInput|Class|



