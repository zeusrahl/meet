import React, { Component } from 'react';
import { ErrorAlert } from './Alert';

class NumberOfEvents extends Component {
  state = {
    numberOfEvents: 32,
    infoText: "",
  }

  handleNumberChanged = (event) => {
    const number = event.target.value;
    if (number <= 0) {
      this.setState({
        numberOfEvents: number,
        infoText: 'Please pick a number that is greater than 0 but less than 33'
      })
    } else if (number > 32) {
      this.setState({
        numberOfEvents: number,
        infoText: 'Please pick a number that is greater than 0 but less than 33'
      })
    } else {
      this.setState({
        numberOfEvents: number,
        infoText: ''
      });
    }
    this.props.updateEventCount(event.target.value);
  };

  render() {
    const numberOfEvents = this.state.numberOfEvents
    return (
      <div className="NumberOfEvents mt-40">
        <div>
          <p>Number of Events:</p>
        </div>
        <input
          type="number"
          className='eventsNumber'
          value={numberOfEvents}
          onChange={(e) => this.handleNumberChanged(e)}
        />
        <ErrorAlert text={this.state.infoText} />
      </div>
    );
  }
}

export default NumberOfEvents