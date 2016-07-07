
//Structure
//----------------------------------------------------

var number1 = document.querySelector('.number-1');
var text1 = document.querySelector('.text-1');

var number2 = document.querySelector('.number-2');
var text2 = document.querySelector('.text-2');

var number3 = document.querySelector('.number-3');
var text3 = document.querySelector('.text-3');

var number4 = document.querySelector('.number-4');
var text4 = document.querySelector('.text-4');

var number5 = document.querySelector('.number-5');
var text5 = document.querySelector('.text-5');

var fly = document.querySelector('.fly');

var pusteblume = document.querySelector('.pusteblume');

var seedContainer = document.querySelector('.seed-container');

var caterpillar = document.querySelector('.caterpillar');

var butterfly = document.querySelector('.butterfly');


//Events
//--------------------

// Toggle text when clicking on number 1
// ----------------------------------------------------

number1.addEventListener('click', toggleText1);

function toggleText1() {
    text1.classList.toggle('hide');
}


// Toggle text when clicking on number 2
// ----------------------------------------------------

number2.addEventListener('click', toggleText2);

function toggleText2() {
    console.log('toggleText2')
    text2.classList.toggle('hide');
}

// Toggle text when clicking on number 3
// ----------------------------------------------------

number3.addEventListener('click', toggleText3);

function toggleText3() {
    text3.classList.toggle('hide');
}


// Toggle text when clicking on number 4
// ----------------------------------------------------

number4.addEventListener('click', toggleText4);

function toggleText4() {
    text4.classList.toggle('hide');
}


// Toggle text when clicking on number 5
// ----------------------------------------------------

number5.addEventListener('click', toggleText5);

function toggleText5() {
    text5.classList.toggle('hide');
}

// Make the fly fly
// ----------------------------------------------------

fly.addEventListener('mouseover', makeFlyFly);

function makeFlyFly() { 
  var flugLinie = new Array();
  for(var i = 0; i < 6; i++) {
    var coordinate = {x:roundedRandomNumberBetween(-500,500), y:roundedRandomNumberBetween(-500,500)};
    flugLinie.push(coordinate);
  }
  flugLinie.push({x:0, y:0});
TweenMax.to(fly, 3, {bezier:{curviness:1.25, values:flugLinie, autoRotate:90}, delay:0.4, ease:Linear.easeNone});
}

// Make seeds fly
// ---------------------------------------------------

pusteblume.addEventListener('mouseover', makeSeedsFly);

function makeSeedsFly() {
  for(var i = 0; i < roundedRandomNumberBetween(7,12); i++) {
    var seed = document.createElement('img');
    seed.classList.add('seed');
    seed.src = "img/seed1.png";
    seedContainer.appendChild(seed);
    TweenMax.set(seed, {rotation:roundedRandomNumberBetween(-20,20)});
    TweenMax.to(seed, 5, {x:-800, y:roundedRandomNumberBetween(-500,300), rotation:roundedRandomNumberBetween(-10,-60), ease:Quad.easeOut, delay:i*0.06});
    TweenMax.to(seed, 1, {alpha:1, delay:1+i*0.02, onComplete:removeSeed, onCompleteParams:[seed]});
  }
}

function removeSeed(seed) {
    seedContainer.removeChild(seed);
}

// Randomize
// ----------------------------------------------------

function roundedRandomNumberBetween(min, max) {
    return Math.floor(min + (Math.random() * (max-min)));
}

// Move caterpillar
// --------------------------------------------------

caterpillar.addEventListener('mouseover', moveCaterpillar);

function moveCaterpillar() {
  caterpillar.src="img/caterpillar-1.gif";
  TweenMax.to(caterpillar, 40, {x:1500, ease:Linear.easeNone, onComplete:flyButterfly})
}


// Make butterfly fly
// -----------------------------------------------------

function flyButterfly() {
  TweenMax.set(butterfly, {display:'block', x:1250, y:600});
  TweenMax.to(butterfly, 30, {bezier:{curviness:1.25, values:[{x:100, y:-150}, {x:0, y:400}, {x:410, y:240}], autoRotate:90}, delay:0.4, ease:Linear.easeNone});
}

