// var ctx = document.getElementById('pie-chart');

function init() {

d3.csv("static/data/gws_cleaned_dataset.csv").then((d)=> {
// loop through names object and grab all the ids/names and eppend them to demographics dropdown

const distinctCountries = [...new Set(d.map(x => x.country))];

        for (var i = 0; i < distinctCountries.length; i++) {
                    d3.select("#selDataset")
                    .append("option")
                    .text(distinctCountries[i])
                    .property("value");
        }

        // // apply an ID for the intial plots
        piechart(distinctCountries[0]);
        barchart(distinctCountries[0]);
        linechart(distinctCountries[0]);
    });
};

function optionChanged(Country){
piechart(Country);
barchart(Country);
linechart(Country);
};



function piechart(Country){
d3.csv('static/data/gws_cleaned_dataset.csv').then(d => {

        var countryFilter = d.filter(d=>d.country === Country);

        var red = [];
        var white = [];
        countryFilter.forEach(function(data){
                if (data.color == "Red"){
                        red.push(data.category);
                }
                else if (data.color == "White"){
                        white.push(data.category);
                }
        })

        var catTot = red.length + white.length;

        var redPerc = red.length/catTot;
        var whitePerc = white.length/catTot;
        console.log(redPerc);

        var data = [{
                values: [redPerc, whitePerc],
                labels: ['Red', 'White'],
                marker:{
                        colors: ['rgba(155,34,66,0.9)', 'rgba(246, 237, 201,0.9)']
                      },
                type: 'pie'
}];
        //       }}];


              var layout = {
                title: '',
                height: 400,
                width: 400,
                autosize: true
              };
              var config = {responsive: true}
              Plotly.newPlot('pie-chart', data, layout, config);
});
}


function barchart(Country){
d3.csv('static/data/gws_cleaned_dataset.csv').then(d => {
        var btx = document.getElementById('bar-chart')
        var countryFilter = d.filter(d=>d.country === Country);

        var redRating = [];
        var whiteRating = [];
        // var age = [];

        countryFilter.forEach(function(data){
                if (data.color == "Red"){
                        redRating.push(data.score);
                }
                else if (data.color == "White"){
                        whiteRating.push(data.score);
                }
        })

        function sum( obj ) {
                var sum = 0;
                for( var el in obj ) {
                  if( obj.hasOwnProperty( el ) ) {
                    sum += parseFloat( obj[el] );
                  }
                }
                return sum;
              }
              var redRatingAvg = sum(redRating)/redRating.length;
              var whiteRatingAvg = sum(whiteRating)/whiteRating.length;

              var trace1  =
              {
                x: ['Red', 'White'],
                y: [redRatingAvg, whiteRatingAvg],
                marker:{
                  color: ['rgba(155,34,66,0.9)', 'rgba(246, 237, 201,0.9)']
                },
                type: 'bar'
              };

              var data = [trace1];

              var layout = {
              title:{
                        text:'Avg Wine Color Rating'
                },
              width: 300, height: 320, margin: { t: 50, b: 50, l:50 },
              };
              var config = {responsive: true}
              Plotly.newPlot('bar-chart', data, layout, config);
        });
};

