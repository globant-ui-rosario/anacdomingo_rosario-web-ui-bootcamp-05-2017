const requestAnimationFrame = window.requestAnimationFrame ||
  window.mozRequestAnimationFrame ||
  window.webkitRequestAnimationFrame ||
  window.msRequestAnimationFrame;

function drawAll() {
	drawSquare();
	drawCircle();
	drawRectangle();
	drawTriangle();
	drawAnimated();
}

function drawSquare() {
	let square = document.getElementById('sqCanvas');
	let canv = square.getContext('2d');
	canv.fillStyle = getRandomColor();
	canv.strokeStyle = getRandomColor();
	canv.lineWidth='3';
	canv.beginPath();
	canv.rect (0,0,100,100);
	canv.stroke();
	canv.fill();
}

function drawRectangle() {
	let rectangle = document.getElementById('reCanvas');
	let canv = rectangle.getContext('2d');
	canv.fillStyle = getRandomColor();
	canv.strokeStyle = getRandomColor();
	canv.lineWidth='3';
	canv.beginPath();
	canv.rect (0,0,200,100);
	canv.stroke();
	canv.fill();
}

function drawCircle() {
	let circle = document.getElementById('cirCanvas');
	let canv = circle.getContext('2d');
	canv.fillStyle = getRandomColor();
	canv.strokeStyle = getRandomColor();
	canv.lineWidth='3';
	canv.beginPath();
	canv.arc (50,50,50,0,2*Math.PI);
	canv.stroke();
	canv.fill();
}

function drawTriangle() {
	let triangle = document.getElementById('triCanvas');
	let canv = triangle.getContext('2d');
	canv.fillStyle = getRandomColor();
	canv.strokeStyle = getRandomColor();
	canv.lineWidth='3';
	canv.beginPath();
	canv.moveTo(50,0);
	canv.lineTo(100,100);
	canv.lineTo(0,100);
	canv.lineTo(50,0);
	canv.closePath();
	canv.stroke();
	canv.fill();
}

function drawAnimated () {
	var myReq = requestAnimationFrame(translation);
	function translation () {
		let canv = document.getElementById('animatedCanvas').getContext('2d');
		canv.globalCompositeOperation = 'destination-over';
		canv.fillStyle = '#423a3a';
		canv.clearRect(-1,-1,100,50);
		canv.save();
		canv.translate(1,1);
		canv.fillRect(0,0,100,50);
		canv.save();
		requestAnimationFrame(translation);
	}
}

function getRandomColor() {
 let letters = '0123456789ABCDEF';
 let color = '#';
 for (var i = 0; i < 6; i++ ) {
  color += letters[Math.floor(Math.random() * 16)];
 }
 return color;
}

document.addEventListener('load', drawAll(), false);