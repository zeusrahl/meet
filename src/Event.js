import React, { Component } from "react";
import { Button } from "react-bootstrap";

class Event extends Component {
  state = {
    collapsed: true,
  };

  handleShowDetailsClick = () => {
    this.setState({
      collapsed: false,
    });
  }

  handleHideDetailsClick = () => {
    this.setState({
      collapsed: true,
    });
  }

  render() {
    const { event } = this.props;
    return (
      <div className='event'>
        <h2 className='summary'>{event.summary}</h2>
        <p className='start-date'>{event.start.dateTime} ({event.start.timeZone})</p>
        <p className='location'>@{event.summary} | {event.location}</p>
        <Button 
          variant='primary'
          className='show-details-btn'
          onClick={this.handleShowDetailsClick}>
            Show Details
        </Button>
        <div className={`extra-details ${this.state.collapsed ? "hide" : "show"}`}>
          <Button
            variant='primary'
            className='hide-details-btn'
            onClick={this.handleHideDetailsClick}>
              Hide Details
            </Button>

        </div>
      </div>      
    );
  }
}
export default Event;