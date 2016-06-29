
// Structure
// ------------------------------------------------
var input = document.querySelector(".task-item");
var taskButton = document.querySelector("button");
var itemsList = document.querySelector(".items");
var date = document.querySelector(".date");


// Setup
// -----------------------------------------------

var todoList = {
	tasks: []
};

// Events
// ------------------------------------------------
taskButton.addEventListener("click", submitForm);

window.addEventListener("load", reloadPage);


// Event Handlers
// ------------------------------------------------

// rebuild the todo list when page is reloaded
function reloadPage(event) {

	// get the saved data from localStorage, convert to JSON,
	// save it back into the JSON object (todoList)
	todoList = JSON.parse(localStorage.getItem('todoList'));
	createTodoList();
}

// evnet handler for when the user hits add button
function submitForm(e) {

	var task = {
		name: input.value,
		date: date.value,
		completed: false
	};

	todoList.tasks.push(task);

	// save to local storage. Keyname = string, second parameter = json object
	localStorage.setItem('todoList', JSON.stringify(todoList));
	
	createTodoList();

	// clean up the form
		input.value = "";
		date.value = "";
}



// Update Page
// ------------------------------------------------


// create the entire todo list from json data
function createTodoList() {

	// clears out the list
	itemsList.innerHTML = "";

	// adds one new task for each item in the array
	todoList.tasks.forEach(createTask);
}

// create one li on the page from json data
function createTask(task) {

	console.log(task);

	// Step 1: create markup
	var addLi = document.createElement("li");
	var checkbox = document.createElement("input");
	var labelTask = document.createElement("label");
	var labelDate = document.createElement("label");
	
	// Step 2: bedazzle markup (add attributes/content)
	checkbox.setAttribute("type", "checkbox");
	labelTask.textContent = task.name;
	labelDate.textContent = "(" + task.date + ")";
	labelDate.classList.add("gray");

	// Step 3: append new elements to DOM 
	itemsList.appendChild(addLi);
	addLi.appendChild(checkbox);
	addLi.appendChild(labelTask);
	addLi.appendChild(labelDate);
}
