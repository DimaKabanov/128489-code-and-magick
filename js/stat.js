'use strict';

var drawCloud = function (ctx, x, y, width, height, background) {
  ctx.beginPath();
  ctx.fillStyle = background;
  ctx.fillRect(x, y, width, height);
  ctx.stroke();
  ctx.closePath();
  ctx.fill();
};

var drawline = function (ctx, x, y, height) {
  ctx.setLineDash([2, 3]);
  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.lineTo(x, height);
  ctx.stroke();
  ctx.closePath();
  ctx.fill();
};

var drawColumn = function (ctx, name, time, histogramElementWidth, histogramElementColor, stepBetweenElements) {
  var histogramElementHeight = 30;

  ctx.fillStyle = '#000000';
  ctx.fillText(name, 125, stepBetweenElements - 5);

  if (name === 'Вы') {
    ctx.fillStyle = 'rgba(235, 16, 16, 0.8)';
  } else {
    ctx.fillStyle = histogramElementColor;
  }

  ctx.fillRect(120, stepBetweenElements, histogramElementWidth, histogramElementHeight);
  ctx.fillStyle = '#ffffff';
  ctx.fillText(time.toFixed(1) + 'c.', histogramElementWidth + 70, stepBetweenElements + 20);
};

var randomColor = function () {
  var r = (Math.floor(Math.random() * 256)).toString(10);
  var g = (Math.floor(Math.random() * 256)).toString(10);
  var b = (Math.floor(Math.random() * 256)).toString(10);

  return 'rgba' + '(' + r + ',' + g + ',' + b + ',' + 0.8 + ')';
};

window.renderStatistics = function (ctx, names, times) {
  var histogramWidth = 140;
  var maxTime = Math.max.apply(null, times);
  var histogramStep = histogramWidth / (maxTime / 1000);

  drawCloud(ctx, 120, 20, 330, 280, 'rgba(0, 0, 0, 0.7)');
  drawCloud(ctx, 110, 10, 330, 280, '#ffffff');

  drawline(ctx, 120, 70, 285);
  drawline(ctx, 180, 70, 285);
  drawline(ctx, 240, 70, 285);
  drawline(ctx, 300, 70, 285);

  ctx.fillStyle = '#000000';
  ctx.font = '16px PT Mono';
  ctx.fillText('Ура вы победили!', 195, 30);
  ctx.fillText('Список результатов:', 180, 50);

  for (var i = 0; i < times.length; i++) {
    var name = names[i];
    var time = times[i] / 1000;
    var histogramElementWidth = histogramStep * time;
    var histogramElementColor = randomColor();
    var stepBetweenElements;

    if (i === 0) {
      stepBetweenElements = 80;
    } else {
      stepBetweenElements += 55;
    }

    drawColumn(ctx, name, time, histogramElementWidth, histogramElementColor, stepBetweenElements);
  }
};

