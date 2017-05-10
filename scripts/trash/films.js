window.onload = function starWarsFilms () {

  const whichFilm = 'films/'
  const url = 'http://swapi.co/api/' + whichFilm;

  $.ajax({
    url: url
  }).done(function(data) {
    console.log('The returned object is:', data)

    if ( whichFilm === 'films/') {
      const results = data.results;
      console.log('new results objects from data.results: ', results);
      const resultsLength = results.length;
      const films = [];

      for (let i = 0; i < resultsLength; i++) {
        films.push(results[i].title)
      }

      let ep1 = results[2].title;
      let ep2 = results[1].title;
      let ep3 = results[3].title;
      let ep4 = results[0].title;
      let ep5 = results[5].title;
      let ep6 = results[4].title;
      let ep7 = results[6].title;

      document.getElementById('p-output-box-zero-ep1').innerHTML = "EPISODE I: " + ep1.toUpperCase();
      document.getElementById('p-output-box-zero-ep2').innerHTML = "EPISODE II: " + ep2.toUpperCase();
      document.getElementById('p-output-box-zero-ep3').innerHTML = "EPISODE III: " + ep3.toUpperCase();
      document.getElementById('p-output-box-zero-ep4').innerHTML = "EPISODE IV: " + ep4.toUpperCase();
      document.getElementById('p-output-box-zero-ep5').innerHTML = "EPISODE V: " + ep5.toUpperCase();
      document.getElementById('p-output-box-zero-ep6').innerHTML = "EPISODE VI: " + ep6.toUpperCase();
      document.getElementById('p-output-box-zero-ep7').innerHTML = "EPISODE VII: " + ep7.toUpperCase();

      //episodes

      let episode1 = results[2].opening_crawl;
      document.getElementById('p-output-box-one').innerHTML = episode1;
      let episode2 = results[1].opening_crawl;
      document.getElementById('p-output-box-two').innerHTML = episode2;
      let episode3 = results[3].opening_crawl;
      document.getElementById('p-output-box-three').innerHTML = episode3;
      let episode4 = results[0].opening_crawl;
      document.getElementById('p-output-box-four').innerHTML = episode4;
      let episode5 = results[5].opening_crawl;
      document.getElementById('p-output-box-five').innerHTML = episode5;
      let episode6 = results[4].opening_crawl;
      document.getElementById('p-output-box-six').innerHTML = episode6;
      let episode7 = results[6].opening_crawl;
      document.getElementById('p-output-box-seven').innerHTML = episode7;

      let ep1Date = results[2].release_date;
      let ep2Date = results[1].release_date;
      let ep3Date = results[3].release_date;
      let ep4Date = results[0].release_date;
      let ep5Date = results[5].release_date;
      let ep6Date = results[4].release_date;
      let ep7Date = results[6].release_date;

      let epsStoryBtnOne = episode1;
      let epsStoryBtnTwo = episode2;
      let epsStoryBtnThree = episode3;
      let epsStoryBtnFour = episode4;
      let epsStoryBtnFive = episode5;
      let epsStoryBtnSix = episode6;
      let epsStoryBtnSeven = episode7;

      document.getElementById("eps1-btn-story").addEventListener("click", epsOneStory);
      function epsOneStory() {
      document.getElementById("p-output-box-one").innerHTML = episode1;
    }

      document.getElementById("eps1-btn-date").addEventListener("click", epsOneDate);
      function epsOneDate() {
      document.getElementById("p-output-box-one").innerHTML = ep1Date;
    }


      document.getElementById("eps2-btn-story").addEventListener("click", epsTwoStory);
      function epsTwoStory() {
      document.getElementById("p-output-box-two").innerHTML = epsStoryBtnTwo;
      }

      document.getElementById("eps2-btn-date").addEventListener("click", epsTwoDate);
      function epsTwoDate() {
      document.getElementById("p-output-box-two").innerHTML = ep2Date;
    }



      document.getElementById("eps3-btn-story").addEventListener("click", epsThreeStory);
      function epsThreeStory() {
      document.getElementById("p-output-box-three").innerHTML = epsStoryBtnThree;
    }

      document.getElementById("eps3-btn-date").addEventListener("click", epsThreeDate);
      function epsThreeDate() {
      document.getElementById("p-output-box-three").innerHTML = ep3Date;
    }



      document.getElementById("eps4-btn-story").addEventListener("click", epsFourStory);
      function epsFourStory() {
      document.getElementById("p-output-box-four").innerHTML = epsStoryBtnFour;
    }

      document.getElementById("eps4-btn-date").addEventListener("click", epsFourDate);
      function epsFourDate() {
      document.getElementById("p-output-box-four").innerHTML = ep4Date;
    }


      document.getElementById("eps5-btn-story").addEventListener("click", epsFiveStory);
      function epsFiveStory() {
      document.getElementById("p-output-box-five").innerHTML = epsStoryBtnFive;
    }


      document.getElementById("eps5-btn-date").addEventListener("click", epsFiveDate);
      function epsFiveDate() {
      document.getElementById("p-output-box-five").innerHTML = ep5Date;
    }



      document.getElementById("eps6-btn-story").addEventListener("click", epsSixStory);
      function epsSixStory() {
      document.getElementById("p-output-box-six").innerHTML = epsStoryBtnSix;
      }

      document.getElementById("eps6-btn-date").addEventListener("click", epsSixDate);
      function epsSixDate() {
      document.getElementById("p-output-box-six").innerHTML = ep6Date;
    }


      document.getElementById("eps7-btn-story").addEventListener("click", epsSevenStory);
      function epsSevenStory() {
      document.getElementById("p-output-box-seven").innerHTML = epsStoryBtnSeven;
    }

      document.getElementById("eps7-btn-date").addEventListener("click", epsSevenDate);
      function epsSevenDate() {
      document.getElementById("p-output-box-seven").innerHTML = ep7Date;
    }


      //jumbled up text below

      // str1 = JSON.stringify(results[0].opening_crawl);
      // console.log('results[0].opening_crawl) ', results[0].opening_crawl)
      // document.getElementById('p-output-box-one').innerHTML = str1;
      // console.log('string 1', str1)

    }
    else {
      console.log('no data was returned')
    }
    document.getElementById('p-output-box-zero').innerHTML = str;


  })
}

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
