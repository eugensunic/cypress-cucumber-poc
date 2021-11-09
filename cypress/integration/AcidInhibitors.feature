Feature: PPIs for life

    I want to inspect the page

    Scenario: Inspecting the page
        Given I go to "https://ppisforlife.com/#/posts"
        When I see title posts "home"
        And I see text "User"
        Then I see link by the name "URL"