const dataD3 = d3.csv('static/data/continent_dataset.csv')

var ctx = document.getElementById('treemap');

dataD3.then(d => {
    var continents = d.map(a=>a['continent']);
    var countries = d.map(a=>a['country']);
    var points = d.map(a=>a['Average Points']);
    var price = d.map(a=>a['Average Price']);
    var trees = [continents, countries, price];
    console.log(trees)
    var numberOfWines = d.map(a=>a['Total Number of Wines']);
    var treeChart = new Chart(ctx, {
      type: 'scatter',
      data: {
          datasets: [{
              label: countries,
              data: points,
              borderColor: 'black',
              backgroundColor: 'white'
          }]
      },
      options: {
          responsive: true,
          title: {
              display: true,
              text: 'Average Points by Country'
          }
      }
  })
})
