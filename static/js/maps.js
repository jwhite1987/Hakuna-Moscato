var geocoder;
var map;
function initialize() {
  geocoder = new google.maps.Geocoder();
  var latlng = new google.maps.LatLng(48.856, 2.352);
  var mapOptions = {
    zoom: 8,
    center: latlng
  }
  map = new google.maps.Map(document.getElementById('map'), mapOptions);
}

function codeAddress() {
d3.csv('static/data/gws_cleaned_dataset.csv').then(d => {
  const address = [... new Set(d.map(obj=>obj['country']))].toString();
  geocoder = new google.maps.Geocoder();
  // var address = d.map(a=>a['country']).value()
  var count = {};

  d.map(a => a.country).forEach(function(i) { count[i] = (count[i]||0) + 1;});
  console.log(address);


    for (var i= 0; i < 15; i++) {
   geocoder.geocode( { 'address': address}, function(results, status) {
     if (status == 'OK') {
       console.log(results)
       // map.setCenter(results[0].geometry.location);
       var marker = new google.maps.Marker({
           map: map,
           position: results[0].geometry.location
       });
     } else {
       console.log(results)
       alert('Geocode was not successful for the following reason: ' + status);
     }}
)}})}
initialize();
 codeAddress();
// function initMap() {
//   const map = new google.maps.Map(document.getElementById("map"), {
//     zoom: 8,
//     center: { lat: -34.397, lng: 150.644 },
//   });
//   const geocoder = new google.maps.Geocoder();
//   document.getElementById("submit").addEventListener("click", () => {
//     geocodeAddress(geocoder, map);
//   });
// }
//
// function geocodeAddress(geocoder, resultsMap) {
//   d3.csv('static/data/gws_cleaned_dataset.csv').then(d => {
//     var countryNames = [... new Set(d.map(obj=>obj['country']))]
//     var countries = d.map(a=>a['country'])
//     var count = {};
//     d.map(a => a.country).forEach(function(i) { count[i] = (count[i]||0) + 1;});
//     console.log(countryNames);
//   // const address = document.getElementById("address").value;
//   const address = countryNames
//   geocoder.geocode({ address: address }, (results, status) => {
//     if (status === "OK") {
//       console.log(results[0])
//       resultsMap.setCenter(results[0].geometry.location);
//       new google.maps.Marker({
//         map: resultsMap,
//         position: results[0].geometry.location,
//       });
//     } else {
//       console.log("Geocode was not successful for the following reason: " + status);
//     }
//   });
// }
// )}
