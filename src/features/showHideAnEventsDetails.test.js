import React from 'react';
import { shallow } from 'enzyme';
import Event from '../Event';
import EventList from '../EventList';
import { mockData } from '../mock-data';
import { loadFeature, defineFeature } from 'jest-cucumber';
// import { extractLocations } from '../api';

const feature = loadFeature('./src/features/showHideAnEventsDetails.feature');

defineFeature(feature, test => {
  let EventWrapper;
  let EventListWrapper;
  test('An event element is collapsed by default.', ({ given, when, then }) => {
    given('user has not opened an event', () => {
      EventListWrapper = shallow(<EventList events={mockData} />);
      expect(EventListWrapper.find('ul.EventList')).toHaveLength(1);
    });

    when('the user logs into the app initially,', () => {});

    then('the user should see possible events in a collapsed state.', () => {
      EventWrapper = shallow(<Event event={mockData[0]} />);
      expect(EventWrapper.find('.event .extra-details').hasClass('hide')).toBe(true);
    });
  });

  test('User can expand an event to see its details.', ({ given, when, then }) => {
    given('a user see\'s an event they are interested in', () => {
      EventListWrapper = shallow(<EventList events={mockData} />);
      expect(EventListWrapper.find('ul.EventList')).toHaveLength(1);
    });

    when('the user clicks on that event,', () => {
      EventWrapper = shallow(<Event event={mockData[0]} />);
      EventWrapper.find('.show-details-btn').simulate('click');
    });

    then('they need be able to view more details about the event.', () => {
      EventWrapper = shallow(<Event event={mockData[0]} />);
      EventWrapper.setState({ collapsed: false });
      expect(EventWrapper.find('.event .extra-details').hasClass('hide')).toBe(false);
    });
  });

  test('User can collapse an event to hide its details.', ({ given, when, then }) => {
    given('user has an event open', () => {
      EventWrapper = shallow(<Event event={mockData[0]} />);
      EventWrapper.setState({ collapsed: false });
      expect(EventWrapper.find('.event .extra-details').hasClass('hide')).toBe(false);
    });

    when('they are done reading about the event,', () => {

    });

    then('they will collapse the event detail to see all the events again.', () => {
      EventWrapper = shallow(<Event event={mockData[0]} />);
      EventWrapper.setState({ collapsed: false });
      EventWrapper.find('.hide-details-btn').simulate('click');
      expect(EventWrapper.find('.event .extra-details').hasClass('hide')).toBe(true);
    });
  });
});