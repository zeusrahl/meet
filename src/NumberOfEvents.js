import React, { Component } from 'react';

class NumberOfEvents extends Component {
  state = {
    numberOfEvents: 32,
    infoText: "",
  }

  render() {
    const numberOfEvents = this.state.numberOfEvents
    return (
      <div className="NumberOfEvents mt-40">
        <input
          className='eventsNumber'
          value={numberOfEvents}
        />
          

      </div>
    );
  }
}

export default NumberOfEvents