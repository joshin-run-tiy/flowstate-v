/*===========================================================*/
// DATA RETRIEVAL METHOD WHERE 'data' REPRESENTS THE OBJECT
/*===========================================================*/
window.onload = function Maxicom () {

  const url = `http://ckjacobson.com/maxicom/reports/flow/1.json`;

  $.ajax({
    url: url
  }).done(function(data) {
    console.log('The returned object is:', data)
  })

/*===========================================================*/
// NEXT
/*===========================================================*/

  // let targetedData = {
  //   dataArrays:data.data.flow[0].report_data,
  //   flow: data.data.flow,
  //   data: data,
  //   reportId: data.data.flow[0].report_data[0].report_id,
  //   timeStamp: data.data.flow[0].report_data[0].timestamp,
  //   value: data.data.flow[0].report_data[0].value
  // }
}

/*================================
componentDidMount () {
    axios.get(`http://ckjacobson.com/maxicom/sites.json`)
    .then(response => {
      console.log(response)
      this.setState({
        siteIdOne: response.data.sites[0].id,
        siteOne: response.data.sites[0].site,
        siteIdTwo: response.data.sites[1].id,
        siteTwo: response.data.sites[1].site
      })
    })
================================*/



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
