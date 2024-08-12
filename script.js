let RPS = ["Rock", "Paper", "Scissor"]
let userInput = prompt("Rock, Paper, Scissor? ")

function getIndex()
{
    return Math.floor(Math.random() * (3 - 0))+0
}

userInput = userInput.toLowerCase()
userInput = userInput[0].toUpperCase() + userInput.slice(1)

if(userInput == RPS[0] || userInput == RPS[1] || userInput == RPS[2])
{
    let pc = RPS[getIndex()]

    if(userInput == "Rock" && pc == "Scissor")
    {
        console.log("PC chose Scissor!")
        console.log("You win!")
    }
    else if(userInput == "Paper" && pc == "Rock")
    {
        console.log("PC chose rock!")
        console.log("You win!")
    }
    else if(userInput == "Scissor" && pc == "Paper")
    {
        console.log("PC chose paper!")
        console.log("You win!")
    }
    else if(userInput == "Rock" && pc == "Paper")
    {
        console.log("PC chose paper!")
        console.log("You lose!")
    }
    else if(userInput == "Paper" && pc == "Scissor")
    {
        console.log("PC chose scissor!")
        console.log("You lose!")
    }
    else if(userInput == "Scissor" && pc == "Rock")
    {
        console.log("PC chose rock!")
        console.log("You lose!")
    }
    else
    {
        console.log("Draw!")
    }
}
