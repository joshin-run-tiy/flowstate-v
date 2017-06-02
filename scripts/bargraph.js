/*===========================================================*/
// DATA RETRIEVAL METHOD WHERE 'data' REPRESENTS THE OBJECT
/*===========================================================*/

function urlData() {
  var site = document.querySelector('#site').value;
  var date = document.querySelector('#date').value;
  var time = document.querySelector('#time').value;
  console.log('time', time);
  if (site == 'site1' && date == 'may1' && time == '12am' ) {
    url = './data/may1st-12am.json';
  } if (site == 'site1' && date == 'may1' && time == '1am' ) {
    url = './data/may1st-1am.json';
  }

  //notes: variable changing......
  //event handler needed........1. select new json file....cause cascade of updating data now map over...need giant iife eventually...make function modular...webpack and react might be good to go with...


  // let url = `http://ckjacobson.com/maxicom/reports/flow/1.json`
  // window.onload = function Maxicom () {
  //
  //
  //   $.ajax({url: url}).done(function(mData) {
  //     console.log('url returned mData:', mData)
  //   })
  // }
/*===========================================================*/
// END
/*===========================================================*/

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
// load the data








// let time = document.querySelector('#time')
// time.querySelector(.onclick = () => {
//   store.dispatch({
//     type: 'SHIRT@ADD',
//     color: newShirtDiv.querySelector('#color').value,
//     size: newShirtDiv.querySelector('#size').value,
//     motto: newShirtDiv.querySelector('#motto').value
//   })
// }


//
// let dataSet = function dataSetSelect() {
//
//
//     // while (modelList.options.length) {
//     //     modelList.remove(0);
//     // }
//
//     // var cars = carsAndModels[selCar];
//     // if (cars) {
//     //     var i;
//     //     for (i = 0; i < cars.length; i++) {
//     //         var car = new Option(cars[i], i);
//     //         modelList.options.add(car);
//
//     return data;
//         }
//     }
// }








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
