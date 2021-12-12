let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
function generateTarget(){
    Math.floor(Math.random() * 9);
}

function compareGuesses(userGuess, computerGuess, secretToken){
    let userDistance = Math.abs(userGuess - secretToken);
    let computerDistance = Math.abs(computerGuess - secretToken);

    if(userDistance < computerDistance || userDistance === computerDistance){
        return true
    }else{
        return false
    }
}

function updateScore(winner){
    if(winner === 'human'){
        humanScore +=  1;
    }else {
        computerScore += 1;
    }
}

function advanceRound(){
    currentRoundNumber += 1;
}

function getAbsoluteDistance()


