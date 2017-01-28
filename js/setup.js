'use strict';

var openSetup = document.querySelector('.setup-open');
var closeSetup = document.querySelector('.setup-close');
var windowSetup = document.querySelector('.setup');
var coat = document.getElementById('wizard-coat');
var eyes = document.getElementById('wizard-eyes');
var fireball = document.querySelector('.setup-fireball-wrap');

var randomColor = function () {
  var num = [];

  for (var i = 0; i !== 3; i++) {
    num[i] = Math.floor(Math.random() * 256);
  }

  return 'rgb' + '(' + num[0] + ',' + num[1] + ',' + num[2] + ')';
};

openSetup.addEventListener('click', function () {
  windowSetup.classList.remove('invisible');
});

closeSetup.addEventListener('click', function () {
  windowSetup.classList.add('invisible');
});

coat.addEventListener('click', function () {
  coat.style.fill = randomColor();
});

eyes.addEventListener('click', function () {
  eyes.style.fill = randomColor();
});

fireball.addEventListener('click', function () {
  fireball.style.background = randomColor();
});
