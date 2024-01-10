// 1.Write a function that utilizes a while loop
function Call_Loop() {
    var Digit = "";
    var X = 1;
    while (X < 11) {
        Digit += "<br>" + X;
        X++;
    }
    document.getElementById("Loop").innerHTML = Digit;
}

// 2.Write a function that utilizes a for loop
var Instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"];
var Content = "";
var Y;
function for_Loop() {
    for (Y = 0; Y < Instruments.length; Y++) {
        Content += Instruments[Y] + "<br>";
    }
    document.getElementById("List_of_instruments").innerHTML = Content;
}

// 3.Write a function that utilizes an array
function array_Function() {
    var Dog_Picture = [];
    Dog_Picture[0] = "sleeping";
    Dog_Picture[1] = "playing";
    Dog_Picture[2] = "eating";
    Dog_Picture[3] = "barking";
    document.getElementById("Array").innerHTML = "In this picture, the dog is " + Dog_Picture[2] + ".";
}

// 4.Create an object using the “let” keyword
let car = {
    make: "Honda ",
    model: "Pilot",
    year: "2016 ",
    color: "black ",
    description : function() {
        return "My car is a " + this.year + this.color + this.make + this.model + ".";
    }
};
document.getElementById("Car_object").innerHTML = car.description();
