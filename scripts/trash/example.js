window.onload = function starWarsFilms () {

  const whichFilm = 'films/'
  const url = 'http://swapi.co/api/' + whichFilm;

  $.ajax({
    url: url
  }).done(function(data) {
    console.log('The returned object is:', data)

    if ( whichFilm === 'films/') {
      const results = data.results;
      const resultsLength = results.length;
      const films = [];

      for (let i = 0; i < resultsLength; i++) {
        films.push(results[i].title)
      }
      str = JSON.stringify(films);
      console.log('the films are: ', films);
    }
    else {
      console.log('the film titles are:', data.title)
    }
    document.getElementById('p-output-box-three').innerHTML = str;
  })
}



// let epsStoryBtnOne = results[0].opening_crawl;
//
// document.getElementById("eps1-btn-story").addEventListener("click", epsOneStory);
// function epsOneStory() {
// document.getElementById("p-output-box-one").innerHTML = epsStoryBtnOne;

// document.getElementById("eps2-btn-date").addEventListener("click", epsTwoDate);
// function epsTwoDate() {
// document.getElementById("p-output-box-two").innerHTML = ep2Date;


      // document.getElementById("eps3-btn-date").addEventListener("click", epsThreeDate);
      // function epsThreeDate() {
      // document.getElementById("p-output-box-three").innerHTML = ep3Date;
      //
      // document.getElementById("eps4-btn-date").addEventListener("click", epsFourDate);
      // function epsFourDate() {
      // document.getElementById("p-output-box-four").innerHTML = ep4Date;
      //
      // document.getElementById("eps5-btn-date").addEventListener("click", epsFiveDate);
      // function epsFiveDate() {
      // document.getElementById("p-output-box-five").innerHTML = ep5Date;
      //
      // document.getElementById("eps6-btn-date").addEventListener("click", epsSixDate);
      // function epsSixDate() {
      // document.getElementById("p-output-box-six").innerHTML = ep6Date;
      //
      // document.getElementById("eps7-btn-date").addEventListener("click", epsSevenDate);
      // function epsSevenDate() {
      // document.getElementById("p-output-box-seven").innerHTML = ep7Date;
}


      //jumbled up text below

      // str1 = JSON.stringify(results[0].opening_crawl);
      // console.log('results[0].opening_crawl) ', results[0].opening_crawl)
      // document.getElementById('p-output-box-one').innerHTML = str1;
      // console.log('string 1', str1)

// var lastIndex = "";
//   function listQ(){
//   var e = document.getElementById("list");
//   if(e.selectedIndex > 0){
//     if(e.selectedIndex != lastIndex) {
//       if(1 === e.options[e.selectedIndex].value)
//       episode1 = results[0].opening_crawl;
//       document.getElementById('p-output-box-one').innerHTML = episode1;
//       lastIndex = e.selectedIndex;
//       if(2 === e.options[e.selectedIndex].value)
//       episodeDate = results[0].release_date;
//       document.getElementById('p-output-box-one').innerHTML = episodeDate;
//       lastIndex = e.selectedIndex;
//       alert("realease date")
//     }
//     else {
//       lastIndex = ""
//     }
//   }
// }
// document.getElementById("list").addEventListener("click",listQ);

// var lastIndex = "";
//   function listQ(){
//   var e = document.getElementById("list");
//   if(e.selectedIndex > 0){
//     if(e.selectedIndex != lastIndex) {
//       if(1 === e.options[e.selectedIndex].value)
//         document.getElementById("p-output-box-one").inner
//       lastIndex = e.selectedIndex;
//       if(2 === e.options[e.selectedIndex].value)
//         alert("yo");
//       lastIndex = e.selectedIndex;
//     }
//     else {
//       lastIndex = ""
//     }
//   }
// }
// document.getElementById("list").addEventListener("click",listQ);

// <select id="list">
//   <option value="1">One</option>
//   <option value="2">Two</option>
//   <option value="3">Three</option>
//   <option value="Blank Test">Four</option>
// </select>
//
// <script type="text/javascript">
//   function swList() {
//     let input = document.getElementById("sw-list");
//     if(input.selectedIndex > 0){
//       if("Blank Test" === input.options[input.selectedIndex].value){ alert("yo"); }
//     }
//   }
//   document.getElementById("sw-list").addEventListener("click", swList);
//   document.getElementByID("p-output-box-one").innerHTML
// </script>
