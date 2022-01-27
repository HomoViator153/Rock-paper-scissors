const images = document.querySelectorAll('img');
const lockIn = document.querySelector('.lockIn button');
const winner = document.querySelector('.winner span');
const pChoice = document.querySelector('.playerChoice');
const cChoice = document.querySelector('.aiChoice');
const gPlayed = document.querySelector('.gPlayed');
const gWon = document.querySelector('.gWon');
const gLost = document.querySelector('.gLost');
const gDraw = document.querySelector('.gDraw');

let playerChoice = "";
let computerChoice = "";
let gamesPlayed = 0;
let wins = 0;
let losses = 0;
let draws = 0;

const chosen = (e) => {
    images.forEach(e => e.classList.remove('clicked'))
    e.target.classList.add('clicked');
    playerChoice = e.target.dataset.key;
}

const randomComputerChoice = () => {
    if (Math.floor(Math.random() * 3) === 0) computerChoice = "Papier";
    else if (Math.floor(Math.random() * 3) === 1) computerChoice = "Kamień";
    else computerChoice = "Nożyczki";
}

const whoWinResult = () => {
    gamesPlayed++;

    if ((playerChoice === "Papier" && computerChoice === "Kamień") || (playerChoice === "Kamień" && computerChoice === "Nożyczki") || (playerChoice === "Nożyczki" && computerChoice === "Papier")) {
        wins++;
        winner.textContent = "Gracz";
        winner.style.color = "green";
    } else if (playerChoice === computerChoice) {
        draws++;
        winner.textContent = "Remis";
        winner.style.color = "gray";
    } else {
        losses++;
        winner.textContent = "Komputer";
        winner.style.color = "red";
    }
}

const statisticsResult = () => {
    pChoice.textContent = playerChoice;
    cChoice.textContent = computerChoice;
    gPlayed.textContent = gamesPlayed;
    gWon.textContent = wins;
    gLost.textContent = losses;
    gDraw.textContent = draws;
}

const mainFunction = () => {
    if (playerChoice) {
        images.forEach(e => e.classList.remove('clicked'))

        randomComputerChoice();

        whoWinResult();

        statisticsResult();

        playerChoice = "";
        computerChoice = "";
    } else {
        alert("Musisz coś wybrać.")
    }
}

images.forEach(e => e.addEventListener('click', chosen));
lockIn.addEventListener('click', mainFunction);