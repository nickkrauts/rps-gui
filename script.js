//for TOP internal note: computer/playerChoice == playerSelection

//take input from user on button click
function userClick() {
    
}

//randomly generate computerPlay using a random integer 0-2
function computerPlay() {
    let randInt = Math.floor(Math.random() * 3);
    //assign random number to rock, paper, or scissors
    let computerChoice = '';
    if (randInt === 0){
        computerChoice = 'rock';
    } else if (randInt === 2) {
        computerChoice = 'paper';
    } else {
        computerChoice = 'scissors'
    }
    console.log('The computer selects ' + computerChoice + '.');
    return computerChoice;
}

// have user input either rock, paper, or scissors
// convert to all lowercase and remove blank space using trim()
function playerSelection() {
    let playerChoice = prompt('Please type rock, paper, or scissors');
    playerChoice = playerChoice.trim().toLowerCase();
// ask for new input if user inputs something other than expected
//should I make this its own function for the sake of clarity?
    while (false == ((playerChoice == ('rock')) 
                    || (playerChoice == ('paper'))
                    || (playerChoice == ('scissors')))){
        playerChoice = prompt('Please check your spelling and enter rock, paper, or scissors')
        playerChoice = playerChoice.trim().toLowerCase();
    }
    console.log('You select ' + playerChoice + '.');
    return playerChoice;
}

//play one round of the game
function playRound(computerChoice,playerChoice) {
    playerChoice = playerSelection();
    computerChoice = computerPlay();

// rock > scissors, scissors > paper, paper > rock
// begin with options for user winning
    let roundResult = ''
    if (playerChoice == 'rock' && computerChoice == 'scissors') {
            //consider a more automated solution here in the future. 
        roundResult = 'You win! Rock beats scissors!';

    }
    else if (playerChoice == 'scissors' && computerChoice == 'paper') {
        roundResult = 'You win! Scissors beats paper!';

    }
    else if (playerChoice == 'paper' && computerChoice == 'rock') {
        roundResult = 'You win! Paper beats rock!';

    }//now list options for computer winning
    else if (playerChoice == 'scissors' && computerChoice == 'rock') {
        //consider a more automated solution here in the future. 
        roundResult = 'You lose! Rock beats scissors!';
    }
    else if (playerChoice == 'paper' && computerChoice == 'scissors') {
        roundResult = 'You lose! Scissors beats paper!';
    }
    else if (playerChoice == 'rock' && computerChoice == 'paper') {
        roundResult = 'You lose! Paper beats rock!';
    }//TIE!
    else {
        roundResult = 'You tied!';
    }
    console.log(roundResult)
    return roundResult;
}

function game() {
    let playerScore = 0;
    let computerScore = 0;
    //I tried to make totalRounds = playerScore + computerScore to limit redundancy   
    // but it would not add the sum between rounds
    let totalRounds = 0;
    //play 5 rounds of the game
    while (totalRounds < 5 ){
    let scoreKeeper = playRound();
    if (scoreKeeper == 'You tied!'){
        totalRounds++
    }
    else if (true == ((scoreKeeper == 'You win! Rock beats scissors!')
                || (scoreKeeper == 'You win! Scissors beats paper!')
                || (scoreKeeper == 'You win! Paper beats rock!'))) {
                    playerScore++;
                    totalRounds++;
                }
    else {computerScore++;
            totalRounds++}
     console.log(['Score: You: ' + playerScore, 'Computer ' + computerScore, 'ties: ' + (totalRounds - (playerScore + computerScore))])   }
    
    return [' You won ' + playerScore,
            ' The computer won ' + computerScore,
             'and you tied ' + (totalRounds - (playerScore + computerScore))];
}
console.log(game());    