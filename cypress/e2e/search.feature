Feature: Search Feature

  Scenario: Successful search for a valid term
    Given I am on the Zero Web App Security homepage
    When I enter "online banking" in the search box
    Then I should see search results related to "online banking"


