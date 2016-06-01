// Structure
//------------------------------

var parent = document.querySelector(".sponsored-articles");

// Event Handler
// ----------------------------

// Update Page
// ----------------------------

function createItem() {
	
	// Step 1: Create
	var child = document.createElement("li");
	
	// Step 2: add content and attributes
	child.textContent = "Trump wins 37 states!"; // add list item
	child.classList.add('new'); // add class
	child.setAttribute('src','img/logo.jpg') // add attribute

	// Step 3: add to DOM tree
	parent.appendChild(child);
}