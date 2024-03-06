let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScoreDisplay = document.querySelector("#user-score");
const compScoreDisplay = document.querySelector("#comp-score");
const compChoiceImg = document.querySelector("#compchoice");

const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
};

const playGame = (userChoice) => {
    const compChoice = genCompChoice();
    compChoiceImg.src = `./images/${compChoice}.png`; // Update computer choice image
    if (userChoice === compChoice) {
        msg.textContent = "It's a tie!";
    } else if (userChoice === 'rock') {
        if (compChoice === 'scissors') {
            msg.textContent = "You win!";
            userScore++;
        } else {
            msg.textContent = "You lose!";
            compScore++;
        }
    } else if (userChoice === 'paper') {
        if (compChoice === 'rock') {
            msg.textContent = "You win!";
            userScore++;
        } else {
            msg.textContent = "You lose!";
            compScore++;
        }
    } else if (userChoice === 'scissors') {
        if (compChoice === 'paper') {
            msg.textContent = "You win!";
            userScore++;
        } else {
            msg.textContent = "You lose!";
            compScore++;
        }
    }
    updateScore();
};

const updateScore = () => {
    userScoreDisplay.textContent = userScore;
    compScoreDisplay.textContent = compScore;
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => { 
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});
