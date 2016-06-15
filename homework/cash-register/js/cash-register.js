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

function updateTotal() {
	var newTotal = 0

	// for = run the loop
	// var index = 0; = set index variable to 0
	// index <= items.length - 1; = run loop for as long as it's smaller or equal to the total -1 (beacuse the position/index starts at 0, but the count/items starts at 1)
	// index = index + 1 = add 1 to the index every time the loop runs, which the loop when to stop running
	for (var index = 0; index <= items.length - 1; index = index + 1) {

	// every time the loop runs within the function add the next item to the newTotal, which started at 0.
	// use parseFloat instead of parseInt because it's decimals. Integer = ganze Zahl. 
		newTotal = newTotal + parseFloat(items[index])
	}

// when the loop is done running update the page with a string representation of the dollar amount 
	total.textContent = "$" + newTotal;
}

// Update page functions
// ------------------------------------------------
// price is an argument which stores the value, which was passed in,
// and assigns it a local name, which is price
// in this case the value is going to be input.value from line 27, because
// the createItem function was called on line 27 and the value of 
// input.value was passed into it
function createItem(price) {
	var li = document.createElement('li'); 
	li.textContent = "$" + price;
	entries.appendChild(li);
}


// Utility functions
// ------------------------------------------------

// function formatCurrency(number) {
// 	var currency = parseFloat(number);
// 	currency = currency.toFixed(2)
// 	currency = "$" + currency;
// 	return cyrrency;
// }

