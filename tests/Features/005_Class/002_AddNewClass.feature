 
Feature: Add New Class  
Background: 
Given Admin is on the Manage class page after login

Scenario:Admin Is on the Manage class page after login
Given Admin is on the Manage class page
When Admin clicks add new class under the class menu bar.
Then  Admin should see a popup open for class details with empty form along with <SAVE> and <CANCEL> button and Close(X) Icon on the top right corner of the window

Scenario:Validate input fields and their text boxes in Class details form 
Given Admin is on the Manage class page
When Admin clicks add new class under the class menu bar.
Then  Admin should see few input fields and their respective text boxes in the class details window







