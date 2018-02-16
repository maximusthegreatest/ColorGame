var numSquares = 6;
var colors = [];
var squares = document.querySelectorAll(".square");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");
var pickedColor;
var colorDisplay = document.getElementById("colorDisplay");
var message = document.getElementById("message");
var h1 = document.querySelector("h1");

init();

function init() {
	//mode buttons listeners
	setupModeButtons();
	setupSquareListeners();
	reset();
}

function setupModeButtons() {
	for(var i = 0; i < modeButtons.length; i++) {
	modeButtons[i].addEventListener("click", function() {
		modeButtons[0].classList.remove("selected");
		modeButtons[1].classList.remove("selected");
		this.classList.add("selected");
		if(this.textContent === "Easy") {
			numSquares = 3;
		} else {
			numSquares = 6;
		}
		reset();

	});
}
}


function setupSquareListeners() {
	for(var i = 0; i < squares.length; i++) {
	squares[i].addEventListener("click", function() {
		//get color of clicked square
		var clickedColor = this.style.backgroundColor;
		console.log("This is the clicked color" + clickedColor);
		if(clickedColor === pickedColor) {
			resetButton.textContent = "Play again?";
			message.textContent = "Correct!";
			changeColors(clickedColor);
			h1.style.background = clickedColor;
		} else {
			this.style.backgroundColor = "#232323";
			message.textContent = "Try Again!";
		}
		//compare color to pciked color

	});
}
}

function reset() {
	colors = generateRandomColors(numSquares);
	//pick new color
	pickedColor = pickColor();
	//change color display to match picked color
	colorDisplay.textContent = pickedColor;
	message.textContent = "";
	resetButton.textContent = "New Colors";
	//change colors of the squares
	for(i = 0; i < squares.length; i++) {
		if(colors[i]) {
		squares[i].style.display = "block";
		squares[i].style.backgroundColor = colors[i];
		} else {
		squares[i].style.display = "none";
		}
	}
	h1.style.backgroundColor = "steelblue";
}

resetButton.addEventListener("click", function() {
	reset();
});


function generateRandomColors(num) {
	//make an array
	var arr = [];
	for(var i = 0; i < num; i++) {
		//get rand color
		arr.push(randomColor())

	}

	//add num rand colors
	return arr;
	//return it
}


function randomColor() {
	//pick a "red" from 0 - 255
	//pick a  green 
	// and  blue
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);
	//(155, 252, 135)
	return "rgb("+ r + "," + " " + g + "," + " " + b + ")";
}


function changeColors(color) {
	//loop through all squares
	for(var i = 0; i < squares.length; i++) {
		//change color to match correct
		squares[i].style.backgroundColor = color;
	}
}

function pickColor() {
	var rand = Math.floor(Math.random() * colors.length);
	return colors[rand];

}


