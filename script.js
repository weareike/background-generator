var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var btn_random = document.querySelector(".random")


// Sets the background color of the body to be the value of the color input fields and writes the value to the empty h3 tag.
function setGradient() {
	body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
	css.textContent = body.style.background + ";";

}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

btn_random.addEventListener("click", randomGradient);

// Sets the background gradient to the default colors of the two color inputs on page load
body.onload = setGradient();


// Creates two random RGB colors and sets the background gradient to these colors. 
// Also sets the value of the two color inputs to be the same colors. This needs to convert the RGB value to a hex value.

function randomGradient() {
	var red1 = makeRandomNumber();
	var green1 = makeRandomNumber();
	var blue1 = makeRandomNumber();
	var red2 = makeRandomNumber();
	var green2 = makeRandomNumber();
	var blue2 = makeRandomNumber();
	body.style.background = "linear-gradient(to right, " + makeRGB(red1, green1, blue1) + ", " + makeRGB(red2, green2, blue2) + ")";
	color1.value = rgbToHex(red1, green1, blue1);
	color2.value = rgbToHex(red2, green2, blue2);
	css.textContent = body.style.background + ";";
}

// This function creates a random number between 0 and 255
function makeRandomNumber() {
	var randNum = Math.floor(Math.random() * 256);
	return randNum;
}

// This function formats three numbers into the RBB format required to write the style
function makeRGB(red, green, blue) {
	var newRGB = "rgb(" + red +", " + green + ", " + blue + ")";
	return newRGB
}

// From Stack Overflow 
// Changes an RGB integer to its two digit hexadecimal value
function componentToHex(c) {
  var hex = c.toString(16);
  return hex.length == 1 ? "0" + hex : hex;
}

// From Stack Overflow
// Formats the RGB to hex format
function rgbToHex(r, g, b) {
  return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}
