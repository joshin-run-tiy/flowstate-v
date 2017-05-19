/*===========================================================*/
// DATA RETRIEVAL METHOD WHERE 'data' REPRESENTS THE OBJECT
/*===========================================================*/

let url = `http://ckjacobson.com/maxicom/reports/flow/1.json`
function remote () {
  console.log('let url + ...flow/1.json', url)
  $.ajax({url: url}).done(function(data) {
    console.log('data in $.ajax', data);
    return data;
  })
}

function urlData() {

  var site = document.querySelector('#site').value;
  var date = document.querySelector('#date').value;
  var time = document.querySelector('#time').value;
  console.log('time', time);
  if (site == 'site1' && date == 'may1' && time == '12am' ) {
    var url = './data/may1st-12am.json';
    console.log('url of 12am:', url);
  } if (site == 'site1' && date == 'may1' && time == '1am' ) {
    var url = './data/may1st-1am.json';
    console.log('url of 1am:', url);
  } if (site == 'site1' && date == 'may1' && time == 'remote' ) {
    var url = remote();
    console.log('log from remote()', url);
  }

// set the dimensions of the canvas
var margin = {top: 20, right: 20, bottom: 70, left: 40},
    width = 975 - (margin.left - 15) - margin.right,
    height = 475 - margin.top - margin.bottom
console.log(width,height);
// set the ranges
var x = d3.scale.ordinal().rangeRoundBands([5, width], .08)
var y = d3.scale.linear().range([height, 0])
console.log('xy', x,y);

// define the axis
var xAxis = d3.svg.axis()
    .scale(x)
    .orient("bottom")

var yAxis = d3.svg.axis()
    .scale(y)
    .orient("left")
    .ticks(10)
console.log('axis', xAxis,yAxis);
// add the SVG element
var svg = d3.select('.svg-container').append('svg')
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform",
          "translate(" + margin.left + "," + margin.top + ")")
console.log('svg', svg);

d3.json(url, function(error, data) {
// d3.json("./data/may1st-12am.json", function(error, data) {
// d3.json("./flow.json", function(error, data) {
// d3.json(url, function(error, data) {
  if (error) {
  } else {
  }

  console.log('data', data);
  data = data.flow[0].report_data;
  console.log('data2', data);

  data.forEach(function(d) {
    d.value = +d.value;
    d.timestamp = new Date(d.timestamp)
    d.timestamp = (d.timestamp.getMinutes() + ":00")
    d.timestamp = d.timestamp;
    console.log('gallons', d.value);
    console.log('minutes', d.timestamp);
  })


  x.domain(data.map(function(d) { return d.timestamp }))
  y.domain([0, d3.max(data, function(d) { return d.value })])


  // add axis
  svg.append("g")
      .attr("class", "x axis")
      .attr("transform", "translate(0," + height + ")")
      .call(xAxis)
    .selectAll("text")
      .style("text-anchor", "end")
      .attr("font-weight", "bold")
      .attr("font-size", "1.1em")
      .attr("dx", "-.8em")
      .attr("dy", ".50em")
      .attr("transform", "rotate(-45)")

  svg.append("g")
      .attr("class", "y axis")
      .call(yAxis)
      // .attr("font-weight", "bold")
    .append("text")
      .attr("transform", "rotate(-90)")
      .attr("y", 5)
      .attr("dy", "-2.95em")
      .style("text-anchor", "end")
      .attr("font-weight", "bold")
      .attr("font-size", "1.2em")
      .text("Gallons")


  // Add bar chart
  svg.selectAll("bar")
      .data(data)
    .enter().append("rect")
      .attr("class", "bar")
      .attr("x", function(d) { return x(d.timestamp) })
      .attr("width", x.rangeBand())
      .attr("y", function(d) { return y(d.value) })
      .attr("height", function(d) { return height - y(d.value) })
    })
}
