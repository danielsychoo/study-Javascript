Feature: Google search
    Scenario: Googling remarkablemark.
        Given I am on the Google homepage
        When I search for remarkablemark
        Then the page title is remarkablemark - Google Search