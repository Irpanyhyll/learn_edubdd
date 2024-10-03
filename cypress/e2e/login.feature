Feature: Login to Application

    as a valid user
    i want to login into Application

    Scenario: Valid Login
        Given I open login page
        When I submit login
        Then I should see homepage
        