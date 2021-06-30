d3.csv('static/data/gws_cleaned_dataset.csv').then(d => {
  const address = [... new Set(d.map(obj=>obj['country']))].toString();
  geocoder = new google.maps.Geocoder();
  // var address = d.map(a=>a['country']).value()
  var count = {};

  d.map(a => a.country).forEach(function(i) { count[i] = (count[i]||0) + 1;});
  console.log(count);
  console.log(address)



var heatMapData = [
  {location: new google.maps.LatLng(46.2276, 2.2137), weight: 23258},
  {location: new google.maps.LatLng(41.8719, 12.5674), weight: 1607},
  {location: new google.maps.LatLng(-25.2744, 133.7751), weight: 805},
  {location: new google.maps.LatLng(37.0902, -95.7129), weight: 5041},
  {location: new google.maps.LatLng(40.4637, -3.7492), weight: 213},
  {location: new google.maps.LatLng(-35.6751, -71.5430), weight: 248},
  {location: new google.maps.LatLng(-40.9006, 174.8860), weight: 442},
  {location: new google.maps.LatLng(-30.5595, 22.9375), weight: 115},
  {location: new google.maps.LatLng(37.6000, 14.0154), weight: 33},
  {location: new google.maps.LatLng(-38.4161, -63.6167), weight: 533},
  {location: new google.maps.LatLng(33.8547, 35.8623), weight: 4},
  {location: new google.maps.LatLng(51.1657, 10.4515), weight: 3},
  {location: new google.maps.LatLng(35.8617, 104.1954), weight: 1},
  {location: new google.maps.LatLng(39.3999, -8.2245), weight: 4}
];

console.log(heatMapData)

var sanFrancisco = new google.maps.LatLng(37.774546, -122.433523);

map = new google.maps.Map(document.getElementById('map'), {
  center: ({lat: 0, lng: 0}),
  zoom: 2,
  mapTypeId: 'satellite'
});

var heatmap = new google.maps.visualization.HeatmapLayer({
  data: heatMapData,
  maxIntensity: 100,
  radius: 8
});
heatmap.setMap(map);
new google.maps.Marker({
    position: heatMapData['location'],
    map});
})
