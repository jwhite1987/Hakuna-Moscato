// d3.csv('static/data/continent_dataset.csv').then(d => {

const dataD3 = d3.csv('static/data/continent_dataset.csv')

dataD3.then(d => {
//     // var avgPoints = d.map(a => a['Average Points']);
//     var country = [... new Set(d.map(obj=>obj['country']))];
//     var continent = d.map(obj=>obj['continent']);
//     var points = [... new Set(d.map(obj=>obj['Average Points']))];
//
//     var data = [{
//         type: 'sunburst',
//         // ids: d.map(obj=>obj['']),
//         labels: country,
//         parents: ["world", continent],
//         values: points
//         // textinfo: 'label+value+parent',
//         // outsidetextfont: {'size': 20, 'color:': '#377eb8'},
//         // marker: {"line": {"width": 2}},
//         // pathbar: {"visible": false}
//   }];
//
//
// Plotly.newPlot('myDiv', data);
// })
var trace1 = {
  x: d.map(a => a['Average Points']),
  y: d.map(a => a['Average Price']),
  mode: 'markers',
  type: 'scatter'
  // marker: { size: d.map(a => a['Total Numbers of Wines']) }
};
//
// var trace2 = {
//   x: [2, 3, 4, 5],
//   y: [16, 5, 11, 9],
//   mode: 'lines',
//   type: 'scatter'
// };
//
// var trace3 = {
//   x: [1, 2, 3, 4],
//   y: [12, 9, 15, 12],
//   mode: 'lines+markers',
//   type: 'scatter'
// };

var data = [trace1];

Plotly.newPlot('myDiv', data);

})
