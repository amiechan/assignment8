/*
    Amy Chan, Amy_Chan@student.uml.edu, amchan@cs.uml.edu
    UMass Lowell Computer Science Student - 91.61 GUI Programming I
    updated on August 13, 2020 at 4:55PM
    Description: Interactive Dynamic Table HW 7
*/

// Scrabble associative array from Prof. Heines
var scrabbleTiles = [] ;
scrabbleTiles["A"] = { "value" : 1,  "original-distribution" : 9,  "remaining" : 9, "src" : "img/Scrabble_Tile_A.jpg" } ;
scrabbleTiles["B"] = { "value" : 3,  "original-distribution" : 2,  "remaining" : 2, "src" : "img/Scrabble_Tile_B.jpg" } ;
scrabbleTiles["C"] = { "value" : 3,  "original-distribution" : 2,  "remaining" : 2, "src" : "img/Scrabble_Tile_C.jpg" } ;
scrabbleTiles["D"] = { "value" : 2,  "original-distribution" : 4,  "remaining" : 4, "src" : "img/Scrabble_Tile_D.jpg" } ;
scrabbleTiles["E"] = { "value" : 1,  "original-distribution" : 12, "remaining" : 12, "src" : "img/Scrabble_Tile_E.jpg" } ;
scrabbleTiles["F"] = { "value" : 4,  "original-distribution" : 2,  "remaining" : 2, "src" : "img/Scrabble_Tile_F.jpg" } ;
scrabbleTiles["G"] = { "value" : 2,  "original-distribution" : 3,  "remaining" : 3, "src" : "img/Scrabble_Tile_G.jpg" } ;
scrabbleTiles["H"] = { "value" : 4,  "original-distribution" : 2,  "remaining" : 2, "src" : "img/Scrabble_Tile_H.jpg" } ;
scrabbleTiles["I"] = { "value" : 1,  "original-distribution" : 9,  "remaining" : 9, "src" : "img/Scrabble_Tile_I.jpg" } ;
scrabbleTiles["J"] = { "value" : 8,  "original-distribution" : 1,  "remaining" : 1, "src" : "img/Scrabble_Tile_J.jpg" } ;
scrabbleTiles["K"] = { "value" : 5,  "original-distribution" : 1,  "remaining" : 1, "src" : "img/Scrabble_Tile_K.jpg" } ;
scrabbleTiles["L"] = { "value" : 1,  "original-distribution" : 4,  "remaining" : 4, "src" : "img/Scrabble_Tile_L.jpg" } ;
scrabbleTiles["M"] = { "value" : 3,  "original-distribution" : 2,  "remaining" : 2, "src" : "img/Scrabble_Tile_M.jpg" } ;
scrabbleTiles["N"] = { "value" : 1,  "original-distribution" : 6,  "remaining" : 6, "src" : "img/Scrabble_Tile_N.jpg" } ;
scrabbleTiles["O"] = { "value" : 1,  "original-distribution" : 8,  "remaining" : 8, "src" : "img/Scrabble_Tile_O.jpg" } ;
scrabbleTiles["P"] = { "value" : 3,  "original-distribution" : 2,  "remaining" : 2, "src" : "img/Scrabble_Tile_P.jpg" } ;
scrabbleTiles["Q"] = { "value" : 10, "original-distribution" : 1,  "remaining" : 1, "src" : "img/Scrabble_Tile_Q.jpg" } ;
scrabbleTiles["R"] = { "value" : 1,  "original-distribution" : 6,  "remaining" : 6, "src" : "img/Scrabble_Tile_R.jpg" } ;
scrabbleTiles["S"] = { "value" : 1,  "original-distribution" : 4,  "remaining" : 4, "src" : "img/Scrabble_Tile_S.jpg" } ;
scrabbleTiles["T"] = { "value" : 1,  "original-distribution" : 6,  "remaining" : 6, "src" : "img/Scrabble_Tile_T.jpg" } ;
scrabbleTiles["U"] = { "value" : 1,  "original-distribution" : 4,  "remaining" : 4, "src" : "img/Scrabble_Tile_U.jpg" } ;
scrabbleTiles["V"] = { "value" : 4,  "original-distribution" : 2,  "remaining" : 2, "src" : "img/Scrabble_Tile_V.jpg" } ;
scrabbleTiles["W"] = { "value" : 4,  "original-distribution" : 2,  "remaining" : 2, "src" : "img/Scrabble_Tile_W.jpg" } ;
scrabbleTiles["X"] = { "value" : 8,  "original-distribution" : 1,  "remaining" : 1, "src" : "img/Scrabble_Tile_X.jpg" } ;
scrabbleTiles["Y"] = { "value" : 4,  "original-distribution" : 2,  "remaining" : 2, "src" : "img/Scrabble_Tile_Y.jpg" } ;
scrabbleTiles["Z"] = { "value" : 10, "original-distribution" : 1,  "remaining" : 1, "src" : "img/Scrabble_Tile_S.jpg" } ;
scrabbleTiles["_"] = { "value" : 0,  "original-distribution" : 2,  "remaining" : 2, "src" : "img/Scrabble_Tile_Blank.jpg" } ;

