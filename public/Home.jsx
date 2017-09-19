import React from 'react';
import InputBar from './InputBar.jsx';
import Display from './Display.jsx';

export default class Home extends React.Component {
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

	render() {
		return (
			<div>
	      <InputBar addCityToParent={this.addCity} addTagsToParent={this.addTags}/>
	      <Display/>
			</div>
		)
	}
}
