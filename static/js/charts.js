var ctx = document.getElementById('myChart');

d3.csv('static/data/gws_cleaned_dataset.csv').then(d => {
  var countryNames = [... new Set(d.map(obj=>obj['country']))]
  var countries = d.map(a=>a['country'])
  var count = {};
  d.map(a => a.country).forEach(function(i) { count[i] = (count[i]||0) + 1;});
  console.log(count);
  d3.csv('static/data/updated_winery_dataset.csv').then(data => {
    var count_2 = {};
    data.map(a=> a.country).forEach(function(i) {count_2[i] = (count_2[i]||0) + 1})

  var mixedChart = new Chart(ctx, {
      data: {
        datasets: [{
      //     type: 'bar',
      //     label: 'Global Wine Score',
      //     data: count,
      //     backgroundColor: [
      //       'rgba(255, 99, 132, 0.2)',
      //       // 'rgba(255, 159, 64, 0.2)',
      //       // 'rgba(255, 205, 86, 0.2)',
      //       // 'rgba(75, 192, 192, 0.2)',
      //       // 'rgba(54, 162, 235, 0.2)',
      //       // 'rgba(153, 102, 255, 0.2)',
      //       // 'rgba(201, 203, 207, 0.2)'
      //     ],
      //     borderColor: [
      //       'rgb(255, 99, 132)',
      //       // 'rgb(255, 159, 64)',
      //       // 'rgb(255, 205, 86)',
      //       // 'rgb(75, 192, 192)',
      //       // 'rgb(54, 162, 235)',
      //       // 'rgb(153, 102, 255)',
      //       // 'rgb(201, 203, 207)'
      //     ],
      //     borderWidth: 1,
      // },
      // {
        label:'Wine Magazine',
        type: 'bar',
        data: count_2,
        backgroundColor: [
          // 'rgba(255, 99, 132, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          // 'rgba(255, 205, 86, 0.2)',
          // 'rgba(75, 192, 192, 0.2)',
          // 'rgba(54, 162, 235, 0.2)',
          // 'rgba(153, 102, 255, 0.2)',
          // 'rgba(201, 203, 207, 0.2)'
        ],
        borderColor: [
          // 'rgb(255, 99, 132)',
          'rgb(255, 159, 64)',
          // 'rgb(255, 205, 86)',
          // 'rgb(75, 192, 192)',
          // 'rgb(54, 162, 235)',
          // 'rgb(153, 102, 255)',
          // 'rgb(201, 203, 207)'
        ],
        borderWidth: 1,

      }
    ],
      labels: countryNames
    },
      options: {
        plugins: {
          title: {
            display: true,
            text: 'Wine Count per Country'
          }
        },
        scales: {
          y: {
            beginAtZero: true,
            stacked: false,
            title: {
              display: true,
              text: 'Number of Wines'
            }
          }
        }
      }
  })
})
})

var ctx_2 = document.getElementById('pieChart');

d3.csv('static/data/gws_cleaned_dataset.csv').then(d => {
  var vintageYears = [... new Set(d.map(obj=>obj['vintage']))]
  var countries = d.map(a=>a['country'])
  var count = {};
  d.map(a => a.vintage).forEach(function(i) { count[i] = (count[i]||0) + 1;});
  console.log(count);
  d3.csv('static/data/updated_winery_dataset.csv').then(data => {
    var countryNames = [... new Set(data.map(obj=>obj['country']))]
    var count_2 = {};
    data.map(a=> a.country).forEach(function(i) {count_2[i] = (count_2[i]||0) + 1})
    console.log(count_2);
    var counting = new Array(count_2)
var pieChart = new Chart(ctx_2, {
    type: 'bar',
    data: {
      labels: [
        // countryNames
      ],
      datasets: [{
        label: 'Global Wine Score',
        data: count,
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(255, 205, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(201, 203, 207, 0.2)'
        ],
        borderColor: [
          'rgb(255, 99, 132)',
          'rgb(255, 159, 64)',
          'rgb(255, 205, 86)',
          'rgb(75, 192, 192)',
          'rgb(54, 162, 235)',
          'rgb(153, 102, 255)',
          'rgb(201, 203, 207)'
        ],
        borderWidth: 1,
    }]
  }})
})
})

