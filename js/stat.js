'use strict';  

var drawCloud = function (ctx, x, y, width, height) {
  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.lineTo(width, y);
  ctx.lineTo(width, height);
  ctx.lineTo(x, height);
  ctx.lineTo(x, y);
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

window.renderStatistics = function (ctx, names, times) {

  var histogramWidth = 140;
  var histogramElementHeight = 30;
  var step = 80;
  var maxTime = 0;

  ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
  drawCloud(ctx, 120, 20, 430, 300);

  ctx.fillStyle = '#ffffff';
  drawCloud(ctx, 110, 10, 420, 290);

  drawline(ctx, 120, 70, 285);
  drawline(ctx, 180, 70, 285);
  drawline(ctx, 240, 70, 285);
  drawline(ctx, 300, 70, 285);

  ctx.fillStyle = '#000000';
  ctx.font = '16px PT Mono';
  ctx.fillText('Ура вы победили!', 195, 30);
  ctx.fillText('Список результатов:', 180, 50);

  for (var i = 0; i < times.length; i++) {
    if (times[i] > maxTime) {
      maxTime = times[i]
    }
  }

  var histogramStep = histogramWidth / (maxTime / 1000);

  for (var z = 0; z < times.length; z++) {
    var name = names[z];
    var time = times[z] / 1000;
    var histogramElementWidth = histogramStep * time;

    //Random color
    var r = (Math.floor(Math.random() * 256)).toString(10);
    var g = (Math.floor(Math.random() * 256)).toString(10);
    var b = (Math.floor(Math.random() * 256)).toString(10);
    var rgba = 'rgba' + '(' + r + ',' + g + ',' + b + ',' + 0.8 + ')';

    ctx.fillStyle = '#000000';
    ctx.fillText(name, 125, step - 5);

    name === 'Вы' ? ctx.fillStyle = 'rgba(235, 16, 16, 0.8)' : ctx.fillStyle = rgba;

    ctx.fillRect(120, step, histogramElementWidth, histogramElementHeight);
    ctx.fillStyle = '#ffffff';
    ctx.fillText(time.toFixed(1) + 'c.', histogramElementWidth + 70, step + 20);

    step += 55;
  }
};  

