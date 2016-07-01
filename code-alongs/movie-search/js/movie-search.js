//Structure
//-----------------------

var results = document.querySelector('.results');
var input = document.querySelector('input');
var form = document.querySelector('form');
var searchInput = document.querySelector('.search-input');

// Event Listener
// ----------------------

form.addEventListener("submit", getMovies);


// Event Handler
// ----------------------

function getMovies(e) {
	console.log('worked');

	e.preventDefault();

	//building the api url
	var search = parseFloat(input.value);
	var url = "http://www.omdbapi.com/?s=elf" + search;

	// two JSON techniques:
	
	// 1. use AJAX with getJSON
	// making ajax request for data from api
	$.getJSON(url, updateMovies);

	// 2. 
	// Use JSONP to get JSON data
	// create a new <script> tag instead of ajax 

	// url = url + "&callback=updateRestaurants";
	// var scriptTag = document.createElement("script");
	// scriptTag.src = url;
	// document.body.appendChild(scriptTag);
}


// Update page
// ----------------------
function updateMovies(json) {

	results.innerHTML = "";
	
	p = document.createElement('p');
	p.textContent = "Results for " + input.value;

	searchInput.appendChild(p);

	// clear it out
	results.innerHTML = "";
	input.value = "";

var movies = json['Search'];

	movies.forEach(createMovieItem);
}

function createMovieItem(movie) {
	// console.log('updateRestaurants');
	console.log('movies');

	// Step 1: create markup

	var li = document.createElement("li");
	var a = document.createElement("a");

	// Step 2: add content / attributes

	a.textContent = movie['Title'];
	a.setAttribute("href", "http://www.imdb.com/title/" + movie["imdbID"]);
	a.setAttribute("id", movie["imdbID"]);

	// Step 3: append 

	li.appendChild(a);
	results.appendChild(li);

}

// function updatePoster(json {
// 	// homework: build this function!
// })

// updateRestaurants(json.objects);