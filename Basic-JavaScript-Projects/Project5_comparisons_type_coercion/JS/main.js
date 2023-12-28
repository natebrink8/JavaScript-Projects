// 1-Utilize the document.write() method and typeof operator to display the data type of a variable of your choosing.
// DISPLAY "string":
function step126one() {
document.write(typeof "Word");
}

// 2-Write an expression combining a string and a number
    // DISPLAY "106" using a string and number:
function step126two() {
    document.write("10", 6);
}

// 3.1-Write code utilizing the following operators: ==
// Set vars and confirm their values but not their types:
function step126three1() {
    X = 5
    Y = "5"
    document.write(X == Y);
}

// 3.2-Write code utilizing the following operators: ===
    // Set vars and confirm they are equal:
function step126three2() {
    X = 5
    Y = 5
    document.write(X===Y);
}

// 3.3-Write code utilizing the following operators: &&, >, and <
function step126three3() {
    document.write(10 > 2 && 6 > 14 );
}

// 3.4-Write code utilizing the following operators: ||, >, and <
function step126three4() {
    document.write(10 < 2 || 6 > 4);
}

// 3.5-Write code utilizing the following operators: !
    // NOT/TRUE
function step126three5() {
    document.getElementById("NotThreeFive").innerHTML = !(5 > 10);
}
