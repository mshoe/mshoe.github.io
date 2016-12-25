


function Start() {
	// Making the canvas
	console.log("test");
	var canvas = document.getElementById("ensoCanvas");
	var ctx = canvas.getContext("2d");
	ctx.beginPath();
	ctx.rect(0, 0, 300, 300);
	ctx.fillStyle = "blue";
	ctx.fill();

	// Setting update interval
	//window.setInterval(Update, 20);
}

function Render() {

}

function Input() {

}

function Update() {
	Render();
	Input();
}