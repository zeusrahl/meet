# FEATURE 2: SHOW/HIDE AN EVENT'S DETAILS
## Scenario 1: An event element is collapsed by default
As a user,
I should be able to view all the events collapsed when I open the app
so that I can view many events and make a selection

Given user has not opened an event
When the log into the app initially,
Then the user should see possible events in a collapsed state.

## Scenario 2: User can expand an event to see its details
As a user,
I should be able to expand an event I choose
so that I can view the details.

Given a user see's an event they are interested in
When the user clicks on that event,
Then they need be able to view more details about the event.

## Scenario 3: User can collapse an event to hide its details
As a user,
I should be able to collapse the even I have open
so that I can view the other events from the list.

Given user has an event open
When they are done reading about the event,
Then they will collapse the event detail to see all the events again.

# FEATURE 3: SPECIFY NUMBER OF EVENTS
## Scenario 1: When user hasn’t specified a number, 32 is the default number
As a user,
I should be able to see 32 events on my browser
so that I can have a good selection to pick from.

Given a user has not specified a number of visible events
When the user logs in, by default,
Then they will see 32 events on their homescreen

## Scenario 2: User can change the number of events they want to see
As a user,
I should be able increase or decrease the number of events shown on a page
so I have control how much information I am able to see as one time. 

Given a user wants to change the amount of visible events
When they want either more or less events to choose from,
Then the user should be able to modify the amount of visible events on the homescreen.

# FEATURE 4: USE THE APP WHEN OFFLINE
## Scenario 1: Show cached data when there’s no internet connection
As a user,
I should be able to see the last searched result of events
so that I do not need to be connected to the internet to find the event I want

Given a user does not have access to internet
When the user opens the app
Then they should be able to see the previously cached data of events.

## Scenario 2: Show error when user changes the settings (city, time range)
As a user,
I should be able to view only the city and time range I last looked for
so that I can have a reliable data from my last use.

Given a user does not have access to the internet
When they try to change the settings of their search
Then they should get an error message.

# FEATURE 5: DATA VISUALIZATION
## Scenario 1: Show a chart with the number of upcoming events in each city
As a user,
I should be able to compare the different events from different cities
so that I can make plans according to where I will be traveling to or from.

Given user wants to compare the amount of events from different cities
When the userchanges the parameters to view multiple cities for upcoming events
Then a chart should show the user the amount of upcoming events for the cities
