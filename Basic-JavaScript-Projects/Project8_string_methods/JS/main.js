// concat
function stringFunction() {
    var part1 = "My sentence ";
    var part2 = "will be ";
    var part3 = "run together ";
    var part4 = "quite nicely!";
    var wholeSentence = part1.concat(part2, part3, part4);
    document.getElementById("myStrings").innerHTML = wholeSentence;
}

// slice
function sliceMethod() {
    var Sentence = "All work and no play makes Johnny a dull boy!";
    var Section = Sentence.slice(27,33);
    document.getElementById("Slice").innerHTML = Section;
    }
    
// toString
function string_Method() {
    var N = 743;
    document.getElementById("Numbers_to_string").innerHTML = N.toString();
    }

// toPrecision
function precision_Method() {
    var N = 12938.3012987376112;
    document.getElementById("Precision").innerHTML = N.toPrecision(10);
    }
    

// *****JS for the EXTRAS*****
// toFixed() method.
var num = 7.83926;
var n = num.toFixed(10);
document.getElementById("demo").innerHTML = n;

// valueOf() method.
var text = "What's The Haps!";
var result = text.valueOf();
document.getElementById("valVal").innerHTML = result;


// toUpperCase() method.
function myCapsyelling() {
    var myText1 = document.getElementById("lowercaseText").innerHTML;
    document.getElementById("lowercaseText").innerHTML = myText1.toUpperCase();
}
