import React, { Component } from 'react';

class NumberOfEvents extends Component {
  state = {
    numberOfEvents: 32,
    infoText: "",
  }

  handleNumberChanged = (event) => {
    const number = event.trigger.value;
    this.setState({
      numberOfEvents: number,
    });
    this.props.updateEventCount(event.target.value);
  };

  render() {
    const numberOfEvents = this.state.numberOfEvents
    return (
      <div className="NumberOfEvents mt-40">
        <input
          type="number"
          className='eventsNumber'
          value={numberOfEvents}
          onChange={(e) => this.handleNumberChanged(e)}
        />

      </div>
    );
  }
}

export default NumberOfEvents