// All code should be written in this file.
/*jshint esversion:6 */


/*Players move type */
let playerOneMoveOneType,
    playerOneMoveTwoType,
    playerOneMoveThreeType,
    playerOneMoveOneValue,
    playerOneMoveTwoValue,
    playerOneMoveThreeValue,
    playerTwoMoveOneType,
    playerTwoMoveTwoType,
    playerTwoMoveThreeType,
    playerTwoMoveOneValue,
    playerTwoMoveTwoValue,
    playerTwoMoveThreeValue;

/*Functions for PLayer's move */

const setPlayerMoves= (player, moveOneType, moveOneValue, moveTwoType, moveTwoValue, moveThreeType, moveThreeValue) => {

        // Writing Fail tests 
    if (!moveOneType || !moveOneValue || !moveTwoType || !moveTwoValue || !moveThreeType || !moveThreeValue){
        return;
    }

    if (!isValidMoveType(moveOneType) || !isValidMoveType(moveTwoType) || !isValidMoveType(moveThreeType)) {
        return;
    }   

    if(!isValidMoveValue(moveOneValue) || !isValidMoveValue(moveTwoValue) || !isValidMoveValue(moveThreeValue)){
        return;
    }

    if((moveOneValue + moveTwoValue + moveThreeValue) > 99){
        return;
    }

    if(player === 'Player One'){
        playerOneMoveOneType = moveOneType;
        playerOneMoveTwoType = moveTwoType;
        playerOneMoveThreeType = moveThreeType;
        playerOneMoveOneValue = moveOneValue;
        playerOneMoveTwoValue = moveTwoValue;
        playerOneMoveThreeValue = moveThreeValue;
    }else if(player === 'Player Two'){
        playerTwoMoveOneType = moveOneType;
        playerTwoMoveTwoType = moveTwoType;
        playerTwoMoveThreeType = moveThreeType;
        playerTwoMoveOneValue = moveOneValue;
        playerTwoMoveTwoValue = moveTwoValue;
        playerTwoMoveThreeValue = moveThreeValue;
    }
    

};

function isValidMoveType(moveType){
    return (moveType === 'rock') || (moveType === 'paper') || (moveType === 'scissors');
}

function isValidMoveValue(moveValue) {
    return (moveValue >= 1) && (moveValue <=99);
}

const getRoundWinner= (roundNumber) => {

    switch(roundNumber){
        case 1:
            return getMoveWinner(playerOneMoveOneType,
                                playerOneMoveOneValue,
                                playerTwoMoveOneType,
                                playerTwoMoveOneValue);
        
        case 2:
            return getRoundWinner(playerTwoMoveTwoType,
                                playerTwoMoveTwoValue,
                                playerTwoMoveTwoType,
                                playerTwoMoveTwoValue);

        case 3:
            return getRoundWinner(playerOneMoveThreeType,
                                playerOneMoveThreeValue,
                                playerTwoMoveTwoType,
                                playerTwoMoveTwoValue);

        default:
            return null;
    }
}

const getGameWinner = () =>{

};

const setComputerMoves = () =>{

};