// Structure
//------------------

var input = document.querySelector("input")
var button = document.querySelector("button")
var directions = document.querySelector(".directions")

// Setup
//--------------------

var streets = [];

// Event Listener
// -----------------------

button.addEventListener('click', addStreet);

// Event Handler Functions
//---------------------------

function addStreet(e) {

	// Prevent default event behavior to keep form from submitting
	e.preventDefault()

	//error validation - return early if blank
	if (input.value == ""){
	}

	// calls update page function (create li)
	createStreet(input.value);
	
	// clean up the form
	input.value = "";

	// array stuff
	streets.push(input.value);
}

// Update Page
// -----------------------

function createStreet(name) {
	var li = document.createElement('li'); 
	li.textContent = name;
	directions.appendChild(li);
}