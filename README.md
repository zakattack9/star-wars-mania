# Star Wars Mania

## Objective

Use your knowledge of HTTP requests, and jQuery to fetch star wars film information from an API and render to the DOM. Use only ES6.

## Prerequisites
  - Basic knowledge of HTTP requests using jQuery.
  - Basic understanding of API's.
  - Basic understanding of JSON.
   
## Setup
 - Clone repo to local machine.
 - Create index.js.
 - import jQuery library.
 - Link scripts to html.
 - Sanity check in browser.

## Tasks
Make a `GET` request to each endpoint. Grab and append the respective values
requested onto the DOM. **Hint:** Test a route to see what the JSON looks like being returned from the API using Postman.

#### Films

Get each film's following values: 
 - title
 - director
 - episode
 - producer
 - opening_crawl
 - release date.

##### Functions Needed
1. Create a function named **```buildHtmlElements(responseData)```**. This is where you will use jQuery to build your HTML elements and dynamically add them to the DOM.

- Example html to build for each film and append to the **`<div class="films"></div>`** container:
```html
<div class="film">
  <h2 class="film-title">FILM TITLE</h2>
  <p class="film-episode">FILM EPISODE NUMBER</p>
  <p class="film-director">FILM DIRECTOR NAME</p>
  <p class="film-release-date">FILM RELEASE DATE</p>
</div>
```
2. Create a function named **```getFilmData(id)```**. This is where you will build your Ajax call to the API passing it the film id ex. ```getFilmData(1)``` should return film data about episode 1.
    - **Hint:** You should pass a reference to your ```buildHtmlElements``` function somewhere in here.

##### Routes to hit
1. `/films/1`.
1. `/films/2`.
1. `/films/3`.
1. `/films/4`.
1. `/films/5`.
1. `/films/6`.
1. `/films/7`.


### Testing
  - Run HTML in browser. 
  - Build an event listener on the button, when clicked calls your getFilmData function. If configured functions properly, you should see the results appear on the DOM.

## Stretch Goals
1. Reformat your ```buildHtmlElements``` function using string templating.
2. Build more functions to get other film data including characters, planets, vehicles .......
3. Add simple CSS.


## Resources
[SWAPI](https://swapi.co/documentation#intro)

[jQuery Ajax](https://api.jquery.com/jQuery.ajax/)

[jQuery createElement()](https://api.jquery.com/?s=createElement%28%29)

[jQuery addClass()](https://api.jquery.com/addClass/)

[jQuery append()](https://api.jquery.com/append/)
