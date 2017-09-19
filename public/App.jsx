import React from 'react';
import InputBar from './InputBar.jsx';
import Displayed from './Display.jsx';
import TopBar from './TopBar.jsx';
import axios from 'axios';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      currentCities: [],
      tags: ''
    }
    this.addCity = this.addCity.bind(this);
    this.addTags = this.addTags.bind(this);
  }

  addCity (locationName, dateOfArrival, dateOfDeparture) {
    var city = {
      locationName: locationName,
      dateOfArrival: dateOfArrival,
      dateOfDeparture: dateOfDeparture
    }
    var tempCities = this.state.currentCities;
    tempCities.push(city);
    this.setState ({
      currentCities: tempCities
    })
    console.log(this.state);
  }

  addTags (tripName) {
    this.setState ({
      tags: tripName
    })
    console.log(this.state);
  }

  showSavedTrips (showSavedTrips) {
    
  }

  createNewTrip() {
    axios({
      method: "GET",
      url: "/createNewTrip"
    })
    .then(res => {

    })
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

export default App;