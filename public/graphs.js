//data, grabbed from out dataSets.js file, to be used in our visualizations
var data = dataSet;
var usPopulationData = data.usPopulation;

//----------------------------------------------------------
// Barchart

//Width and height
var w = 1100;
var h = 375;
var barPadding = 1;

//barchart data
var barData = data.usPopulation.data.reverse();
var barDataDescription = data.usPopulation.description;
var barDataColumnNames = data.usPopulation.column_names;

//Create SVG element
var barchart = d3.select(".barchart")
            .append("svg")
            .attr("width", w)
            .attr("height", h);

barchart.selectAll("rect")
    .data(barData)
    .enter()
    .append("rect")
    .attr("class", "bar")
    .attr("x", function(d, i) {
      return i * (w / barData.length);
    })
    .attr("y", function(d) {
      return h - (d[1]/1000) -20;
    })
    .attr("width", w / barData.length - barPadding)
    .attr("height", function(d){
      return (d[1]/1000);
    })
    .attr("fill", function(d) {
      return "rgb(0, 0, " + (Math.round(d[1]/1000)) + ")";
    })
    .attr("onmousedown", function(d) {
      console.log('this works.', d);
    });

//----------------------------------------------------------
// Scatterplot


var dataset = [
                  [ 5,     20 ],
                  [ 480,   90 ],
                  [ 250,   50 ],
                  [ 100,   33 ],
                  [ 330,   95 ],
                  [ 410,   12 ],
                  [ 475,   44 ],
                  [ 25,    67 ],
                  [ 85,    21 ],
                  [ 220,   88 ]
              ];

//Width and height
var w = 1100;
var h = 375;

var scatterplot = d3.select(".scatterplot")
                    .append("svg")
                    .attr("height", h)
                    .attr("width", w);
scatterplot.selectAll("circle")
            .data(dataset)
            .enter()
            .append("circle")
            .attr("cx", function(d) {
              return d[0];
            })
            .attr("cy", function(d) {
              return d[1];
            })
            .attr("r", function(d) {
              return Math.sqrt(h - d[1]);
            });
