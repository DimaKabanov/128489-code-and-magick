'use strict';

window.colorizeElement = function (element, colors, property, eventType) {
  var currentColor = colors[0];

  element.addEventListener(eventType, function (e) {

    if (e.type === 'click' || window.utils.isActiveEvent(e)) {
      var newColor = null;
      while (!newColor || newColor === currentColor) {
        newColor = window.utils.getRandomElementExcept(colors, currentColor);
      }
      currentColor = newColor;
      element.style[property] = currentColor;
    }

  });
};
