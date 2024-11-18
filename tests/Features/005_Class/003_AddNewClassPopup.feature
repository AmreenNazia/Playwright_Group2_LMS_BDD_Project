

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

 
Scenario:Check no classes value added when selecting class dates
Given Admin is on the Class Popup window
When Admin selects class date in date picker  
Then Admin should see no of class value is added automatically

  
Scenario:Check weekend dates are disabled in calender
Given Admin is on the Class Popup window
When Admin clicks date picker
Then Admin should see weekends dates are disabled to select
 
Scenario:Check if class is created when only optional fields are entered with valid data
Given Admin is on the Class Popup window
When Admin skips to add value in mandatory field and enter only the optional field
Then Admin should see error message below the test field and the field will be highlighed in red color

 
# Scenario:check if class is created when invalid data is entered in all of the fields
# Given Admin is on the Class Popup window
# When Admin enters invalid data in all of the fields in the form and clicks on save button
# Then Admin gets error message and class is not created


Scenario:Empty form submission
Given Admin is on the Class Popup window
When Admin clicks on save button without entering data 
Then class wont be created and Admin gets error message
 
Scenario: Validate Cancel/Close(X) icon on class Details form
Given Admin is on the Class Popup window
When Admin clicks Cancel/Close(X) Icon on Admin Details form
Then Class Details popup window should be closed without saving

Scenario Outline:Validate Save button on class Details form
Given Admin is on the Class Popup window
When Admin enters mandatory fields in the form and clicks on save button from "<KeyOption>" and "<sheetName>"
Then Admin gets message Class added Successfully 
Examples:
|KeyOption|sheetName|
|validInput|Class|
