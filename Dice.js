
//An array is created to hold each die
const dice = [
    //Each die is assigned the rollDie() function to create a random number for each one
    die1 = rollDie(),
    die2 = rollDie(),
    die3 = rollDie(),
    die4 = rollDie(),
    die5 = rollDie(),
    die6 = rollDie()
]

//The rollDie() function to be called each time one of the dies are implemented
function rollDie(){
    //here is a console log of the formula to randomize a number between 1 and 6
    //This will be applied to each die within the dice array
    console.log(Math.floor(Math.random() * 6) + 1);
}

function rollDice(){
    for(let i = 0; i < dice.length; i++){
        console.log(dice[i]);
    }
}

//Here roll dice is called to display the value of each die within the dice[] Array
rollDice();