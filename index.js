let buildHtmlElements = (title, director, episode, producer, opening_crawl, release) => {
  let filmDiv = $('<div class="film"></div>');
  let childrenElements = [[$('<div class="title"></div>'), title], [$('<div class="director"></div>'), director], [$('<div class="episode"></div>'), episode], [$('<div class="producer"></div>'), producer], [$('<div class="opening_crawl"></div>'), opening_crawl], [$('<div class="release"></div>'), release]];
  childrenElements.map((currVal, index) => $('#films').append(filmDiv).append(currVal[0]).append(currVal[1]));
}
$('button').click(function(){$.get("https://swapi.co/api/films/", data => data.results.map(currVal => buildHtmlElements(currVal.title, currVal.director, currVal.episode_id, currVal.producer, currVal.opening_crawl, currVal.release_date)), 'JSON')});