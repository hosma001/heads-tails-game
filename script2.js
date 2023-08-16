function getFLip(){
    let rnd = Math.random();
    rnd = Math.round(rnd);
    return rnd;
}

function getGuess(){
    let guess = window.prompt('enter a 1 or 0');
    guess = guess * 1;
    return guess;
}

function displayResult(flip, guess){
    if(guess !== 1 && guess !== 0){
        console.log(`Guess was ${guess}. This is not valid.`);
    
    }
    else if(flip === guess){
        console.log(`Guess was ${guess} and flip was ${flip}. Winner!`);
    }
    else {
        console.log(`Guess was ${guess} and flip was ${flip}. Loser!`);
    }
}

let flip = getFLip();
let guess = getGuess();
displayResult(flip, guess);

flip = getFLip();
guess = getGuess();
displayResult(flip, guess);

flip = getFLip();
guess = getGuess();
displayResult(flip, guess);