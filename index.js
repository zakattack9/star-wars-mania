let buildHtmlElements = (responseData) => {

}


let getFilmData = (id) => {
  $("button").click(function() {  
    $.ajax({
        url:"https://swapi.co/api/films/",
        type: "GET",
        complete: function(response) {
          console.log(response.responseJSON.count);
          let jsonResults = response.responseJSON.results
          jsonResults.map((currVal, index) => console.log(jsonResults[index]));
          console.log(response.responseJSON.results);
          $('#response').html(response.responseText);
        },
        error: function() {
          $('#reponse').html('Bummer: there was an error!');
        },
    });
   });
}
$('button').click(getFilmData());