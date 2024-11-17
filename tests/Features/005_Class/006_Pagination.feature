Feature: Verify Pagination
    
Background: Admin is on the Manage Class page after login
Given Admin is logged in to LMS Portal
When Admin clicks on program in dashboard and admin lands on class Page


Scenario: Verify Next page link(>)
When Admin clicks Next page link on the class table 
Then Admin should see the next page record on the table  with Pagination has next active link enabled

Scenario: Verify Last page link(>>)
When Admin clicks Last page link
Then Admin should see the last page record on the table with Next page link are disabled

Scenario: Verify First page link(<)
When Admin clicks First page link
Then Admin should see the previous page record on the table with pagination has previous page link enabled 

Scenario: Verify Start page link(<<)
When Admin clicks Start page link
Then Admin should see the very first page record on the table with Previous page link are disabled 