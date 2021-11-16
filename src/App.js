import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';
import { extractLocations, getEvents } from './api';
import './nprogress.css';

class App extends Component {
  state = {
    events: [],
    currentLocation: "all",
    locations: [],
    numberOfEvents: 32,
  }

  componentDidMount() {
    this.mounted = true;
    getEvents().then((events) => {
      if (this.mounted) {
        const filteredEvents = events.slice(0, this.state.numberOfEvents);
        this.setState({
          events: filteredEvents,
          locations: extractLocations(events),
        });
      }
    });
  }

  componentWillUnmount(){
    this.mounted = false;
  }

  updateEvents = (location) => {
    getEvents().then((events) => {
      const locationEvents = (location === 'all') ?
        events:
        events.filter((event) => event.location === location);
        const { numberOfEvents } = this.state;
      this.setState({
        events: locationEvents.slice(0, numberOfEvents)
      });
    });
  }

  updateEventCount = (eventCount) => {
    const { currentLocation } = this.state;
    this.setState({
      numberOfEvents: eventCount
    });
    this.updateEvents(currentLocation, eventCount);
  }

  render() {
    const { locations, events, numberOfEvents } = this.state;
    return (
      <Container className="App">
        <Row>
          <Col className="CitySearchWrapper" md={6}>
            <CitySearch locations={locations} updateEvents={this.updateEvents}/>
          </Col>
          <Col className="NumberOfEventsWrapper" md={6}>
            <NumberOfEvents numberOfEvents={numberOfEvents} updateEventCount={this.updateEventCount}/>
          </Col>
        </Row>
        <Row>
          <Col md={12}>
            <EventList events={events}/>
          </Col>
        </Row>
      </Container>
    ); 
  }
}

export default App;
