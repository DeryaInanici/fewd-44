// Structure
// ------------------------------------------------
var textInput = document.querySelector(".text-input")
var dateInput = document.querySelector(".date-input")
var submitButton = document.querySelector(".submit-button")
var toDoList = document.querySelector(".to-do-list-ul")


// Events Listeners
// ------------------------------------------------

submitButton.addEventListener('click', addItem);

// Event handler functions
// ------------------------------------------------

function addItem(e) {
	// console.log(e)
		
		// Prevent default event behavior to keep form from submitting
		e.preventDefault()
		
		// calls update page function (createItem)
		createItem()


		// clean up the form
		textInput.value = "";
		dateInput.value = "";
	}

function createItem() {
	var li = document.createElement('li');
	var input = document.createElement('input');
	var todo = document.createElement('span');
	var date = document.createElement('span')

	input.type = 'checkbox';
	todo.textContent = textInput.value;
	date.textContent = dateInput.value;

	input.className = 'checkbox';
	todo.className = 'to-do';
	date.className = 'date';

	toDoList.appendChild(li);
	li.appendChild(input);
	li.appendChild(todo);
	li.appendChild(date);

}