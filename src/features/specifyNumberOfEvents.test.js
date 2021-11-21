import React from "react";
import { loadFeature, defineFeature } from "jest-cucumber";
import NumberOfEvents from '../NumberOfEvents';
import { shallow } from "enzyme";

const feature = loadFeature('./src/features/specifyNumberOfEvents.feature');

defineFeature(feature, test => {
  test('When user hasn’t specified a number, 32 is the default number', ({ given, when, then }) => {
    given('a user has not specified a number of visible events', () => {

    });

    when('the user logs in, by default,', () => {

    });

    let NumberOfEventsWrapper;
    then('they will see 32 events on their homescreen.', () => {
      NumberOfEventsWrapper = shallow(<NumberOfEvents />);
      expect(NumberOfEventsWrapper.state('numberOfEvents')).toBe(32);
    });
  });

  test('User can change the number of events they want to see', ({ given, when, then }) => {
    given('a user wants to change the amount of visible events', () => {

    });

    let NumberOfEventsWrapper
    when('they specify the number of events shown,', () => {
      NumberOfEventsWrapper = shallow(<NumberOfEvents updateEvents={() => {}} />)
      NumberOfEventsWrapper.setState({ numberOfEvents: 12 });
    });

    then('a list of events of the specified number should be shown to the user.', () => {
      expect(NumberOfEventsWrapper.state('numberOfEvents')).toBe(12);
    });
  });
});