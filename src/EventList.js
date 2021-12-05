import React, { Component } from 'react';
import { InfoAlert } from './Alert';
import Event from './Event';
class EventList extends Component {
  render() {
    const { events } = this.props;
    return (
      <div>
        {!navigator.online ? (
          <InfoAlert text="You are not online! You're data may not be up to date" />
        ) : (
          ''
        )}
        <ul className="EventList">
          {events.map(event =>
            <li key={event.id}>
              <Event event={event} />
            </li>
          )}
        </ul>
      </div>
    );
  }
}

export default EventList;