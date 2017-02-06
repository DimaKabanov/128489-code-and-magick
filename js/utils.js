'use strict';

window.utils = {
  getRandomElement: function (array) {
    var randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
  },
  getRandomElementExcept: function (array, elementArray) {
    var randomElement = null;
    while (!randomElement || randomElement === elementArray) {
      randomElement = this.getRandomElement(array);
    }
    return randomElement;
  },
  isActiveEvent: function (e) {
    return e.keyCode && e.keyCode === KEY_CODE_ENTER;
  }
};
