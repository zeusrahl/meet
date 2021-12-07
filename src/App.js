import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';
import WelcomeScreen from './WelcomeScreen';
import { InfoAlert } from './Alert';
import { extractLocations, getEvents, checkToken, getAccessToken } from './api';

import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import './nprogress.css';

class App extends Component {
  state = {
    events: [],
    currentLocation: "all",
    locations: [],
    numberOfEvents: 32,
    showWelcomeScreen: undefined,
    offLineText: '',
  };

  async componentDidMount() {
    this.mounted = true;
    const accessToken = localStorage.getItem('access_token');
    const isTokenValid = (await checkToken(accessToken)).error ? false: true;
    const searchParams = new URLSearchParams(window.location.search);
    const code = searchParams.get('code');
    this.setState({ showWelcomeScreen: !(code || isTokenValid) });
    if ((code || isTokenValid) && this.mounted) {
      getEvents().then((events) => {
        if (this.mounted) {
          const filteredEvents = events.slice(0, this.state.numberOfEvents);
        this.setState({
          events: filteredEvents,
          locations: extractLocations(events)
         });
        }
      });
      if (!navigator.onLine) {
        this.setState({
          offLineText: "You are not online! Your data may not be up to date.",
        });
      } else {
        this.setState({
          offLineText: '',
        });
      }
    }
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
  };

  updateEventCount = (eventCount) => {
    const { currentLocation } = this.state;
    this.setState({
      numberOfEvents: eventCount
    });
    this.updateEvents(currentLocation, eventCount);
  }

  render() {
    if (this.state.showWelcomeScreen === undefined) return <div className="App" />
    const { locations, events, numberOfEvents } = this.state;
    return (
      <div className="App">
        <Container>
          <Row>
            <InfoAlert text={this.state.offLineText} />
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
        <WelcomeScreen showWelcomeScreen={this.state.showWelcomeScreen} getAccessToken={() => { getAccessToken() }} />
      </div>
    ); 
  }
}

export default App;
