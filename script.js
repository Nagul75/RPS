let RPS = ["Rock", "Paper", "Scissor"]

function getIndex()
{
    return Math.floor(Math.random() * (3 - 0))+0
}
let userWins = 0
let pcWins = 0

function playRound()
{
    let userInput = prompt("Rock, Paper, Scissor? ")
    pc = RPS[getIndex()]
    userInput = userInput.toLowerCase()
    userInput = userInput[0].toUpperCase() + userInput.slice(1)

    if(userInput == RPS[0] || userInput == RPS[1] || userInput == RPS[2])
    {
        if(userInput == "Rock" && pc == "Scissor")
        {
            console.log("PC chose Scissor!")
            console.log("You win!")
            userWins++
        }
        else if(userInput == "Paper" && pc == "Rock")
        {
            console.log("PC chose rock!")
            console.log("You win!")
            userWins++
        }
        else if(userInput == "Scissor" && pc == "Paper")
        {
            console.log("PC chose paper!")
            console.log("You win!")
            userWins++
        }
        else if(userInput == "Rock" && pc == "Paper")
        {
            console.log("PC chose paper!")
            console.log("You lose!")
            pcWins++
        }
        else if(userInput == "Paper" && pc == "Scissor")
        {
            console.log("PC chose scissor!")
            console.log("You lose!")
            pcWins++
        }
        else if(userInput == "Scissor" && pc == "Rock")
        {
            console.log("PC chose rock!")
            console.log("You lose!")
            pcWins++
        }
        else
        {
            console.log("PC chose the same!")
            console.log("Draw!")
        }
    }
    else
    {
        console.log("Incorrect input!")
    }
}

let play = true

while(play)
{
    playRound()
    input = prompt("Another round? (y/n) ")
    input = input.toLowerCase()
    if(input == "n")
    {
        console.log(`User wins: ${userWins}`)
        console.log(`PC wins: ${pcWins}`)
        play = false
    }
}

console.log("Thank you for playing RPS!")
