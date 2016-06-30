
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


//Events
//--------------------

// Toggle text when clicking on number 1

number1.addEventListener('click', toggleText1);

function toggleText1() {
    if (text1.style.display === 'none') {
        text1.style.display = 'block';
    } else {
        text1.style.display = 'none';
    }
}


// Toggle text when clicking on number 2

number2.addEventListener('click', toggleText2);

function toggleText2() {
    if (text2.style.display === 'none') {
        text2.style.display = 'block';
    } else {
        text2.style.display = 'none';
    }
}

// Toggle text when clicking on number 3

number3.addEventListener('click', toggleText3);

function toggleText3() {
    if (text3.style.display === 'none') {
        text3.style.display = 'block';
    } else {
        text3.style.display = 'none';
    }
}


// Toggle text when clicking on number 4

number4.addEventListener('click', toggleText4);

function toggleText4() {
    if (text4.style.display === 'none') {
        text4.style.display = 'block';
    } else {
        text4.style.display = 'none';
    }
}


// Toggle text when clicking on number 5

number5.addEventListener('click', toggleText5);

function toggleText5() {
    if (text5.style.display === 'none') {
        text5.style.display = 'block';
    } else {
        text5.style.display = 'none';
    }
}

// Make the fly fly

// fly.addEventListener('hover', makeFlyFly);

// function makeFlyFly()

// Make seeds fly

pusteblume.addEventListener('hover', makeSeedsFly);



