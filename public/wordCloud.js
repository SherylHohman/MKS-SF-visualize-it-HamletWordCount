// Word Cloud Generator

var hamlet = _.shuffle(hamlet.data);
hamlet.unshift(["spam", 0]);
var total = 0;

_.each(hamlet, function(d) {
  total = total + d[1];
});

var wordCloud = d3.selectAll(".wordCloud")
                    .data(hamlet)
                    .enter()
                    .append("span")
                    .text(function(d) {
                      if(d[0] !== "spam")return d[0];
                    })
                    .style("font-size", function(d) {
                      return ((d[1]/total) * 3000) + "px";
                    })
                    .style("padding-right", "10px")
                    .style("display", "inline-block")
                    .style("color", function(d) {
                      return "rgb(" + (Math.round(Math.random()*255) + 1) + ", " + (Math.round(Math.random()*255) + 1) + ", " + (d[1]) + ")";
                    });
