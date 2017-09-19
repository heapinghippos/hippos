import React from 'react';
import Home from './Home.jsx';
import Login from './Login.jsx';
import {
  BrowserRouter as Router,
  Route,
  Link,
  HashRouter
} from 'react-router-dom';

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    }
  }

  addCity (locationName, dateOfArrival, dateOfDeparture) {
    var city = {
      locationName: locationName,
      dateOfArrival: dateOfArrival,
      dateOfDeparture: dateOfDeparture
    }
  }
  render() {
    return (
      <HashRouter>
        <div>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
        </div>
      </HashRouter>
    )
  }


  render() {
    let city = this.state.currentCities.map((city) => {
      return <Displayed city={city} currentCities={this.state.currentCities} />
    });
    return (
      <div>
        <TopBar savedTrips={this.savedTrips} createNewTrip={this.createNewTrip} />
        <InputBar addCityToParent={this.addCity} addTagsToParent={this.addTags} />
      {this.state.tags}
       {city}
      </div>

    )
  }
}

