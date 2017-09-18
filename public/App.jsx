import React from 'react';
<<<<<<< HEAD
import InputBar from './InputBar.jsx';
=======
import NavBar from './NavBar.jsx';
>>>>>>> created components for display as well as fake data
import Display from './Display.jsx'

class App extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
<<<<<<< HEAD
      currentCities: [],
      tags: ''
=======
      currentCities: [{
        name: 'London',
        dateOfArrival: '2017-06-25',
        dateofDeparture: '2017-07-02'
      },
      {
        name: 'Paris',
        dateOfArrival: '2017-07-25',
        dateofDeparture: '2017-08-02'

      }],
      tags: []
>>>>>>> created components for display as well as fake data

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
<<<<<<< HEAD
        <InputBar addCityToParent={this.addCity} addTagsToParent={this.addTags}/>
=======
        <NavBar/>
>>>>>>> created components for display as well as fake data
        <Display/>
			</div>
		)
	}
}

export default App;