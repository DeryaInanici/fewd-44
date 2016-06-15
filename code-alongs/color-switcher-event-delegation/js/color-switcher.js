
var body = document.querySelector("body")

var ul = document.querySelector("ul")

var theme = document.querySelector(".theme")

function bodyColorChanger(color) {
	body.className = color;
}

// Events
//--------------------

ul.addEventListener('click', changeTheme);
window.addEventListener('load', reloadPage);


// Event Handler Functions
// -----------------------

function reloadPage(e) {
	// on page load, get the theme from localStorage 
	var color = localStorage.getItem('theme');

	updatePage(color);
}

function changeTheme(e) {

	// error checking. return early if li wasn't clicked
	if (e.target.tagName != 'LI') {
		return;
	}

	updatePage(e.target.className);

	// save theme to localStorage
	localStorage.setItem('theme', e.target.className);
}

	// get theme from localstorage
	// e.g. thistle
function updatePage(color) {

	body.className = color;
	theme.textContent = color;
}