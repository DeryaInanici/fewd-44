
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

var seed1 = document.querySelector('.seed-1');

var seed2 = document.querySelector('.seed-2')

var seed3 = document.querySelector('.seed-3')

var seed4 = document.querySelector('.seed-4')

var seed5 = document.querySelector('.seed-5')

var seed6 = document.querySelector('.seed-6')


//Events
//--------------------

// Toggle text when clicking on number 1

number1.addEventListener('click', toggleText1);

function toggleText1() {
    text1.classList.toggle('hide');
}


// Toggle text when clicking on number 2

number2.addEventListener('click', toggleText2);

function toggleText2() {
    console.log('toggleText2')
    text2.classList.toggle('hide');
}

// Toggle text when clicking on number 3

number3.addEventListener('click', toggleText3);

function toggleText3() {
    text3.classList.toggle('hide');
}


// Toggle text when clicking on number 4

number4.addEventListener('click', toggleText4);

function toggleText4() {
    text4.classList.toggle('hide');
}


// Toggle text when clicking on number 5

number5.addEventListener('click', toggleText5);

function toggleText5() {
    text5.classList.toggle('hide');
}

// Make the fly fly

fly.addEventListener('mouseover', makeFlyFly);

function makeFlyFly() { 
TweenMax.to(fly, 0.4, {rotation: 180, ease:Quad.easeInOut});
TweenMax.to(fly, 3, {bezier:{curviness:1.25, values:[{x:100, y:250}, {x:300, y:0}, {x:500, y:400}], autoRotate:90}, delay:0.4, ease:Power1.easeOut});
TweenMax.to(fly, 0.4, {alpha: 0, delay: 2, ease:Quad.easeInOut});
}

// Make seeds fly

pusteblume.addEventListener('mouseover', makeSeedsFly);

function makeSeedsFly() {
   TweenMax.to(seed1, 2, {x:-400, y:-10, rotation:-20, ease:Quad.easeOut, onStart:changeSeedOpacity, onStartParams:[seed1]});
   TweenMax.to(seed2, 2.3, {x:-400, y:40, rotation:-40, ease:Quad.easeOut, onStart:changeSeedOpacity, onStartParams:[seed2]});
   TweenMax.to(seed3, 2.6, {x:-400, y:-60, rotation:-20, ease:Quad.easeOut, onStart:changeSeedOpacity, onStartParams:[seed3]});
   TweenMax.to(seed4, 2.5, {x:-400, y:60, rotation:-60, ease:Quad.easeOut, onStart:changeSeedOpacity, onStartParams:[seed4]});
   TweenMax.to(seed5, 3, {x:-400, y:-50, rotation:-20, ease:Quad.easeOut, onStart:changeSeedOpacity, onStartParams:[seed5]});
   TweenMax.to(seed6, 3.1, {x:-400, y:80, rotation:-10, ease:Quad.easeOut, onStart:changeSeedOpacity, onStartParams:[seed6]}); 
}

function changeSeedOpacity(seed) {
    TweenMax.set(seed, {alpha:1})
}

