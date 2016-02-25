function initMap() {
  // Create center marker at UCSD

  var ucsd_ltlng = {lat:32.885061, lng:-117.241346};

  // Create a map object and specify the DOM element for display.
  var map = new google.maps.Map(document.getElementById('map'), {
    center: ucsd_ltlng,
    zoom: 15
  });

  var marker = new google.maps.Marker({
      position: ucsd_ltlng,
      map: map,
      title: 'CICC'
  });
  var infoWindow = new google.maps.InfoWindow({
    content: "CICC is here"
  });
  marker.addListener('click', function() {
    infoWindow.open(map, marker);
  });
}