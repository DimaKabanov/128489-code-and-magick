'use strict';

var KEY_CODE_ESCAPE = 27;

var openSetup = document.querySelector('.setup-open');
var windowSetup = document.querySelector('.setup');
var setupWizardForm = document.querySelector('.setup-wizard-form');
var closeSetup = setupWizardForm.querySelector('.setup-close');
var coat = setupWizardForm.querySelector('#wizard-coat');
var eyes = setupWizardForm.querySelector('#wizard-eyes');
var fireball = setupWizardForm.querySelector('.setup-fireball-wrap');
var UserNameField = setupWizardForm.querySelector('.setup-user-name');
var setupSubmit = setupWizardForm.querySelector('.setup-submit');
var colorsForCoat = [
  '#a63333',
  '#2d6dcc',
  '#2dcc57',
  '#ccbf2d',
  '#121010'
];

var colorsForEyes = [
  '#9c0ee8',
  '#353fb0',
  '#2dcc57',
  '#39664d',
  '#22403c'
];

var colorsForFireball = [
  '#e88eb5',
  '#2d6dcc',
  '#449152',
  '#916f19',
  '#2d3b2f'
];

UserNameField.required = true;
UserNameField.maxLength = 50;

var handlerKeydownEvent = function (e) {
  if (e.keyCode === KEY_CODE_ESCAPE) {
    closeSetupWizardForm();
  }
};

var closeFormButton = function (e) {
  e.preventDefault();

  if (window.utils.isActiveEvent(e)) {
    closeSetupWizardForm();
  }
};

var openSetupWizardForm = function () {
  windowSetup.classList.remove('invisible');
  openSetup.firstElementChild.setAttribute('aria-pressed', 'true');
  windowSetup.setAttribute('aria-hidden', 'false');

  document.addEventListener('keydown', handlerKeydownEvent);
  setupSubmit.addEventListener('keydown', closeFormButton);

  window.colorizeElement(coat, colorsForCoat, 'fill', 'click');
  window.colorizeElement(eyes, colorsForEyes, 'fill', 'click');
  window.colorizeElement(fireball, colorsForFireball, 'background', 'click');

  window.colorizeElement(coat, colorsForCoat, 'fill', 'keydown');
  window.colorizeElement(eyes, colorsForEyes, 'fill', 'keydown');
  window.colorizeElement(fireball, colorsForFireball, 'background', 'keydown');
};

var closeSetupWizardForm = function () {
  windowSetup.classList.add('invisible');
  openSetup.firstElementChild.setAttribute('aria-pressed', 'false');
  windowSetup.setAttribute('aria-hidden', 'true');

  document.removeEventListener('keydown', handlerKeydownEvent);
  setupSubmit.removeEventListener('keydown', closeFormButton);
};

openSetup.addEventListener('click', function () {
  openSetupWizardForm();
});

closeSetup.addEventListener('click', function () {
  closeSetupWizardForm();
});

setupSubmit.addEventListener('click', function (e) {
  e.preventDefault();
  closeSetupWizardForm();
});

openSetup.addEventListener('keydown', function (e) {
  if (window.utils.isActiveEvent(e)) {
    openSetupWizardForm();
  }
});

closeSetup.addEventListener('keydown', function (e) {
  if (window.utils.isActiveEvent(e)) {
    closeSetupWizardForm();
  }
});
