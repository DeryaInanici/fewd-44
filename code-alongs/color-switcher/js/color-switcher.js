
var body = document.querySelector("body")

var olive = document.querySelector(".olive")
var skyblue = document.querySelector(".skyblue")
var burlywood = document.querySelector(".burlywood")
var thistle = document.querySelector(".thistle")

var theme = document.querySelector(".theme")


function bodyColorChanger(color) {
	body.className = color;
}

// Events
//--------------------

olive.addEventListener('click', changeThemeOlive);
skyblue.addEventListener('click', changeThemeSkyblue);
burlywood.addEventListener('click', changeThemeBurlywood);
thistle.addEventListener('click', changeThemeThistle);

function changeThemeOlive() {
	body.className = "olive";
	theme.textContent = "olive";
}

function changeThemeSkyblue() {
	body.className = "skyblue";
	theme.textContent = "skyblue";
}

function changeThemeBurlywood() {
	body.className = "burlywood";
	theme.textContent = "burlywood";
}

function changeThemeThistle() {
	console.log('fn changeThemeThistle');
	body.className = "thistle";
	theme.textContent = "thistle";
}