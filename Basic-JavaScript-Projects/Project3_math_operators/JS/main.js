// Addition 
function additionFunction() {
    var addition = 2 + 2;
    document.getElementById("Addition").innerHTML = "2 plus 2 = " + addition;
}

// Subtraction
function subtractionFunction() {
    var subtraction = 4 - 2;
    document.getElementById("Subtraction").innerHTML = "4 minus 2 = " + subtraction;
}

// Multiplication
function multiplyFunction() {
    var multiply = 4*2;
    document.getElementById("Multiply").innerHTML = "4 times 2 = " + multiply;
}

// Remainder
function remainderFunction() {
    var remainder = 100 % 9
    document.getElementById("Remainder").innerHTML = "9 goes into 100 eleven times and has a remainder of " + remainder;
}

// Creating the variable x of the value 100 and negation of the var:
function negationFunction() {
    var x = 100
    document.getElementById("Negation").innerHTML = -x;
}

// Division
function divideFunction() {
    var divide = 4/2;
    document.getElementById("Divide").innerHTML = "4 divided by 2 = " + divide;
}

// GOBS: Several math items
function gobsOmathFunction() {
    var gobs = 100 / 10 + 6 / 3;    // should be 12 (10 + 2)
    document.getElementById("Gobs").innerHTML = "100 divided by 10, plus 6 divided by 3 = " + gobs;
}

// RANDO: Setting up the Math random for a number between 0 and 50
function randoFunction() {
    document.getElementById("Rando").innerHTML = Math.random() * 50;
    }

// Rounding a number using Math object:
function roundersFunction() {
document.getElementById("Rounder").innerHTML = Math.round(4.6);
}

// Incremental
function incrementalFunction() {
    var X = 5;
    X++;
    document.getElementById("Increment").innerHTML = "X was set to 5 but will increase by 1 to " + document.write(X) + "upon clicking.";
}
