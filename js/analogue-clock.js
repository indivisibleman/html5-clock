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

function drawTickMarks() {
	let innerSize;
	let outerSize = 140;
	
	for(let mark = 0; mark < 60; mark++) {
		let y = TAU * mark / 60;
		
		ctx.save();
		
		if(mark % 5 == 0) {
			ctx.lineWidth = 2;
			innerSize = 125;
		} else {
			innerSize = 130;
		}
		
		ctx.lineCap = "round";
		
		ctx.beginPath();
		ctx.lineTo(HALF_WIDTH + (innerSize * Math.sin(y)), HALF_HEIGHT - (innerSize * Math.cos(y)));
		ctx.lineTo(HALF_WIDTH + (outerSize * Math.sin(y)), HALF_HEIGHT - (outerSize * Math.cos(y)));
		ctx.stroke();
		
		ctx.restore();
	}
}

function drawHours() {
	let z = 105;
	
	ctx.textAlign = "center";
	ctx.textBaseline = "middle";
	ctx.font = 'bold 20px serif';
	
	for(let hour = 0; hour < 12; hour++) {
		let y = TAU * hour / 12;
		
		ctx.fillText(NUMERALS[hour], HALF_WIDTH + (z * Math.sin(y)), HALF_HEIGHT - (z * Math.cos(y)));
	}
}

function draw() {
	let now = new Date();
	
	let hour = now.getHours();
	let minute = now.getMinutes();
	let second = now.getSeconds();
	
	ctx.clearRect(0, 0, 300, 300);
	
	ctx.beginPath();
	ctx.arc(150, 150, 140, 0, TAU, true);
	ctx.stroke();
	
	ctx.beginPath();
	ctx.arc(150, 150, 143, 0, TAU, true);
	ctx.stroke();
	
	drawTickMarks();
	
	drawHours();
	
	drawHand(hour / 12, 60, 5, "#000");
	drawHand(minute / 60, 110, 2, "#000");
	drawHand(second / 60, 130, 1, "#f00");
	
	window.requestAnimationFrame(draw);
}

window.requestAnimationFrame(draw)