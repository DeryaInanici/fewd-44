//Structure
//-----------------------

var results = document.querySelector('.results');
var input = document.querySelector('input');
var form = document.querySelector('form');
var searchInput = document.querySelector('.search-input');

// Event Listener
// ----------------------

form.addEventListener("submit", getRestaurants);


// Event Handler
// ----------------------

function getRestaurants(e) {
	console.log('worked');

	e.preventDefault();

	//building the api url
	var search = parseFloat(input.value);
	var url = "http://api.locu.com/v1_0/venue/search/?api_key=48d4f4e1060406cf81a24351fdfe65c7e83c34cf&has_menu=true&postal_code=" + search;

	// two JSON techniques:
	
	// 1. use AJAX with getJSON
	// making ajax request for data from api
	// $.getJSON(url, updateRestaurants);

	// 2. 
	// Use JSONP to get JSON data
	// create a new <script> tag instead of ajax 

	url = url + "&callback=updateRestaurants";
	var scriptTag = document.createElement("script");
	scriptTag.src = url;
	document.body.appendChild(scriptTag);
}


// Update page
// ----------------------
function updateRestaurants(json) {

	searchInput.innerHTML = "";
	
	p = document.createElement('p');
	p.textContent = "Results for " + input.value;

	searchInput.appendChild(p);

	// clear it out
	results.innerHTML = "";
	input.value = "";

	json.objects.forEach(createRestaurant);
}

function createRestaurant(restaurant) {
	// console.log('updateRestaurants');
	console.log('restaurants');

	// Step 1: create markup

	var li = document.createElement("li");
	var h2 = document.createElement("h2");
	var p = document.createElement("p");
	var a = document.createElement("a");

	// Step 2: add content / attributes

	h2.textContent = restaurant.name;
	p.textContent = restaurant.street_address;
	a.textContent = restaurant.phone;
	a.setAttribute('href', 'tel:' + restaurant.phone);


	// Step 3: append 

	li.appendChild(h2);
	li.appendChild(p);
	li.appendChild(a);
	results.appendChild(li);

}

// updateRestaurants(json.objects);