window.onload = function gettinSwapiWithIt () {

  const whoIs = 'people/'
  const url = 'http://swapi.co/api/' + whoIs

  $.ajax({
    url: url
  }).done(function(data) {
    console.log('The returned object is:', data)

    if ( whoIs === 'people/') {
      const results = data.results;
      const resultsLength = results.length;
      const people = [];

      for (let i = 0; i < resultsLength; i++) {
        people.push(results[i].name)
      }

      console.log('the people are:', people);
    }
    else {
      console.log('the person is:', data.name)
    }
  })
}
