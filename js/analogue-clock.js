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

function drawHand(x, length, width, colour) {
	let y = x * TAU;
	
	ctx.save();
	
	ctx.lineWidth = width;
	ctx.lineCap = "round";
	ctx.strokeStyle = colour;
	
	ctx.beginPath();
	ctx.moveTo(HALF_WIDTH, HALF_HEIGHT);
	ctx.lineTo(HALF_WIDTH + (length * Math.sin(y)), HALF_HEIGHT - (length * Math.cos(y)));
	ctx.stroke();
	
	ctx.restore();
}

function drawClockFace() {
	bgctx.save();

	bgctx.translate(HALF_WIDTH, HALF_HEIGHT);
	
	for(let mark = 0; mark < 60; mark++) {
		bgctx.save();
		
		if(mark % 5 == 0) {
			bgctx.lineWidth = 4;
		} else {
			bgctx.lineWidth = 2;
		}
		
		bgctx.lineCap = "butt";
		
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

function drawHours() {
	bgctx.save();

	bgctx.translate(HALF_WIDTH, HALF_HEIGHT);
	
	bgctx.textAlign = "center";
	bgctx.textBaseline = "middle";
	bgctx.font = '30px serif';
	
	for(let hour = 0; hour < 12; hour++) {
		bgctx.save();
		
		bgctx.rotate(hour / 12 * TAU);
		bgctx.scale(1, 2);
		
		bgctx.fillText(NUMERALS[hour], 0, -55);
		
		bgctx.restore();
	}
	
	bgctx.restore();
}

function drawHourHand(hour) {
	ctx.save();

	ctx.translate(HALF_WIDTH, HALF_HEIGHT);
	ctx.rotate(hour / 12 * TAU);
	
	ctx.beginPath();
	
	ctx.stroke();
	
	ctx.restore();
}

function draw() {
	let now = new Date();
	
	let hour = now.getHours();
	let minute = now.getMinutes();
	let second = now.getSeconds();
	let millisecond = now.getMilliseconds();
	
	ctx.clearRect(0, 0, 300, 300);
	
	drawHourHand(hour + (minute / 60));
	//drawHand((hour + (minute / 60)) / 12, 60, 5, "#000");
	drawHand((minute + (second / 60)) / 60, 110, 2, "#000");
	drawHand((second + (millisecond / 1000)) / 60, 144, 1, "#f00");
	
	window.requestAnimationFrame(draw);
}

drawClockFace();

window.requestAnimationFrame(draw)
