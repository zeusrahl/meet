import React, { Component } from 'react';
import './App.css';
import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';
<<<<<<< HEAD

class App extends Component {
  render() {
    return (
      <div className="App">
        <CitySearch />
        <NumberOfEvents />
        <EventList />
=======
import { extractLocations, getEvents } from './api';
import './nprogress.css';

class App extends Component {
  state = {
    events: [],
    locations: []
  }

  componentDidMount() {
    this.mounted = true;
    getEvents().then((events) => {
      if (this.mounted) {
        this.setState({ events, locations: extractLocations(events) });
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
      this.setState({
        events: locationEvents
      });
    });
  }

  render() {
    return (
      <div className="App">
        <CitySearch 
          locations={this.state.locations}
          updateEvents={this.updateEvents}/>
        <NumberOfEvents />
        <EventList events={this.state.events}/>
>>>>>>> parent of f8bfc8b (Updates)
      </div>
    ); 
  }
}

export default App;
