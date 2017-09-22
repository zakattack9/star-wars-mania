// sort by value
function testSort(){
  var items = [
    1,3,5,6
  ];

  items.sort(function (a, b) {
    return a.value - b.value;
  });
}
console.log(testSort());


let buildHtmlElements = (responseData) => {

}


let getFilmData = (id) => {
  //$.get("https://swapi.co/api/films/", data => data.results.map(currVal => console.log(currVal)), 'JSON');
  $.get("https://swapi.co/api/films/", data => {
    console.log(data.results);
    data.results.sort((a,b) => console.log(a.episode_id - b.episode_id));
  }, 'JSON');
}
$('button').click(getFilmData());





/*$.ajax({
    url:"https://swapi.co/api/films/",
    type: "GET",
    complete: function(response) {
      console.log(response.responseJSON.count);
      let jsonResults = response.responseJSON.results
      jsonResults.map(currVal => console.log(currVal));
      console.log(response.responseJSON.results);
      $('#response').html(response.responseText);
    },
    error: function() {
      $('#reponse').html('Bummer: there was an error!');
    },
});*/
//$.get replaces code above ^