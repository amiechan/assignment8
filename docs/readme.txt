Amy Chan, Amy_Chan@student.uml.edu, amchan@cs.uml.edu
UMass Lowell Computer Science Student - 91.61 GUI Programming I
updated on August 13, 2020 at 10:55PM
Description: Scrabble Drag and Drop HW 8

This assignment was to implement 1 row of a drag and drop Scrabble game.
The user is given seven letter tiles on a tile rack and drags tiles to the 
board to create words. Their score is reported, taking letter values and bonus
squares into consideration. 

Basic functionality / Currently Working: 
- Letter tiles in the player's tile rack are selected randomly from a data structure.
- Letter tiles can be dragged and dropped, and snap to the board slots.
- Program identifies which letter is being dropped onto the board through the "word" tracker
on the score board, as  well as blank board slots.
- The board includes 2 bonus squares, which are double word multipliers.
- Score is tallied correctly, including consideration of the bonus squares. 

Additional functionality / Currently Working:
- Any number of words can be played.
- The board is cleared after each round / each word submission. 
- After playing a word, only the number of tiles needed to refill the rack are added to the hand.
- The score is kept for multiple words.
- Letter tiles can be dragged to and from the board and rack.
- Score board also shows the current score of the word being played.
- The game also keeps track of total remaining tiles.

Known issues:
- After reaching the "end" of the remaining tiles, the game continues to give the player more tiles and the counter goes negative.
- The "New Game" button has not yet been implemented.

Features to add in the future:
- Dictionary to validate words being played.
- Check for gaps inbetween tiles or only allow tiles to be placed next to each other.
- Add a table showing the current tile count for each letter. 
- Add a table of words that has been played in previous rounds, cleared at the start of the game.
- Add a button to shuffle the tile rack.
- Let letter tiles snap back to a grid on the tile rack.
