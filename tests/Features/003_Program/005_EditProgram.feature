
Feature: Manage Program - Edit Program

Background: Admin is on program module after reaching dashboard
Given Admin is logged in to LMS Portal
When Admin clicks Program on the navigation bar

 
Scenario Outline: Verify Edit option
When Admin clicks on Edit option for particular program from "<KeyOption>" and "<sheetname>"
Then Admin lands on Program details form
Examples:
| KeyOption       | sheetname |
| editprogram | Program   |

Scenario Outline: Verify title of the pop up window
When Admin clicks on Edit option for particular program from "<KeyOption>" and "<sheetname>"
Then Admin should see window title as "Program Details"
Examples:
| KeyOption       | sheetname |
| editprogram | Program   |

Scenario Outline: Verify mandatory fields with red "*" mark 
When Admin clicks on Edit option for particular program from "<KeyOption>" and "<sheetname>"
Then Admin should see red "*" mark beside mandatory field "Name"

Examples:
| KeyOption       | sheetname |
| editprogram | Program   |
Scenario Outline: Verify edit Program Name
When Admin edits the program name and click on save button from "<KeyOption>" and "<sheetname>"
Then Updated program name is seen by the Admin
Examples:
| KeyOption       | sheetname |
| editprogram | Program   |

 
Scenario Outline: Verify edit Description
When Admin edits the description text and click on save button from "<KeyOption>" and "<sheetname>"
Then Admin can see the description is updated
Examples:
| KeyOption       | sheetname |
| editprogram | Program   |

Scenario Outline: Verify edit Status
When Admin can change the status of the program from "<KeyOption>" and "<sheetname>" and click on save button
Then Status updated can be viewed by the Admin
Examples:
| KeyOption       | sheetname |
| editprogram | Program   |


Scenario Outline: Verify Admin is able to click Save
When Admin click on save button of the updated program from "<KeyOption>" and "<sheetname>" 
Then Admin can see the updated program details
Examples:
| KeyOption       | sheetname |
| editprogram | Program   |


Scenario Outline: Verify Admin is able to click Cancel
When Admin click on cancel button of the updated program from "<KeyOption>" and "<sheetname>" 
Then Admin can see the Program details form disappears
Examples:
| KeyOption       | sheetname |
| editprogram | Program   |

Scenario Outline: Verify edited Program details
When Admin searches with newly updated Program Name from "<KeyOption>" and "<sheetname>" 
Then Admin verifies that the details are correctly updated from "<KeyOption>" and "<sheetname>"  
Examples:
| KeyOption       | sheetname |
| editprogram | Program   |
 
Scenario Outline: Verify close the window with "X" 
When Admin Click on X button of the updated program from "<KeyOption>" and "<sheetname>" 
Then Admin can see Program Details form disappears
Examples:
| KeyOption       | sheetname |
| editprogram | Program   |