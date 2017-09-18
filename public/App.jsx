import React from 'react';
import NavBar from './NavBar.jsx';
import Display from './Display.jsx'

class App extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
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

		}
	}

	render() {
		return (
			<div>
        <NavBar/>
        <Display/>
			</div>
		)
	}
}

export default App;