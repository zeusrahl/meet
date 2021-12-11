import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import EventList from "./EventList";
import CitySearch from "./CitySearch";
import NumberOfEvents from "./NumberOfEvents";
import WelcomeScreen from "./WelcomeScreen";
import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
import { InfoAlert } from './Alert';
import { extractLocations, getEvents, checkToken, getAccessToken } from "./api";

import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import "./nprogress.css";

class App extends Component {
  state = {
    events: [],
    currentLocation: "all",
    locations: [],
    numberOfEvents: 32,
    showWelcomeScreen: false,
    offLineText: "",
  };

  componentDidMount() {
    this.mounted = true;
    const accessToken = localStorage.getItem("access_token");
    const isTokenValid = checkToken(accessToken).error ? false : true;
    const searchParams = new URLSearchParams(window.location.search);
    const code = searchParams.get("code");
    this.setState({ showWelcomeScreen: !(code || isTokenValid) });
    if ((code || isTokenValid) && this.mounted) {
      getEvents().then((events) => {
        if (this.mounted) {
          const filteredEvents = events.slice(0, this.state.numberOfEvents);
          this.setState({
            events: filteredEvents,
            locations: extractLocations(events),
          });
        }
      });
      if (!navigator.onLine) {
        this.setState({
          offLineText: "You are not online! Your data may not be up to date",
        });
      } else {
        this.setState({
          offLineText: "",
        });
      }
    }
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  getData = () => {
    const {locations, events} = this.state;
    const data = locations.map((location) => {
      const number = events.filter((event) => event.location === location).length
      const city = location.split(', ').shift()
      return (city, number);
    })
    return data;
  }

  updateEvents = (location, eventCount) => {
    const { currentLocation, numberOfEvents } = this.state;
    if (location) {
      getEvents().then((events) => {
        const locationEvents =
          location === "all"
            ? events
            : events.filter((event) => event.location === location);
        const filteredEvents = locationEvents.slice(0, numberOfEvents);
        this.setState({
          events: filteredEvents,
          currentLocation: location,
        });
      });
    }

    else {
      getEvents.apply().then((events) => {
        const locationEvents = (currentLocation === "all") ?
        events :
        events.filter((event) => event.location === currentLocation);
        const filteredEvents = locationEvents.slice(0, eventCount);
        this.setState({
          events: filteredEvents,
          numberOfEvents: eventCount,
        })
      })
    }
  };

  render() {
    // if (this.state.showWelcomeScreen === undefined)
    //   return <div className="App" />;
    const { locations, events, numberOfEvents } = this.state;
    return (
      <div className="App">
        <InfoAlert text={this.state.offLineText} />
        <Container className="Content-Wrapper">
          <Row>
            <Col className="CitySearchWrapper" md={6}>
              <CitySearch
                locations={locations}
                updateEvents={this.updateEvents}
              />
            </Col>
            <Col className="NumberOfEventsWrapper" md={6}>
              <NumberOfEvents
                numberOfEvents={numberOfEvents}
                updateEventCount={this.updateEvents}
              />
            </Col>
          </Row>
          <Row>
            <Col md={12}>
              <ScatterChart
                width={400}
                height={400}
                margin={{
                  top: 20, right: 20, bottom: 20, left: 20,
                }}
              >
                <CartesianGrid />
                <XAxis type="category" dataKey="city" name="city" />
                <YAxis type="number" dataKey="number" name="number of events" />
                <Tooltip cursor={{ strokeDasharray: '3 3' }} />
                <Scatter data={this.getData()} fill="#8884d8" />
              </ScatterChart>
              <EventList events={events} />
            </Col>
          </Row>
        </Container>
        <WelcomeScreen
          showWelcomeScreen={this.state.showWelcomeScreen}
          getAccessToken={() => {
            getAccessToken();
          }}
        />
      </div>
    );
  }
}

export default App;