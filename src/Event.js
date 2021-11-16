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
    console.log(this.state.collapsed)
  }

  handleHideDetailsClick = () => {
    this.setState({
      collapsed: true,
    });
    console.log(this.state.collapsed);
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
          className={`show-details-btn ${this.state.collapsed ? "show" : "hide"}`}
          onClick={this.handleShowDetailsClick}>
            Show Details
        </Button>
        <div className={`extra-details ${this.state.collapsed ? "hide" : "show"}`}>
          <h4>About the event:</h4>
              <a href={event.htmlLink} rel="noreferrer" target="_blank">
                See details on Google Calendar
              </a>
              <p className="event-description">{event.description}</p>
          <Button
            variant='primary'
            className={'hide-details-btn'}
            onClick={this.handleHideDetailsClick}>
              Hide Details
            </Button>
        </div>
      </div>      
    );
  }
}
export default Event;