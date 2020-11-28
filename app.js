let userScore = 0;
let compScore = 0;

const userScore_span = document.getElementById("user-score");
const compScore_span = document.getElementById("comp-score");

const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result>p");

const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function getComputerChoice() {
    const choices = ['r', 'p', 's'];
    const randn = Math.floor(Math.random() * 3);
    return choices[randn];
}

function toWord(letter) {
    switch (letter) {
        case 'r':
            return "Rock";
        case 'p':
            return "Paper";
        case 's':
            return "Scissors";
        default:
            return null;
    }
}

function win(userHand, compHand) {
    const userSubscript = "user".fontsize(3).sub();
    const compSubscript = "comp".fontsize(3).sub();
    const userHand_div = document.getElementById(userHand);
    userScore++;
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;
    result_p.innerHTML = `${toWord(userHand) + userSubscript} beats ${toWord(compHand) + compSubscript}. You win!`;
    userHand_div.classList.add('green-glow');
    setTimeout(() => userHand_div.classList.remove('green-glow'), 300);
}

function lose(userHand, compHand) {
    const userSubscript = "user".fontsize(3).sub();
    const compSubscript = "comp".fontsize(3).sub();
    const userHand_div = document.getElementById(userHand);
    compScore++;
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;
    result_p.innerHTML = `${toWord(userHand) + userSubscript} loses to ${toWord(compHand) + compSubscript}. You lose!`;
    userHand_div.classList.add('red-glow');
    setTimeout(() => userHand_div.classList.remove('red-glow'), 300);
}

function draw(userHand, compHand) {
    const userSubscript = "user".fontsize(3).sub();
    const compSubscript = "comp".fontsize(3).sub();
    const userHand_div = document.getElementById(userHand);
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;
    result_p.innerHTML = `${toWord(userHand) + userSubscript} ties with ${toWord(compHand) + compSubscript}. It's a draw!`;
    userHand_div.classList.add('gray-glow');
    setTimeout(() => userHand_div.classList.remove('gray-glow'), 300);
}

function game(userHand) {
    const compHand = getComputerChoice();
    switch (userHand + compHand) {
        case "rs":
        case "pr":
        case "sp":
            win(userHand, compHand);
            break;
        case "rp":
        case "ps":
        case "sr":
            lose(userHand, compHand);
            break;
        case "rr":
        case "pp":
        case "ss":
            draw(userHand, compHand);
            break;
    }
}

function main() {
    rock_div.addEventListener('click', () => game("r"));
    paper_div.addEventListener('click', () => game("p"));
    scissors_div.addEventListener('click', () => game("s"));
}

main();