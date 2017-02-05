'use strict';

window.colorizeElement = function (element, colors, property, event) {
  var carrentColor = colors[0];

  element.addEventListener(event, function () {
    var newColor = null;
    while (!newColor || newColor === carrentColor) {
      newColor = window.utils.getRandomElementExcept(colors, carrentColor);
    }

    carrentColor = newColor;
    element.style[property] = carrentColor;
  });
};
