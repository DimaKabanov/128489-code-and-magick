'use strict';

window.utils = (function () {
  var KEY_CODE_ENTER = 13;

  var getRandomElement = function (array) {
    var randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
  };

  return {
    getRandomElementExcept: function (array, elementArray) {
      var randomElement = null;
      while (!randomElement || randomElement === elementArray) {
        randomElement = getRandomElement(array);
      }
      return randomElement;
    },

    isActiveEvent: function (e) {
      return e.keyCode && e.keyCode === KEY_CODE_ENTER;
    }
  };
})();
