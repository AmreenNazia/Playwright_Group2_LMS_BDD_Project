Feature: Edit New class
    
Background: Admin is on the Manage Class page after login
Given Admin is logged in to LMS Portal
When Admin clicks on program in dashboard and admin lands on class Page


Scenario: Validate row level edit icon
When Admin clicks on the edit icon 
Then A new pop up with class details appears


Scenario: Check disabled  batch name
When Admin clicks the edit icon 
Then Admin should see batch name field is disabled


Scenario: Check disabled class topic
When Admin clicks the edit icon 
Then Admin should see class topic field is disabled

# @only
# Scenario Outline: Check if the fields are updated with valid data
# Given Admin is on the Edit Class Popup window
# When Update the fields with valid "<KeyOption>" data from excel "<SheetName>"  and click save
# Then Admin gets message "class details updated Successfully " and see the updated values in data table

# Examples:
# | KeyOption             |   SheetName        |
# |  ValidEditData           |   Class        |

# Scenario Outline: Check if the fields are updated with invalid values
# Given Admin is on the Edit Class Popup window
# When Update the fields with invalid "<KeyOption>" data from excel "<SheetName>" and click save
# Then Admin should get Error message 

# Examples:
# | KeyOption               |   SheetName        |
# |  InValidData           |   Class        |

# Scenario Outline: Check if the mandatory fields are updated with valid data
# Given Admin is on the Edit Class Popup window
# When Update the mandatory fields with valid "<KeyOption>" data from excel "<SheetName>"and click save
# Then Admin gets message "Class details updated Successfully " and see the updated values in data table

# Examples:
# | KeyOption                  |   SheetName        |
# |  MadatoryValid             |   Class        |



Scenario Outline: Check if the optional fields are updated with valid data
Given Admin is on the Edit Class Popup window
When Update the optional fields with valid "<KeyOption>" data from excel "<SheetName>" and click save
Then Admin gets message Class details updated Successfully  and see "<KeyOption>" and "<SheetName>" the updated values in data table

Examples:
| KeyOption                  |   SheetName        |
|  OptionalValid             |   Class        |


Scenario Outline: Validate invalid values in the text fields
Given Admin is on the Edit Class Popup window
When Admin enters only numbers or special char in the text fields for "<KeyOption>" data from excel "<SheetName>"
Then Admin should get Error message 
Examples:
| KeyOption                          |   SheetName        |
|  NumericOrAlphaData               |   Class        |




Scenario: Validate Cancel button on Edit popup
Given Admin is on the Edit Class Popup window
When Admin clicks Cancel button on edit popup
Then Admin can see the class details popup disappears and can see nothing changed for particular Class
