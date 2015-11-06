function initMap(data) {
  main_map = new google.maps.Map(document.getElementById('map-canvas'), {
    center: {lat: 40.7410986, lng: -73.9888682},
    zoom: 12
  });

  gon.data.forEach(function(post){
    pos = {lat: post.latitude, lng: post.longitude}
    title = post.name

    createMarker(pos, main_map, title)
  })


}

$(document).ready(function(){
  initMap(gon.data);
  console.log(gon.data)
})



function createMarker(coords, map, title){
  console.log(coords, map, title)
  marker = new google.maps.Marker({
    position: coords,
    map: map,
    title: title
  });
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
