'use strict';

window.utils = {
  KEY_CODE_ENTER: 13,
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
    return e.keyCode && e.keyCode === this.KEY_CODE_ENTER;
  }
};
