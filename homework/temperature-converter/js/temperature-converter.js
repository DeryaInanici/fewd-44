console.log("loaded js file");

// Markup
// <input class="fahrenheit">
// <button class="convert">Convert!</button>


//Structure
// -------------------------
var fahrenheit = document.querySelector(".fahrenheit");
var convert = document.querySelector(".convert");


// Events
// -------------------------
convert.addEventListener('click', fahrenheitToCelsius);


// Event Handler
// ---------------------------

function fahrenheitToCelsius() {
	console.log("fn fahrenheitToCelsius");

	// get data from page
	var x = parseInt(fahrenheit.value)
	console.log("x:",x)

	// do some work
	var z = 3 * x;

	// update the page
	fahrenheit.value = z;
}