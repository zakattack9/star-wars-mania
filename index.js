let buildHtmlElements = (title, director, episode, producer, opening_crawl, release) => {
  let filmDiv = $('<div class="film"></div>');
  let childrenElements = [[$('<div class="title"></div>'), `${title}`], [$('<div class="director"></div>'), `${'Director: ' + director}`], [$('<div class="episode"></div>'), `${'Episode: ' + episode}`], [$('<div class="producer"></div>'), `${'Producer: ' + producer}`], [$('<div class="opening_crawl"></div>'), `${'Opening Crawl: ' + opening_crawl}`], [$('<div class="release"></div>'), `${'Release: ' + release}`]];
  childrenElements.map((currVal, index) => $('#all-films').append(filmDiv.append(currVal[0].append(currVal[1]))));
}
$('button').click(function(){$.get("https://swapi.co/api/films/", data => data.results.map(currVal => buildHtmlElements(currVal.title, currVal.director, currVal.episode_id, currVal.producer, currVal.opening_crawl, currVal.release_date)), 'JSON')});