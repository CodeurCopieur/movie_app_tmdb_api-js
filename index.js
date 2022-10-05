var API_KEY = '';
var BASE_URL = 'https://api.themoviedb.org/3';
var API_URL = BASE_URL + '/discover/movie?sort_by=popularity.desc&'+ API_KEY;
var IMG_URL = 'https://image.tmdb.org/t/p/w500';
var searchURL = BASE_URL + '/search/movie?'+ API_KEY;
var movies;
var resultsEl = document.querySelector('.movie-list');

// TMDB


getMovies(API_URL)

async function  getMovies(url) {
  await fetch(url)
  .then( data => data.json())
  .then( data => {
    if(data){
      movies = data.results.map( element => element );
      movies ? showMovies(movies) : null;
    }
  })
  .catch( error => {
    console.log(error);
  })
}

function showMovies(movies){
  console.log('showMovies', movies);

  resultsEl.innerHTML = (
    movies.map( movie => (
      `
        <li  class="movie" data-genres="${movie.genre_ids}">
          <a href="" class="movie-link">
            <div class="movie-poster">
                <span class="backdrop-fill">
                  <picture>
                    <img src="https://www.themoviedb.org/t/p/w440_and_h660_face${movie.backdrop_path}" alt="${movie.original_title}">
                  </picture>
                </span>
                <span class="poster-fill">
                  <picture>
                    <img src="https://image.tmdb.org/t/p/w300_and_h450_bestv2/${movie.poster_path}" alt="movie.original_title">
                  </picture>
              </span>
            </div>
            <div class="details">
              <h3>${movie.original_title}</h3>
              <p>${movie.release_date}</p>
              
              <span class="green">${movie.vote_average}</span>
            </div>
            <div class="overview">
              <h3>Overview</h3>
              <p>${movie.overview}</p>
            </div>
          </a>
        </li>
      `
    )).join('')
  )
}