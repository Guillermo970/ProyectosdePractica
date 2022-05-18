const ComputerChoiceDisplay = document.getElementById('computer-choice'); 
const UserChoiceDisplay = document.getElementById('User-choice');
const resultDisplay = document.getElementById('result');
const possibleChoices = document.querySelectorAll('button');
let UserChoice 
let computerChoice 
let result 

possibleChoices.forEach(possibleChoices => possibleChoices.addEventListener('click', (e) => {
    UserChoice = e.target.id 
    UserChoiceDisplay.innerHTML = UserChoice
    generateComputerChoice()
    getResult () 

}))

function generateComputerChoice (){
    const randomNumber = Math.floor(Math.random() * 3 ) +1 // Or you can use possibleChoices.length
    
    if (randomNumber === 1 ) {
        computerChoice = 'rock'
    }
    if (randomNumber === 2 ) {
        computerChoice = 'scissors'
        

    }
    if (randomNumber === 3 ) {
        computerChoice = 'paper'
        

    }
    ComputerChoiceDisplay.innerHTML = computerChoice
}

function getResult () {
    if(computerChoice === UserChoice ){
        result = "It's a Draw!"

    }
    if(computerChoice === 'rock '  &&  UserChoice === 'paper' ){
        result = "You win ! "
        
    }
    if(computerChoice === 'rock' &&  UserChoice === 'scissors' ){
        result = "You lost!"
        
    }
    if(computerChoice === 'rock' &&  UserChoice === 'rock' ){
        result = "It's a Draw!"
        
    }
    if(computerChoice === 'paper' &&  UserChoice === 'paper' ){
        result = "It's a Draw !"
        
    }
    if(computerChoice === 'paper' &&  UserChoice === 'scissors' ){
        result = "You win ! "
        
    }
    if(computerChoice === 'paper' &&  UserChoice === 'paper' ){
        result = "It's a Draw !"
        
    }
    if(computerChoice === 'paper' &&  UserChoice === 'rock' ){
        result = "You lost !"
        
    }
    resultDisplay.innerHTML = result
}