// Board Tiles
var scrabbleBoard = [] ;
scrabbleBoard[0] = { "letter" : "-" , "wordMultiplier" : 1 } ;
scrabbleBoard[1] = { "letter" : "-" , "wordMultiplier" : 2 } ;
scrabbleBoard[2] = { "letter" : "-" , "wordMultiplier" : 1 } ;
scrabbleBoard[3] = { "letter" : "-" , "wordMultiplier" : 1 } ;
scrabbleBoard[4] = { "letter" : "-" , "wordMultiplier" : 1 } ;
scrabbleBoard[5] = { "letter" : "-" , "wordMultiplier" : 2 } ;
scrabbleBoard[6] = { "letter" : "-" , "wordMultiplier" : 1 } ;

// Scrabble object, keeps track of score, current tiles in bag,
var scrabble = {
    remainingTiles: ""
};

var totalTiles = 100;

// Update the current word being spelled by the Player
function updateWord() {
    var word = "";

    for (var i = 0; i < scrabbleBoard.length; i++) {
        word = word.concat(scrabbleBoard[i].letter);
    }

    console.log("Current word being spelled is: " + word);
    document.getElementById("currentWord").innerHTML = word;
}

// Calculate and update the score when tiles are placed or removed from the board by the Player, including current and total score
function updateCurrentScore() {
    var currentScore = 0; 
    var multiplier = 1;
    for (var i = 0; i < scrabbleBoard.length; i++) {
        // If blank board slot, add 0 to score sum
        if (scrabbleBoard[i].letter == "-") {
            currentScore += 0;
        } else {
            // If not blank, multiply word multiplier values
            multiplier *= scrabbleBoard[i].wordMultiplier;
            // Sum the values of each tile
            currentScore += (scrabbleTiles[scrabbleBoard[i].letter].value);   
        }   
    }
    // Multiply total sum by total multiplier
    currentScore *= multiplier;
    // Add to total score
    console.log("Multiplier is:" + multiplier);
    console.log("Current score is: " + currentScore);
    document.getElementById("currentScore").innerHTML = currentScore;
}

// Update the total score to the Player when they submit their word
function submitWord() {
    // Update total score to player, add current score to current total score
    var totalScore = +(document.getElementById("totalScore").innerHTML);
    var currentScore = +(document.getElementById("currentScore").innerHTML);

    totalScore += currentScore;
    document.getElementById("totalScore").innerHTML = totalScore;
    // Clear current score
    document.getElementById("currentScore").innerHTML = 0;

    // Clear the tiles on the board after Player submits
    $(".tileOnBoard").remove();
    // Let all board slots accept draggables again
    $(".boardSlot-droppable").each( function() {
        $(this).droppable("option", "accept", ".letterTile-draggable");
    });
    // Clear word array
    for (var i = 0; i < scrabbleBoard.length; i++) {
        scrabbleBoard[i].letter = "-";
    }

    // Update cleared word to the player
    updateWord();
    // Add tiles back to the rack
    addLetterTiles();
}

// Clears scores and board, resets tile count 
function newGame() {
    console.log("New game starting.");
    // Randomize 7 letter tiles on the rack for the Player
    addLetterTiles();
}

// Randomize tiles for Player, also refills rack after submission
function addLetterTiles() {
    // Count the number of tiles on the rack 
    var rackTileCount = $("#rack img").length;
    console.log("Number of tiles on the rack: " + rackTileCount);

    // Empty rack
    if (rackTileCount == 0 && totalTiles == 0) {
        // Player wins if all tiles are used -> empty rack + no remaining tiles 
        document.getElementById("playerResult").innerHTML = "you win! :)";
        $("#submitWordButton").prop("disabled", true).addClass("disabled");
    } else {
        // Number of tiles to add to fill the rack
        var tilesToFillRack = 7 - rackTileCount;

        // If the number of tiles needed to fill the rack is greater than or equal to the total remaining, add all remaining, no need to randomize
        if (tilesToFillRack >= totalTiles) {
            // Add all remaining, no need to shuffle
            addToRack(totalTiles);
        } else {
            // Shuffle the number needed, add, update remaining count
            shuffleTiles();
            addToRack(tilesToFillRack);
        }
    }
}

