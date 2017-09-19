//initiates the google map function, which pastes our map with the following default values
function initMap() {

  // sets the default options when map pulls up
  // we will then pull in lat/long dynamically when a city is entered
  var hackreact = {lat: 40.7505, lng: -73.9764};
  var london = {lat: 51.5074, lng: -0.1278};
  var options = {
  zoom: 3,
  center: {lat: 37.7428, lng: -35.6806}
  };

  var map = new google.maps.Map(document.getElementById('map'), options);

  //renders a new instance of the map with the default options above
  function addMarker(props) {
    var marker = new google.maps.Marker({
      position: props.coordinates,
      map: map
    });

    //checks if we have content, if so adds pop up with the content
    if (props.content) {
      //creates info window with content that we'll pull from our user input
      var infoWindow = new google.maps.InfoWindow({
        content: props.content
      });

      //adds listener to our marker to view info window on click
      marker.addListener('click', function() {
        infoWindow.open(map, marker);
      });
    }

  }

  var markers = [

    {
      coordinates: hackreact,
      content: '<h1> PULL ME FROM USER INPUT CITYSCHEMA TAGS </h1>'
    },
    {
      coordinates: london,
      content: '<h1> PULL ME FROM USER INPUT CITYSCHEMA TAGS </h1>'
    }

  ];

  for (var i = 0; i < markers.length; i++) {
    addMarker(markers[i]);
  }

}
