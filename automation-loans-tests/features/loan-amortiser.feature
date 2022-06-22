Feature: The Amortiser application

  Scenario Outline: As a user, I can calculate prospective loans using the amortiser application

    Given I am on the amortiser application
    When I enter values  <loan-amount> <loan-term> <interest-rate>
    Then I should see loan calculations for the period specified

    Examples:
      | loan-amount | loan-term   | interest-rate|
      | 100         |  12         | 2 |
      | 1000        |  24         | 3 |
