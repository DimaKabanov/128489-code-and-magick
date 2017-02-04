'use strict';

var KEY_CODE_ENTER = 13;
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

UserNameField.required = true;
UserNameField.maxLength = 50;

var randomColor = function () {
  var num = [];

  for (var i = 0; i !== 3; i++) {
    num[i] = Math.floor(Math.random() * 256);
  }

  return 'rgb' + '(' + num[0] + ',' + num[1] + ',' + num[2] + ')';
};

var isActiveEvent = function (e) {
  return e.keyCode && e.keyCode === KEY_CODE_ENTER;
};

var handlerKeydownEvent = function (e) {
  if (e.keyCode === KEY_CODE_ESCAPE) {
    closeSetupWizardForm()
  }
};

var closeFormButton = function (e) {
  e.preventDefault();

  if (isActiveEvent(e)) {
    closeSetupWizardForm();
  }
};

var openSetupWizardForm = function () {
  windowSetup.classList.remove('invisible');
  openSetup.firstElementChild.setAttribute('aria-pressed', 'true');
  windowSetup.setAttribute('aria-hidden', 'false');

  document.addEventListener('keydown', handlerKeydownEvent);
  setupSubmit.addEventListener('keydown', closeFormButton);
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
  if (isActiveEvent(e)) {
    openSetupWizardForm();
  }
});

closeSetup.addEventListener('keydown', function (e) {
  if (isActiveEvent(e)) {
    closeSetupWizardForm();
  }
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
