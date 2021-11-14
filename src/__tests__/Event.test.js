import React from "react";
import { shallow } from "enzyme";
import Event from "../Event";
import { mockData } from '../mock-data';

describe('<Event /> component', () => {
  let EventWrapper;
  let events = mockData[0];
  
  beforeAll(() => {
    EventWrapper = shallow(<Event event={events} />);
  });

  test('the element is collapsed by default', () => {
    EventWrapper.setState({
      collapsed: true,
    });
    expect(EventWrapper.find('.extra-details').hasClass("hide")).toEqual(true);
  });

  test('renders summary in the collapsed event element', () => {
    expect(EventWrapper.find('.summary')).toHaveLength(1);
  });

  test('renders date of event while collapsed', () => {
    expect(EventWrapper.find('.start-date')).toHaveLength(1);
  });

  test('renders location in the collapsed event element', () => {
    expect(EventWrapper.find('.location')).toHaveLength(1);
  });

  test('renders a button to show for details', () => {
    expect(EventWrapper.find('.show-details-btn')).toHaveLength(1);
  });

  test('clicking on "Show Details" button should show extra details', () => {
    EventWrapper.setState({
      collapsed: true,
    });
    EventWrapper.find('.show-details-btn').simulate('click');
    expect(EventWrapper.state('collapsed')).toBe(false);
  });

  test('clicking on "Hide Details" button should show extra details', () => {
    EventWrapper.setState({
      collapsed: false,
    });
    EventWrapper.find('.hide-details-btn').simulate('click');
    expect(EventWrapper.state('collapsed')).toBe(true);
  });
})
