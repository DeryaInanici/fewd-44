
var body = document.querySelector("body")

var ul = document.querySelector("ul")

var theme = document.querySelector(".theme")

function bodyColorChanger(color) {
	body.className = color;
}

// Events
//--------------------

ul.addEventListener('click', changeTheme);

// Event Handler Functions
// -----------------------

function changeTheme(e) {

	// error checking. return early if li wasn't clicked
	if (e.target.tagName != 'LI') {
		return;
	}

	console.log(e.target, e.type);

	body.className = e.target.className;
	theme.textContent = e.target.className;
}

