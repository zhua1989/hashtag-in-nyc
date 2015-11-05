
function initMap(data) {

  map = new google.maps.Map(document.getElementById('map-canvas'), {
    center: {lat: 40.7410986, lng: -73.9888682},
    zoom: 12
  });


  // markers from data

}

$(document).ready(function(){
  initMap();
})