var ctx_3 = document.getElementById('areaChart');
d3.csv('static/data/gws_cleaned_dataset.csv').then(d => {
  var country = [... new Set(d.map(obj=>obj['country']))]
  var countries = d.map(a=>a['country'])
  // var total = 0;
  // for(var i = 0; countries.length; i++){
  //   total += d.score[i];
  // }
  // var avg = total / countries.length
  var count = {};
  d.map(a=> a.country).forEach(function(i) {count[i] = (count[i]||0) + 1})
  console.log(count);
  d3.csv('static/data/updated_winery_dataset.csv').then(data => {
    var countryNames = [... new Set(data.map(obj=>obj['country']))]
    var count_2 = {};
    data.map(a=> a.country).forEach(function(i) {count_2[i] = (count_2[i]||0) + 1})
    console.log(count_2);
    var counting = new Array(count_2)
    var areaChart = new Chart(ctx_3, {
    type: 'bar',
    data: {
      labels: [
        // countryNames
      ],
      datasets: [{
        label: 'Global Wine Score',
        data: count,
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)'
          // 'rgba(255, 159, 64, 0.2)',
          // 'rgba(255, 205, 86, 0.2)',
          // 'rgba(75, 192, 192, 0.2)',
          // 'rgba(54, 162, 235, 0.2)',
          // 'rgba(153, 102, 255, 0.2)',
          // 'rgba(201, 203, 207, 0.2)'
        ],
        borderColor: [
          'rgb(255, 99, 132)'
          // 'rgb(255, 159, 64)',
          // 'rgb(255, 205, 86)',
          // 'rgb(75, 192, 192)',
          // 'rgb(54, 162, 235)',
          // 'rgb(153, 102, 255)',
          // 'rgb(201, 203, 207)'
        ],
        borderWidth: 1,
    }],
    options: {
      plugins: {
        title: {
          display: true,
          text: 'Wine Count per Country'
        }
      },
      scales: {
        y: {
          beginAtZero: true,
          stacked: false,
          title: {
            display: true,
            text: 'Number of Wines'
          }
        }
      }
    }
  }})
})
})


var ctx_4 = document.getElementById('wineChart');
d3.csv('static/data/gws_cleaned_dataset.csv').then(d => {
  var country = [... new Set(d.map(obj=>obj['country']))]
  var countries = d.map(a=>a['country'])
  // var total = 0;
  // for(var i = 0; countries.length; i++){
  //   total += d.score[i];
  // }
  // var avg = total / countries.length
  var count = {};
  d.map(a=> a.country).forEach(function(i) {count[i] = (count[i]||0) + 1})
  console.log(count);
  d3.csv('static/data/updated_winery_dataset.csv').then(data => {
    var countryNames = [... new Set(data.map(obj=>obj['country']))]
    var count_2 = {};
    data.map(a=> a.country).forEach(function(i) {count_2[i] = (count_2[i]||0) + 1})
    console.log(count_2);
    var counting = new Array(count_2)
    var areaChart = new Chart(ctx_4, {
    type: 'bar',
    data: {
      labels: [
        // countryNames
      ],
      datasets: [{
        label: 'Wine Magazine',
        data: count,
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)'
          // 'rgba(255, 159, 64, 0.2)',
          // 'rgba(255, 205, 86, 0.2)',
          // 'rgba(75, 192, 192, 0.2)',
          // 'rgba(54, 162, 235, 0.2)',
          // 'rgba(153, 102, 255, 0.2)',
          // 'rgba(201, 203, 207, 0.2)'
        ],
        borderColor: [
          'rgb(255, 99, 132)'
          // 'rgb(255, 159, 64)',
          // 'rgb(255, 205, 86)',
          // 'rgb(75, 192, 192)',
          // 'rgb(54, 162, 235)',
          // 'rgb(153, 102, 255)',
          // 'rgb(201, 203, 207)'
        ],
        borderWidth: 1,
    }],
    options: {
      indexAxis: 'y', 
      plugins: {
        title: {
          display: true,
          text: 'Wine Count per Country'
        }
      },
      scales: {
        y: {
          beginAtZero: true,
          stacked: false,
          title: {
            display: true,
            text: 'Number of Wines'
          }
        }
      }
    }
  }})
})
})