// Shuffles the remaining tiles in the bag, can add to hand or skip
// There is probably a better way to do this with filter(), maybe implement in the future
function shuffleTiles() {
    // Empty remaining tiles in bag
    scrabble.remainingTiles = "";
    // To randomize, create string of ALL available tiles alphabetically (accounts for distribution)
    for(let i = 'A'.charCodeAt(0); i <= 'Z'.charCodeAt(0); i++) {
        var letter = String.fromCharCode(i);
        // Concatenate the number remaining of each character into a string
        scrabble.remainingTiles = scrabble.remainingTiles.concat(letter.repeat(scrabbleTiles[letter].remaining));
    }
    // Also concatenate the number remaining of blank tiles
    scrabble.remainingTiles = scrabble.remainingTiles.concat("_".repeat(scrabbleTiles["_"].remaining));
    console.log("Remaining tiles: " + scrabble.remainingTiles);
    // Then "shuffle" into an string to be chosen from
    var remainingTilesArr = [];
    remainingTilesArr = scrabble.remainingTiles.split("");
    remainingTilesArr.sort(function() {
        return 0.5 - Math.random();
    });
    console.log("Shuffled remaining tiles: " + remainingTilesArr);
    // Shuffled string of remaining tiles
    scrabble.remainingTiles = remainingTilesArr.join("");
}

// Adding to hand
function addToRack(amount) {
    var tilesToAdd = "";
    
    // Randomly choose the amount of letters required from remaining tiles
    for (var i = 0; i < amount; i++){
        tilesToAdd += scrabble.remainingTiles.charAt(Math.floor(Math.random() * scrabble.remainingTiles.length));
    }

    // Rack to add tiles to
    var tileRack = document.getElementById("letterRack");

    // Convert to string and update remaining tile count
    tilesToAddArr = tilesToAdd.split("");
    // For each letter to be added
    for (var i = 0; i < tilesToAddArr.length; i++) {
        var tileChosen = tilesToAddArr[i];
        var newTile = document.createElement("img");
        newTile.setAttribute("class", "letterTile letterTile-draggable");
        newTile.setAttribute("id", "tile"+tileChosen);
        newTile.setAttribute("letter", tileChosen);
        newTile.setAttribute("src", scrabbleTiles[tileChosen].src); 
        tileRack.appendChild(newTile);
        tileInit();
        scrabbleTiles[tileChosen].remaining--;
    }

    updateRemainingTilesCount();
}

// Updates number of remaining tiles in the bag to the Player
function updateRemainingTilesCount() {
    var counter = 0;

    for(let i = 'A'.charCodeAt(0); i <= 'Z'.charCodeAt(0); i++) {
        var letter = String.fromCharCode(i);
        counter += scrabbleTiles[letter].remaining;
    }
    counter += scrabbleTiles["_"].remaining;
    document.getElementById("remainingTiles").innerHTML = counter;
}

function tileInit() {
    // Draggable letter tiles
    $(".letterTile-draggable").draggable({
        cursor: "move",
        revert: "invalid",
        snap:".boardTile",
        snap: ".rack",
    });
}

$(function(){
    // Set up a new game
    newGame();

    // Droppable board slot
    $(".boardSlot-droppable").droppable({
        // When a letter tile is dropped onto the board slot
        drop: function(event, ui) {
            var slot, char, boardPosition;

            // Add class to tiles on the board
            ui.draggable.addClass("tileOnBoard");

            // Board slot #
            slot = $(this).attr("id");
            boardPosition = slot;
            // Letter tile character
            char = ui.draggable.attr("letter");
            console.log("Tile " + char + " was dropped on slot " + slot);
            
            // Positions the draggable letter tiles to the center of the board tile
            ui.draggable.position({
                my: "center center",
                at: "center",
                of: $(this),
                using: function(pos) {
                    $(this).animate(pos, 200, "linear");
                }
            });
            
            // When a letter is dropped on the board slot, add it to the word array in the corresponding index
            scrabbleBoard[slot].letter = char;

            // Update the ScoreLine
            updateWord();
            updateCurrentScore();

            // Only accept the letter tile being dragged and dropped onto the slot, prevents more than one tile being on one slot
            $(this).droppable("option", "accept", ui.draggable);
        },

        // When a letter tile is dragged off the board slot
        out: function(event, ui) { 
            var char = ui.draggable.attr("letter");
            console.log("Tile " + char + " was dragged off the board");
            // Remove class when removed from board
            ui.draggable.removeClass("tileOnBoard");

            // If a letter tile is dragged off the slot, the slot now accepts any draggable, prevents more than one tile being on one slot
            $(this).droppable("option", "accept", ".letterTile-draggable");
            var slot;
            // Board slot # 
            slot = $(this).attr("id");
            
            // Remove from word array
            scrabbleBoard[slot].letter = "-";
            updateWord();
            updateCurrentScore();
        }
    });

    // Droppable rack
    $(".rack-droppable").droppable({
        // When a letter tile is dropped onto the rack
        drop: function(event, ui) {
            // Letter tile character
            var char = ui.draggable.attr("letter");
            console.log("Tile " + char + " was dropped on the rack");
        },

        // When a letter tile is dragged off the rack
        out: function(event, ui) {
            var char = ui.draggable.attr("letter");
            console.log("Tile " + char + " was dragged off the rack");
        }
    })
});
