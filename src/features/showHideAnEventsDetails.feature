Feature: Show/Hide event details

Scenario: An event element is collapsed by default.
Given user has not opened an event
When the user logs into the app initially,
Then the user should see possible events in a collapsed state.

Scenario: User can expand an event to see its details.
Given a user see's an event they are interested in
When the user clicks on that event,
Then they need be able to view more details about the event.

Scenario: User can collapse an event to hide its details.
Given user has an event open
When they are done reading about the event,
Then they will collapse the event detail to see all the events again.