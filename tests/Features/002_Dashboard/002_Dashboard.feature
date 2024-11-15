
Feature: Validating Dashboard Page
    Background:
        Given Admin gives the correct LMS portal URL

    Scenario:  Verify after login Admin lands on dashboard page
        Given Admin is in login Page
        When Admin enter valid username and password from the scenario "<KeyOption>" and "<sheetname>" and clicks login button
        Then Admin should land on dashboard page.
        Examples:
            | KeyOption       | sheetname |
            | ValidCredential | Login     |

    Scenario: Verify LMS title
        Given Admin is in login Page
        When Admin enter valid username and password from the scenario "<KeyOption>" and "<sheetname>" and clicks login button
        Then Admin should see LMS -Learning management system as title

        Examples:
            | KeyOption       | sheetname |
            | ValidCredential | Login     |

    Scenario: Verify LMS title alignment
        Given Admin is in login Page
        When Admin enter valid username and password from the scenario "<KeyOption>" and "<sheetname>" and clicks login button
        Then LMS title should be on the top left corner of page
        Examples:
            | KeyOption       | sheetname |
            | ValidCredential | Login     |

    Scenario: Validate navigation bar text
        Given Admin is in login Page
        When Admin enter valid username and password from the scenario "<KeyOption>" and "<sheetname>" and clicks login button
        Then Admin should see correct spelling in navigation bar text
        Examples:
            | KeyOption       | sheetname |
            | ValidCredential | Login     |

    Scenario: Validate LMS title has correct spelling and space
        Given Admin is in login Page
        When Admin enter valid username and password from the scenario "<KeyOption>" and "<sheetname>" and clicks login button
        Then Admin should see correct spelling and space in LMS title
        Examples:
            | KeyOption       | sheetname |
            | ValidCredential | Login     |

    Scenario: Validate navigation bar order 1st program
        Given Admin is in login Page
        When Admin enter valid username and password from the scenario "<KeyOption>" and "<sheetname>" and clicks login button
        Then Admin should see "Program" in the 1st place
        Examples:
            | KeyOption       | sheetname |
            | ValidCredential | Login     |
    Scenario: Validate navigation bar order 2nd batch
        Given Admin is in login Page
        When Admin enter valid username and password from the scenario "<KeyOption>" and "<sheetname>" and clicks login button
        Then Admin should see "Batch" in the 2nd place
        Examples:
            | KeyOption       | sheetname |
            | ValidCredential | Login     |
    Scenario: Validate navigation bar order 3rd class
        Given Admin is in login Page
        When Admin enter valid username and password from the scenario "<KeyOption>" and "<sheetname>" and clicks login button
        Then Admin should see "Class" in the 3rd place
        Examples:
            | KeyOption       | sheetname |
            | ValidCredential | Login     |
    Scenario: Validate navigation bar order 4th Logout
        Given Admin is in login Page
        When Admin enter valid username and password from the scenario "<KeyOption>" and "<sheetname>" and clicks login button
        Then Admin should see "Logout" in the 4th place
        Examples:
            | KeyOption       | sheetname |
            | ValidCredential | Login     |