function linechart(Country){
d3.csv('static/data/gws_cleaned_dataset.csv').then(d => {
        // var atx = document.getElementById('line-chart')
        var countryFilter = d.filter(d=>d.country === Country);

        // var Rating100 = [];
        // var Rating90 = [];
        // var Rating80 = [];
        // var Rating70 = [];
        // var Rating60 = [];
        // var Rating50 = [];
        // var Rating40 = [];
        // var Rating30 = [];
        // var Rating20 = [];
        // var Rating10 = [];
        // var Rating1 = [];

        // countryFilter.forEach(function(data){
        //         if (data.wine_age > 100){
        //                 Rating100.push(data.score);
        //         }
        //         else if (data.wine_age > 90){
        //                 Rating90.push(data.score);
        //         }
        //         else if (data.wine_age > 80){
        //                 Rating80.push(data.score);
        //         }
        //         else if (data.wine_age > 70){
        //                 Rating70.push(data.score);
        //         }
        //         else if (data.wine_age > 60){
        //                 Rating60.push(data.score);
        //         }
        //         else if (data.wine_age > 50){
        //                 Rating50.push(data.score);
        //         }
        //         else if (data.wine_age > 40){
        //                 Rating40.push(data.score);
        //         }
        //         else if (data.wine_age > 30){
        //                 Rating30.push(data.score);
        //         }
        //         else if (data.wine_age > 20){
        //                 Rating20.push(data.score);
        //         }
        //         else if (data.wine_age > 10){
        //                 Rating10.push(data.score);
        //         }
        //         else if (data.wine_age >= 0){
        //                 Rating1.push(data.score);
        //         }
        // })

        // function sum( obj ) {
        //         var sum = 0;
        //         for( var el in obj ) {
        //           if( obj.hasOwnProperty( el ) ) {
        //             sum += parseFloat( obj[el] );
        //           }
        //         }
        //         return sum;
        //       }
        //       var Rating100avg = sum(Rating100)/Rating100.length;
        //       var Rating90avg =sum(Rating90)/Rating90.length;
        //       var Rating80avg =sum(Rating80)/Rating80.length;
        //       var Rating70avg = sum(Rating70)/Rating70.length;
        //       var Rating60avg = sum(Rating60)/Rating60.length;
        //       var Rating50avg = sum(Rating50)/Rating50.length;
        //       var Rating40avg = sum(Rating40)/Rating40.length;
        //       var Rating30avg = sum(Rating30)/Rating30.length;
        //       var Rating20avg = sum(Rating20)/Rating20.length;
        //       var Rating10avg = sum(Rating10)/Rating10.length;
        //       var Rating1avg =sum(Rating1)/Rating1.length;

        //       var trace1 = {
        //         x: [100,90,80,70,60,50,40,30,20,10,1],
        //         y: [Rating100avg,Rating90avg,Rating80avg,Rating70avg,Rating60avg,Rating50avg,Rating40avg,Rating30avg,Rating20avg,Rating10avg,Rating1avg],
        //         type: 'scatter'
        //       };


// let grps={}, s = newArr.forEach(g=>grps.hasOwnProperty(g.age)?grps[g.age].push(+g.score) : grps[g.age] = [+g.score]), avgs = Object.assign(...Object.entries(grps).map(g=>({[g[0]]:(g[1].reduce((b,a)=> b+a)/grps[g[0]].length).toFixed(2)})))
// console.log(avgs);


        var newArr = countryFilter.map(function(elem) {
                return {
                    age: elem.wine_age,
                    score: elem.score
                };
            });

        //     var ageCount = {};
        //     newArr.map(a=> a.age).forEach(function(i) {ageCount[i] = (ageCount[i]||0) + 1})
        //     console.log(ageCount);

// console.log(counts)

        const result = newArr
        .sort((a, b) => a.age - b.age)
        .reduce(
          (acc, cur, i, { [i - 1]: last }) =>
            cur.age === last?.age
              ? Object.assign([...acc], {
                  [acc.length - 1]: [...acc[acc.length - 1], cur],
                })
              : [...acc, [cur]],
          []
        )
        .map((x) => ({
          age: x[0].age,
          score: x.reduce((a, b) => a + Number(b.score), 0) / x.length,
        }));

//       console.log(result);

        var ages = [];
        var scores = [];

        result.forEach(function(d){
                ages.push(d.age);
                scores.push(d.score);
        });

        // console.log(scores);

              var trace1 = {
                x: ages,
                y: scores,
                type: 'scatter'
              };

        //       var trace2 = {
        //         x: ages,
        //         y: ageCount,
        //         type: 'bar',
        //         orientation: 'h'
        //       };

        //       var data = [trace1, trace2];

              var data = [trace1]
              var layout = {
                colorway : ['rgba(155,34,66,0.9)'],
                title: {
                        text:''
                },
                xaxis: {
                        title: {
                          text: 'Age of Wine in Years',
                          font: {
                            family: 'Montserrat, monospace',
                            size: 18,
                            color: '#7f7f7f'
                          }
                        },
                      },
                      yaxis: {
                        title: {
                          text: 'Average Score',
                          font: {
                            family: 'Montserrat, monospace',
                            size: 18,
                            color: '#7f7f7f'
                          }
                        }
                      },
                width: 800, height: 300, margin: { t: 50, b: 50, l:50 },
                };
                var config = {responsive: true}
              Plotly.newPlot("line-chart", data, layout, config);

});
}

init();
