// Structure
// ------------------------------------------------
var total = document.querySelector(".total")
var input = document.querySelector("input")
var entries = document.querySelector(".entries")

// Setup
// ------------------------------------------------
 var items = [];

// Events Listeners
// ------------------------------------------------

input.addEventListener('keypress', addItem);

// Event handler functions
// ------------------------------------------------

function addItem(e) {
	// console.log(e)
	

	if (e.keyCode == 13) {
		// Prevent default event behavior to keep form from submitting
		e.preventDefault()
		// calls update page function (createItem)
		createItem(input.value);

		// add item to array
		items.push(input.value);

		// calls update page function (updateTotal)
		updateTotal();

		// clean up the form
		input.value = "";
	}
	
}

// Update page functions
// ------------------------------------------------

function createItem(price) {
	var li = document.createElement('li'); 
	li.textContent = "$" + price;
	entries.appendChild(li);
}

//----------------------------------------------
// calculate total 

function updateTotal() {
	var newTotal = 0

	for (var index = items.length - 1; index >= 0; index--) {
		newTotal = newTotal + parseInt(items[index])
	}

	total.textContent = "$" + newTotal;
}

// Utility functions
// ------------------------------------------------

