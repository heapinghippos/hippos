import React from 'react';

const TopBar = (props) => {
	return <div class="topBar">
			<button onClick={props.createNewTrip}> Create New Trip</button>
	    <button onClick={props.savedTrip}>savedTrip Trips</button>
	    <button>Profile</button>
    </div>
}
export default TopBar;