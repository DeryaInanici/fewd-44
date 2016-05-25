// Structure
//----------------------------------
var firstNumber = document.querySelector (".first-number");
var secondNumber = document.querySelector (".second-number");
var sign = document.querySelector (".sign");
var compare = document.querySelector (".compare");


// Events
//--------------------------

// Listen for the compare button to be clicked
compare.addEventListener("click", compareNumbers);



// Event Handlers
//--------------------------------------
// Compare the first and second number

function compareNumbers () {

	var firstValue = firstNumber.value;
	firstValue = parseInt(firstValue);

	var secondValue = secondNumber.value;
	secondValue = parseInt(secondValue);

	// update the page - change the sign

	// JS Conditional (if, else if, else)
	if (firstValue > secondValue) {
		sign.textContent = ">"
	} 
	// JS Comparison (greater than, less than)		
	else if (firstValue < secondValue) {
		sign.textContent = "<";
	}

	else if (firstValue == secondValue) {
		sign.textContent = "=";
	}
}