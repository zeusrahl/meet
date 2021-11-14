import React from "react";
import { shallow } from "enzyme";
import NumberOfEvents from "../NumberOfEvents";


describe('<NumberOfEvents /> component', () => {
  let NumberOfEventsWrapper;

  beforeAll(() => {
    NumberOfEventsWrapper = shallow(<NumberOfEvents />);
  })

  test('textbox is rendered', () => {
    expect(NumberOfEventsWrapper.find('.eventsNumber')).toHaveLength(1);
  });

  test('render text input correctly', () => {
    const numberOfEvents = NumberOfEventsWrapper.state('numberOfEvents');
    expect(NumberOfEventsWrapper.find('.eventsNumber').prop('value')).toBe(numberOfEvents);
  });
});