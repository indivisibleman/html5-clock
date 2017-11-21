var WebFont;

var bgcanvas = document.getElementById('clock-bg-canvas');
var bgctx = bgcanvas.getContext('2d');

var canvas = document.getElementById('clock-canvas');
var ctx = canvas.getContext('2d');

var TAU = Math.PI * 2;
var HEIGHT = 300;
var WIDTH = 300;
var HALF_HEIGHT = HEIGHT / 2;
var HALF_WIDTH = WIDTH / 2;
var NUMERALS = ['XII', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X', 'XI'];

function drawClockFaceText () {
  bgctx.save();

  bgctx.translate(HALF_WIDTH, HALF_HEIGHT);

  bgctx.textAlign = 'center';
  bgctx.textBaseline = 'middle';
  bgctx.font = '20px kingthings_italique';

  bgctx.fillText('IndivisibleMan', 0, -40);

  bgctx.restore();
}

function drawClockFace () {
  bgctx.save();

  bgctx.translate(HALF_WIDTH, HALF_HEIGHT);

  for (let mark = 0; mark < 60; mark++) {
    bgctx.save();

    if (mark % 5 === 0) {
      bgctx.lineWidth = 4;
    } else {
      bgctx.lineWidth = 2;
    }

    bgctx.lineCap = 'butt';

    bgctx.rotate(mark / 60 * TAU);

    bgctx.beginPath();
    bgctx.moveTo(0, 139);
    bgctx.lineTo(0, 144);
    bgctx.stroke();

    bgctx.restore();
  }

  bgctx.lineWidth = 2;

  bgctx.beginPath();
  bgctx.arc(0, 0, 139, 0, TAU, true);
  bgctx.stroke();

  bgctx.beginPath();
  bgctx.arc(0, 0, 144, 0, TAU, true);
  bgctx.stroke();

  bgctx.beginPath();
  bgctx.arc(0, 0, 148, 0, TAU, true);
  bgctx.stroke();

  bgctx.restore();

  drawHours();
}

function drawHours () {
  bgctx.save();

  bgctx.translate(HALF_WIDTH, HALF_HEIGHT);

  bgctx.textAlign = 'center';
  bgctx.textBaseline = 'middle';
  bgctx.font = '30px serif';

  for (let hour = 0; hour < 12; hour++) {
    bgctx.save();

    bgctx.rotate(hour / 12 * TAU);
    bgctx.scale(1, 2);

    bgctx.fillText(NUMERALS[hour], 0, -55);

    bgctx.restore();
  }

  bgctx.restore();
}

function drawHourHand (hour) {
  ctx.save();

  ctx.translate(HALF_WIDTH, HALF_HEIGHT);
  ctx.rotate((hour + 6) / 12 * TAU);

  ctx.beginPath();
  ctx.moveTo(-0.72048, 72.1575);
  ctx.lineTo(-1.48804, 53.5435);
  ctx.lineTo(-3.15107, 50.346);
  ctx.lineTo(-3.15107, 46.69185);
  ctx.lineTo(-1.615965, 43.60855);
  ctx.lineTo(-1.488035, 41.6673);
  ctx.lineTo(-3.406915, 40.8679);
  ctx.lineTo(-5.06995, 42.00985);
  ctx.lineTo(-5.19785, 43.4943);
  ctx.lineTo(-4.558245, 44.1795);
  ctx.lineTo(-5.3258, 44.7505);
  ctx.lineTo(-7.11675, 43.38015);
  ctx.lineTo(-7.11675, 40.98205);
  ctx.lineTo(-6.733, 39.7259);
  ctx.lineTo(-10.05905, 38.69815);
  ctx.lineTo(-11.85, 36.4142);
  ctx.lineTo(-11.59415, 32.9884);
  ctx.lineTo(-9.2915, 30.9328);
  ctx.lineTo(-5.9654, 31.0475);
  ctx.lineTo(-5.06995, 32.8747);
  ctx.lineTo(-6.733, 33.90245);
  ctx.lineTo(-8.52395, 33.7877);
  ctx.lineTo(-9.67525, 34.70125);
  ctx.lineTo(-9.03565, 36.9852);
  ctx.lineTo(-5.58165, 38.12715);
  ctx.lineTo(-3.534835, 36.5284);
  ctx.lineTo(-2.383505, 34.3587);
  ctx.lineTo(-2.255585, 31.618);
  ctx.lineTo(-3.278995, 29.56245);
  ctx.lineTo(-5.8375, 27.7354);
  ctx.lineTo(-7.7564, 26.365);
  ctx.lineTo(-7.7564, 24.08105);
  ctx.lineTo(-6.09335, 22.7108);
  ctx.lineTo(-4.686175, 22.48285);
  ctx.lineTo(-3.790695, 24.19585);
  ctx.lineTo(-2.127665, 24.53845);
  ctx.lineTo(-1.36011, 23.51065);
  ctx.lineTo(-1.36011, 22.36875);
  ctx.lineTo(-3.151065, 18.8287);
  ctx.lineTo(-4.046545, 14.94605);
  ctx.lineTo(-4.174465, 10.49235);
  ctx.lineTo(-3.15106, 7.06655);
  ctx.lineTo(-2.51143, 5.6962);
  ctx.lineTo(-5.3258, 3.869085);
  ctx.lineTo(-6.9888, 1.12833);
  ctx.lineTo(-7.3726, -2.525845);
  ctx.lineTo(-5.3258, -6.066);
  ctx.lineTo(-2.51143, -7.66465);
  ctx.lineTo(0.1750075, -8.35);
  ctx.lineTo(2.861445, -7.66475);
  ctx.lineTo(5.6758, -6.0661);
  ctx.lineTo(7.7226, -2.525945);
  ctx.lineTo(7.33885, 1.12823);
  ctx.lineTo(5.6758, 3.868985);
  ctx.lineTo(2.86144, 5.6961);
  ctx.lineTo(3.50106, 7.06645);
  ctx.lineTo(4.524465, 10.49225);
  ctx.lineTo(4.396535, 14.94595);
  ctx.lineTo(3.50105, 18.8286);
  ctx.lineTo(1.71009, 22.36865);
  ctx.lineTo(1.71009, 23.51055);
  ctx.lineTo(2.47765, 24.53835);
  ctx.lineTo(4.14068, 24.19575);
  ctx.lineTo(5.03615, 22.48275);
  ctx.lineTo(6.44335, 22.7107);
  ctx.lineTo(8.1064, 24.08095);
  ctx.lineTo(8.1064, 26.3649);
  ctx.lineTo(6.1875, 27.7353);
  ctx.lineTo(3.628985, 29.56235);
  ctx.lineTo(2.60558, 31.6179);
  ctx.lineTo(2.73351, 34.3586);
  ctx.lineTo(3.884835, 36.5283);
  ctx.lineTo(5.93165, 38.12705);
  ctx.lineTo(9.38565, 36.9851);
  ctx.lineTo(10.02525, 34.70115);
  ctx.lineTo(8.87395, 33.7876);
  ctx.lineTo(7.083, 33.90235);
  ctx.lineTo(5.41995, 32.8746);
  ctx.lineTo(6.31545, 31.0474);
  ctx.lineTo(9.6415, 30.9327);
  ctx.lineTo(11.94415, 32.9883);
  ctx.lineTo(12.2, 36.4141);
  ctx.lineTo(10.40905, 38.69805);
  ctx.lineTo(7.083, 39.7258);
  ctx.lineTo(7.46675, 40.98195);
  ctx.lineTo(7.46675, 43.38005);
  ctx.lineTo(5.6758, 44.7504);
  ctx.lineTo(4.90825, 44.1794);
  ctx.lineTo(5.54785, 43.4942);
  ctx.lineTo(5.41995, 42.00975);
  ctx.lineTo(3.756925, 40.8678);
  ctx.lineTo(1.83804, 41.6672);
  ctx.lineTo(1.96597, 43.60845);
  ctx.lineTo(3.501075, 46.69175);
  ctx.lineTo(3.501075, 50.346);
  ctx.lineTo(1.83805, 53.5435);
  ctx.lineTo(1.070495, 72.1575);
  ctx.lineTo(0.1750075, 72.5);
  ctx.lineTo(-0.72048, 72.1575);
  ctx.fill();

  ctx.restore();
}

function drawMinuteHand (minute) {
  ctx.save();

  ctx.translate(HALF_WIDTH, HALF_HEIGHT);
  ctx.rotate((minute + 30) / 60 * TAU);

  ctx.beginPath();
  ctx.moveTo(0.846677, 137.49055);
  ctx.lineTo(4.714645, 45.498585);
  ctx.lineTo(3.030846, 42.801735);
  ctx.lineTo(3.554694, 42.04819);
  ctx.lineTo(6.58554, 41.850135);
  ctx.lineTo(10.06538, 39.2723);
  ctx.lineTo(11.375, 36.2979);
  ctx.lineTo(11.18793, 32.33212);
  ctx.lineTo(9.87831, 29.357655);
  ctx.lineTo(8.157045, 28.088465);
  ctx.lineTo(6.061705, 28.00858);
  ctx.lineTo(4.6772245, 29.238055);
  ctx.lineTo(4.2656315, 30.3881);
  ctx.lineTo(4.6398105, 31.61764);
  ctx.lineTo(5.728255, 32.019925);
  ctx.lineTo(6.879145, 31.781505);
  ctx.lineTo(8.20209, 32.089735);
  ctx.lineTo(8.625435, 33.127395);
  ctx.lineTo(8.75771, 35.27259);
  ctx.lineTo(7.3554, 37.081475);
  ctx.lineTo(5.11966, 37.600565);
  ctx.lineTo(3.2676085, 36.36654);
  ctx.lineTo(2.2754225, 34.950385);
  ctx.lineTo(1.5875015, 31.72541);
  ctx.lineTo(1.5875015, 28.96317);
  ctx.lineTo(2.3812555, 25.93456);
  ctx.lineTo(3.8629175, 21.615895);
  ctx.lineTo(4.180423, 17.18504);
  ctx.lineTo(3.757091, 13.315005);
  ctx.lineTo(2.434172, 8.884215);
  ctx.lineTo(2.4870755, 8.4920505);
  ctx.lineTo(5.18583, 6.9216375);
  ctx.lineTo(7.03794, 3.7807465);
  ctx.lineTo(7.567105, 1.1446325);
  ctx.lineTo(6.826235, -2.388735);
  ctx.lineTo(4.603742, -5.361445);
  ctx.lineTo(1.4287455, -6.875685);
  ctx.lineTo(-0.00000650000000002038, -7.1);
  ctx.lineTo(-1.42875395, -6.875685);
  ctx.lineTo(-4.603755, -5.361445);
  ctx.lineTo(-6.8262545, -2.388735);
  ctx.lineTo(-7.567092, 1.1446325);
  ctx.lineTo(-7.0379205, 3.7807465);
  ctx.lineTo(-5.1858365, 6.9216375);
  ctx.lineTo(-2.4870885, 8.4920505);
  ctx.lineTo(-2.434172, 8.884215);
  ctx.lineTo(-3.7570845, 13.315005);
  ctx.lineTo(-4.180423, 17.18504);
  ctx.lineTo(-3.862924, 21.615895);
  ctx.lineTo(-2.3812555, 25.93456);
  ctx.lineTo(-1.58750371, 28.96317);
  ctx.lineTo(-1.58750371, 31.72541);
  ctx.lineTo(-2.2754225, 34.950385);
  ctx.lineTo(-3.2676085, 36.36654);
  ctx.lineTo(-5.1196925, 37.600565);
  ctx.lineTo(-7.3554195, 37.081475);
  ctx.lineTo(-8.75771, 35.27259);
  ctx.lineTo(-8.625435, 33.127395);
  ctx.lineTo(-8.20209, 32.089735);
  ctx.lineTo(-6.8791775, 31.781505);
  ctx.lineTo(-5.728242, 32.019925);
  ctx.lineTo(-4.6398105, 31.61764);
  ctx.lineTo(-4.2656315, 30.3881);
  ctx.lineTo(-4.6772245, 29.238055);
  ctx.lineTo(-6.0616855, 28.00858);
  ctx.lineTo(-8.157045, 28.088465);
  ctx.lineTo(-9.87831, 29.357655);
  ctx.lineTo(-11.18793, 32.33212);
  ctx.lineTo(-11.375, 36.2979);
  ctx.lineTo(-10.06538, 39.2723);
  ctx.lineTo(-6.585527, 41.850135);
  ctx.lineTo(-3.554694, 42.04819);
  ctx.lineTo(-3.0308395, 42.801735);
  ctx.lineTo(-4.7146385, 45.498585);
  ctx.lineTo(-0.8466705, 137.49055);
  ctx.lineTo(0, 138.5);
  ctx.lineTo(0.846677, 137.49055);
  ctx.fill();

  ctx.restore();
}

function drawSecondHand (second) {
  ctx.save();

  ctx.translate(HALF_WIDTH, HALF_HEIGHT);
  ctx.rotate((second + 30) / 60 * TAU);

  ctx.fillStyle = '#f00';

  ctx.beginPath();
  ctx.moveTo(1.5, 2.12);
  ctx.lineTo(3, 0);
  ctx.lineTo(2.12, -2.12);
  ctx.lineTo(0, -3);
  ctx.lineTo(-2.12, -2.12);
  ctx.lineTo(-3, 0);
  ctx.lineTo(-1.5, 2.12);
  ctx.lineTo(-0.42, 144);
  ctx.lineTo(0.42, 144);
  ctx.lineTo(1.5, 2.12);
  ctx.fill();

  ctx.restore();
}

function draw () {
  let now = new Date();

  let hour = now.getHours();
  let minute = now.getMinutes();
  let second = now.getSeconds();
  let millisecond = now.getMilliseconds();

  ctx.clearRect(0, 0, 300, 300);

  drawHourHand(hour + (minute / 60));
  drawMinuteHand(minute + (second / 60));
  drawSecondHand(second + (millisecond / 1000));

  window.requestAnimationFrame(draw);
}

drawClockFace();

WebFont.load({
  custom: {
    families: ['kingthings_italique']
  },
  active: function () {
    drawClockFaceText();
  }
});

window.requestAnimationFrame(draw);
