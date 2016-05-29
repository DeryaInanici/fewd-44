console.log("loaded js file");

// Markup
// <input class="fahrenheit">
// <button class="convert">Convert!</button>


//Structure
// -------------------------
var fahrenheit = document.querySelector(".fahrenheit");
var celsius = document.querySelector(".celsius");


// Events
// -------------------------
fahrenheit.addEventListener('input', fahrenheitToCelsius);
celsius.addEventListener('input', celsiusToFahrenheit);


// Event Handler
// ---------------------------

function fahrenheitToCelsius() {
	console.log("fn fahrenheitToCelsius");

	// get data from page
	var fahrenheitTemperature = parseInt(fahrenheit.value)
	console.log("Temperature:",fahrenheitTemperature)

	// do some work
	var celsiusTemperature = (fahrenheitTemperature - 32) * 5 / 9;
	celsiusTemperature = Math.round(celsiusTemperature)

	// update the page
	celsius.value = celsiusTemperature;
}

function celsiusToFahrenheit() {
	console.log("fn celsiusToFahrenheit");

	// get data from page
	var celsiusTemperature = parseInt(celsius.value)
	console.log("celsiusTemperature:",celsiusTemperature)

	// do some work
	var fahrenheitTemperature = celsiusTemperature * 9 /5 + 32;
	fahrenheitTemperature = Math.round(fahrenheitTemperature)

	// update the page
	fahrenheit.value = fahrenheitTemperature;
}