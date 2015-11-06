function initMap(data) {
  main_map = new google.maps.Map(document.getElementById('map-canvas'), {
    center: {lat: 40.745512, lng: -74.006467},
    zoom: 15
  });

  var styleArray = [
    { featureType: "poi", stylers: [ {visibility: "off"} ] },
    { featureType: "road.highway", stylers: [ {visibility: "off"} ] },
    { featureType: "administrative.locality", stylers: [ {visibility: "off"} ] },
    // { featureType: "water", stylers: [ {color: "#009933"}, {saturation: 50} ] },
    { featureType: "landscape", stylers: [ {color: "#ffffff"}, {saturation: 50} ] },
    { featureType: "road.arterial", stylers: [ {visibility: 'off'} ] },
    { featureType: "transit", stylers: [ {visibility: 'off'} ] }
  ]

  gon.data.forEach(function(point){
    point.forEach(function(post){
          pos = {lat: post.location.latitude, lng: post.location.longitude}
          title = post.tags
          createMarker(pos, main_map, title)
    })
  })

  main_map.setOptions({styles: styleArray})
}

// To get more/better data:
// - do a while loop that terminates on arr.length < 20
// -while running, call ajax
//   -reset the URL each time to get next_page

$(document).ready(function(){
  initMap(gon.data);
  // timeout to update the

})



function createMarker(coords, map, title){
  var hashtags;

  if (typeof title !== "string") {
    title.forEach(function(tag, i){
      tag = "#" + tag
      title[i] = tag
    })
    hashtags = title.join(" ")
  }


  marker = new google.maps.Marker({
    position: coords,
    map: map,
    title: hashtags
  });

  marker.setIcon('http://i.imgur.com/WSMBrTP.png?1')
}
//
//
// // get location id
// // https://api.instagram.com/v1/locations/search?lat=1&lng=2&access_token=Your-Act
// var query_string = 'https://api.instagram.com/v1/locations/search?lat=40.7410986&lng=-73.9888682&client_id=62b689a145a94aa2863cec35efc57e12'
// var next_max_id  = 1111879330113488870
// var loc_string   = 'https://api.instagram.com/v1/locations/127540101/media/recent?client_id=62b689a145a94aa2863cec35efc57e12'
//
// function getIGdata(){
//   $.ajax({
//     url: 'https://api.instagram.com/v1/locations/search?lat=40.7410986&lng=-73.9888682&client_id=62b689a145a94aa2863cec35efc57e12',
//     crossDomain: true,
//     dataType:'jsonp',
//     method:'get',
//     success: function(response){ console.log(response) }
//   })
// }
// // get recent results from location
// // https://api.instagram.com/v1/locations/{location-id}/media/recent?access_token=<% Rails.secrets.whatever %>
//
// // popular endpoint w/ a set location will get us top-ten results
