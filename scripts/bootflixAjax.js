// ombd api documentation is available here:
// http://www.omdbapi.com/

/**
 * app.getMovieById
 * @param id    - omdb id of the movie you're searching for
 */
app.getMovieById = function getMovieById(id) {

  console.log("app.getMovieById() has been called. nothing happens. wait.. some tumbleweeds are tumbling by! an ID of '" + id + "' was entered.");

  // request URL for omdb's id search
  // http://www.omdbapi.com/?i=tt0095016&plot=full&r=json
  $.ajax({
    url: 'http://www.omdbapi.com/?i=tt' + id + '&plot=full&r=json',
    type: 'GET',
    dataType: 'json',
    success: function(data) {
      var MovieView = new app.MovieView(new app.MovieModel(data));
      MovieView.render();
    },
    error: function() {
      conosole.log('Ajax is brokennn');
    }
  });
  // 1. create your ajax request and then in your success method.
  // 2. you should create a new MovieModel object based on the returned
  // result.
  // var movie = new app.MovieModel(data);
  // 3. you should create a new MovieView object based on movie model
  // 4. you call render() on the view
  // 5. your render() should append the `$el` to the DOM
}

/**
 * app.getMovieByTitle
 * @param title     - title of the movie you're searching for
 */
app.getMovieByTitle = function getMovieByTitle(title) {

  console.log("app.getMovieByTitle() has been called. the form stares at you blankly. wait, what? A title of '" + title + "' was entered");

  // request URL for omdb's title search:
  //http://www.omdbapi.com/?t=Die+Hard&y=1988&plot=full&r=json

  $.ajax({
    url: 'http://www.omdbapi.com/?t='+ title +'&y=&plot=full&r=json',
    type: 'GET',
    dataType: 'json',
    success: function(data) {
      var MovieView = new app.MovieView(new app.MovieModel(data));
      MovieView.render();
    },
    error: function() {
      conosole.log('Ajax is brokennn');
    }
  });

  // 1. create your ajax request and then in your success method.
  // 2. you should create a new MovieModel object based on the returned
  // result.
  // var movie = new app.MovieModel(data);
  // 3. you should create a new MovieView object based on movie model
  // 4. you call render() on the view
  // 5. your render() should append the `$el` to the DOM


}


/**
 * app.MovieModel
 * movie model constructor
 * @param options  - options object
 */
app.MovieModel = function MovieModel(options) {
  this.attributes = options;
  // id, title, rating, director, plot, year, genre should all be in the `options` object
  // store all the information in the model
}

/**
 * app.MovieView
 * movie view constructor
 * @param options  - options object
 */
app.MovieView = function MovieView(options) {

  // options should contain the `model` for which the view is using
  this.render = function() {
    var $movie = $('<div class="movie"> <table> <tr> <td> <img src="http://img.omdbapi.com/?i='+options.attributes.imdbID+'&apikey=d31f1a94" alt="'+options.attributes.Title+'"></td><td><h3>'+options.attributes.Title+'</h3><p> <strong>Released:</strong> '+options.attributes.Year+'<br> <strong>Directed By: </strong> '+options.attributes.Director+'<br> <em>Genre</em> '+options.attributes.Genre+'</p> <p>'+options.attributes.Plot+'</p> </td> </tr></table></div>');
    $('#movie-listing').append($movie);
  };
  // 1. create a view
  // 2. create a render() method
  // 3. render() should a div with a class of '.movie' via string concatenation
  //    you will want to add the id, title, rating, director, plot, year,
  //    and genre. See design/movielayout.html
  // 4. finally, render() will $(selector).append() each new '.movie' to "#movie-listing".
}
