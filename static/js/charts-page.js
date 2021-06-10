// var ctx = document.getElementById('card-chart1');

// d3.csv('static/data/gws_cleaned_dataset.csv').then(d => {
//         // var countries = d.map(a=>a['country']);

//         console.log(d.vintage);







//   var countryNames = [... new Set(d.map(obj=>obj['country']))]
//   var countries = d.map(a=>a['country'])
//   var count = {};
//   d.map(a => a.country).forEach(function(i) { count[i] = (count[i]||0) + 1;});
//   console.log(count);
//   var mixedChart = new Chart(ctx, {
//       data: {
//         datasets: [{
//           type: 'bar',
//           label: '',
//           data: count,
//           backgroundColor: [
//             'rgba(255, 99, 132, 0.2)',
//             'rgba(255, 159, 64, 0.2)',
//             'rgba(255, 205, 86, 0.2)',
//             'rgba(75, 192, 192, 0.2)',
//             'rgba(54, 162, 235, 0.2)',
//             'rgba(153, 102, 255, 0.2)',
//             'rgba(201, 203, 207, 0.2)'
//           ],
//           borderColor: [
//             'rgb(255, 99, 132)',
//             'rgb(255, 159, 64)',
//             'rgb(255, 205, 86)',
//             'rgb(75, 192, 192)',
//             'rgb(54, 162, 235)',
//             'rgb(153, 102, 255)',
//             'rgb(201, 203, 207)'
//           ],
//       }],
//       labels: countryNames
//     },
//       options: {
//         plugins: {
//           title: {
//             display: true,
//             text: 'Wine Count per Country'
//           }
//         },
//         scales: {
//           y: {
//             beginAtZero: true,
//             stacked: true,
//             title: {
//               display: true,
//               text: 'Number of Wines'
//             }
//           }
//         }
//       }
//   })
// })