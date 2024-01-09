// 1.Assign a local variable and a global variable
let myCar = "Honda Pilot" // Global var
function carFunction() {
    let myCarColor = "Black"; // Local var
    document.getElementById("wholeCar").innerHTML = "I drive a " + myCarColor + " " + myCar + ".";
}

// 2.Write a function that includes an if statement
function getDate() {
    if (new Date().getHours() < 12) {
        document.getElementById("yayThyme").innerHTML = "Good Morning.";
    }
    else {
        document.getElementById("yayThyme").innerHTML = "Good Afternoon & Evening.";
    }
}

// 3.Intentionally write a function with an error in it and use the console.log() method to debug it within the console in the Chrome Dev Tools
function guessFunction() {
    youGuess = document.getElementById("youGuess").ariaValueMax; // WHEN typing the word ".value", Visual Studio Code auto populated ".ariaValueMax" which broke the element's property and resulted in a lot of troubleshooting for me.
    console.log("this should be DOT VALUE not DOT ariaValueMax");
    if (youGuess == 5) {
    numberGuess = document.write("Great guess - 5 is my favorite number!");
    }
    else {
    numberGuess = document.write("You chose... poorly.");
    }
    document.getElementById("What_is_your_guess?").innerHTML = numberGuess;
    }
    

// 4.Write the Time_function() outlined in previous slides
function Time_Function() {
    var Time = new Date().getHours();
    var Reply;
    if (Time < 12 == Time > 0) {
        Reply = "It is morning time!";
    }
    else if (Time >= 12 == Time <18) {
        Reply = "It is afternoon.";
    }
    else {
        Reply = "It is evening time.";
    }
    document.getElementById("Time_of_day").innerHTML = Reply;
}

// fin.
