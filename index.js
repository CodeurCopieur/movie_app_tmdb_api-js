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
var liAll = document.querySelectorAll('#tags li');
var search = form.elements['search'];
var genres =[];
var selectedGenre = [];

form.onsubmit = function(e) {
  e.preventDefault();
  var searchTerm = search.value;
  search.value = "";
  selectedGenre = [];
  removeClass();
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
      movies.length !== 0  ? showMovies(movies) : resultsEl.innerHTML = '<h1 class="title-error">aucun résultat trouvé</h1>';
    }
    getGenres()
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
      result += `<li class="tag" id="${genre.id}">${genre.name}</li>`
    })

    tagsEl.insertAdjacentHTML('beforeend', result)
    eventClick(tagsEl)
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

function getGenres() {

  var dataGenres = Array.prototype.slice.call(document.querySelectorAll('li[data-genres]'));
  var elt;
  var arrayGenre;
  dataGenres.forEach( data => {
    elt = data;
    arrayGenre = data.dataset.genres.split(",");
    nomGenre(elt, arrayGenre)
  })

}

function nomGenre(a, b) {

  var arrayG = []
  for (let index = 0; index < b.length; index++) {
    var element = b[index];
    if(element) {
      arrayG.push(document.getElementById(element).textContent)
    }
  }
  a.querySelector('#listeGenre').textContent = arrayG.join(', ');

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
                    <img src="${movie.backdrop_path ? IMG_URL+movie.backdrop_path : "http://via.placeholder.com/1080x1580"}" alt="${movie.original_title}">
                  </picture>
                </span>
                <span class="poster-fill">
                  <picture>
                    <img src="${movie.poster_path ? IMG_URL+movie.poster_path : "http://via.placeholder.com/1080x1580"}" alt="${movie.original_title}">
                  </picture>
              </span>
            </div>
            <div class="details">
              <h3>${movie.title}</h3>
              <p>${movie.release_date}</p>
              <ul id="listeGenre"></ul>
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

function eventClick(params) {;
  var all = Array.prototype.slice.call(params.children)

  all.forEach( li => {
    li.addEventListener('click', function() {
      if(selectedGenre.length === 0) {

        selectedGenre.push(li.id)
      } else {
        if(selectedGenre.includes(li.id)){
            
              selectedGenre.forEach(function(id, idx) {
                if(li.id === id) {
                  selectedGenre.splice(idx, 1)
                }
              })
            
        } else {

          selectedGenre.push(li.id)
        }
      }
      getMovies(API_URL+'&with_genres='+encodeURI(selectedGenre.join(',')));
      highlightSelection();
    })

  })
}

function removeClass() {
  var tags = Array.prototype.slice.call(tagsEl.children)
  tags.forEach( function(tag) {
    tag.classList.remove('active')
  })

}

function highlightSelection() {

  removeClass()
  clearBtn()

  if(selectedGenre.length !== 0) {
    selectedGenre.forEach( function(id) {
      var highlightTag = document.getElementById(id);
      highlightTag.classList.add('active');
    })
  }else {
    document.getElementById('clear').remove();
  }

}

function clearBtn() {
  let clearBtn = document.getElementById('clear')

  if (clearBtn) {
    clearBtn.classList.add('active');
  } else {
    let clear = document.createElement('div');
    clear.classList.add('tag', 'active');
    clear.id = 'clear';
    clear.textContent = 'Clear';

    clear.addEventListener('click', function() {
      selectedGenre = []
      removeClass()
      getMovies(API_URL)
      document.getElementById('clear').remove();
    })

    tagsEl.append(clear) 
  }
}