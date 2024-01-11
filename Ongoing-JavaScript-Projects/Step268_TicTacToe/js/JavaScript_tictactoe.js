// This variable keeps track of whose turn it is.
let activePlayer = 'X';
// This array stores an array of moves. We use this to determine win conditions.
let selectedSquares = [];

// This function is for placing an x or o in a square.
function placeXOrO(squareNumber) {
    // This condition ensures a square hasn't been selected already.
    // The .some() method is used to check each element of the selectSquare array
    // to see if it contains the square number clicked on.
    if (!selectedSquares.some(element => element.includes(squareNumber))) {
        // This variable retrieves the HTML element id that was clicked.
        let select = document.getElementById(squareNumber);
        // This condition checks whose turn it is.
        if (activePlayer === 'X') {
            // If activePlayer is equal to 'X', the x.png is placed in HTML
            select.style.backgroundImage = 'url("images/x.png")';
            // Active player may only be X or O so, if not X, it must be O
        } else {
            // If activePlayer is equal to O, the O.png is placed in HTML
            select.style.backgroundImage = 'url("images/o.png")';
        }
        // squareNumber and activePlayer are concatenated together and added to array.
        selectedSquares.push(squareNumber + activePlayer);
        // This calls a function to check for any win conditions.
        checkWinConditions();
        // This condition is for changing the active player.
        if (activePlayer === 'X') {
            // If active player is 'X', change it to 'O'.
            activePlayer = 'O';
            // If active player is anything other than X
        } else {
            // Change the active player to X
            activePlayer = 'X';
        }
        // This function plays placement sound.
        audio('./media/place.mp3');     // should it be: "audio = 'url("media/place.mp3")';"?
        // This condition checks to see if it is the computer's turn.
        if (activePlayer === 'O') {
            // This function disables clicking for computer's turn.
            disableClick();
            // This function waits 1 second before the computer places an image and enables click.
            setTimeout(function () { computersTurn(); }, 1000);
        }
        // Returning true is needed for our computersTurn() function to work.
        return true;
    }
    // This function results in a random square being selected by the computer.
    function computersTurn() {
        // This boolean is needed for our while loop.
        let success = false;
        // This variable stores a random number 0-8.
        let pickASquare;
        // This condition allows our while loop to keep trying if a square is selected already.
        while (!success) {
            // A random number between 0 and 8 is selected.
            pickASquare = String(Math.floor(Math.random() * 9));
            // If the random number evaluated returns true, the square hasn't been selected yet.
            if (placeXOrO(pickASquare)) {
                // This line calls the function.
                placeXOrO(pickASquare);
                // This changes our boolean and ends the loop.
                success = true;
            };
        }
    }
}
