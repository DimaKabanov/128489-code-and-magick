'use strict';

var openSetup = document.querySelector('.setup-open');
var windowSetup = document.querySelector('.setup');
var setupWizardForm = document.querySelector('.setup-wizard-form');
var closeSetup = setupWizardForm.querySelector('.setup-close');
var coat = setupWizardForm.querySelector('#wizard-coat');
var eyes = setupWizardForm.querySelector('#wizard-eyes');
var fireball = setupWizardForm.querySelector('.setup-fireball-wrap');
var UserNameField = setupWizardForm.querySelector('.setup-user-name');

UserNameField.required = true;
UserNameField.maxLength = 50;

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
