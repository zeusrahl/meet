Feature: Specify number of events

Scenario: When user hasn’t specified a number, 32 is the default number
Given a user has not specified a number of visible events
When the user logs in, by default,
Then they will see 32 events on their homescreen.

Scenario: User can change the number of events they want to see
Given a user wants to change the amount of visible events
When they specify the number of events shown,
Then a list of events of the specified number should be shown to the user.