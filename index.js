var API_KEY = 'api_key=1cf50e6248dc270629e802686245c2c8';
var BASE_URL = 'https://api.themoviedb.org/3';
var API_URL = BASE_URL + '/discover/movie?sort_by=popularity.desc&'+ API_KEY;
var IMG_URL = 'https://image.tmdb.org/t/p/w500';
var searchURL = BASE_URL + '/search/movie?'+ API_KEY;
var searchGenres = BASE_URL +'/genre/movie/list?'+ API_KEY;
var movies;
var resultsEl = document.querySelector('.movie-list');
var form = document.getElementById('form');
var tagsEl = document.getElementById('tags');
var search = form.elements['search'];
var genres =[];

form.onsubmit = function(e) {
  e.preventDefault();
  var searchTerm = search.value;
  search.value = ""
  search ? getMovies(searchURL+'&query='+searchTerm) : getMovies(API_URL);
}

// TMDB
listGenres(searchGenres)
getMovies(API_URL)

async function getMovies(url) {
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

async function listGenres(url) {
  await fetch(url)
  .then( data => data.json())
  .then( data => {
    let result = ""
    data.genres.forEach( genre => {
      result += `<li class="tag">${genre.name}</li>`
    })

    tagsEl.insertAdjacentHTML('beforeend', result)
  })
  .catch( error => {
    console.log(error);
  })
}

function getColor(vote) {
  if( vote >= 7 ) {
    return 'green'
  } else if( vote >= 5 ) {
    return 'orange'
  } else {
    return 'red'
  }
}

function getGenres(genres) {
  return genres
}

function showMovies(movies){

  resultsEl.innerHTML = (
    movies.map( movie => (
      `
        <li  class="movie" data-genres="${movie.genre_ids}">
          <div class="movie-link">
            <div class="movie-poster">
                <span class="backdrop-fill">
                  <picture>
                    <img src="${IMG_URL+movie.backdrop_path}" alt="${movie.original_title}">
                  </picture>
                </span>
                <span class="poster-fill">
                  <picture>
                    <img src="${IMG_URL+movie.poster_path}" alt="${movie.original_title}">
                  </picture>
              </span>
            </div>
            <div class="details">
              <h3>${movie.title}</h3>
              <p>${movie.release_date}</p>
              <ul>${getGenres(movie.genre_ids)}</ul>
              <span class="${getColor(movie.vote_average)}">${movie.vote_average}</span>
            </div>
            <div class="overview">
              <h3>Overview</h3>
              <p>${movie.overview}</p>
              
            </div>
          </div>
        </li>
      `
    )).join('')
  )
}