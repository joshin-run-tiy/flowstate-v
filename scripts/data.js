window.onload = function Maxicom () {

  // const flowIs = 'flow/'
  const url = `http://ckjacobson.com/maxicom/reports/flow/1.json`;

  $.ajax({
    url: url
  }).done(function(data) {
    console.log('The returned object is:', data)
  })
  // let targetedData = {
  //   dataArrays:data.data.flow[0].report_data,
  //   flow: data.data.flow,
  //   data: data,
  //   reportId: data.data.flow[0].report_data[0].report_id,
  //   timeStamp: data.data.flow[0].report_data[0].timestamp,
  //   value: data.data.flow[0].report_data[0].value
  // }
}




// if ( flowIs === 'flow/') {
//   const results = data.results;
//   const resultsLength = results.length;
//   const flow = [];
//
//   for (let i = 0; i < resultsLength; i++) {
//     flow.push(results[i].name)
//   }
//
//   console.log('the flow is:', flow);
// } else {
//   console.log('the flow is:', data.name)
// }
