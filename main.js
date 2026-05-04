const rockTile = document.querySelector('#rock');
const paperTile = document.querySelector('#paper');
const scissorTile = document.querySelector('#scissor');

const rockText = document.querySelector('.rockText');
const paperText = document.querySelector('.paperText');
const scissorText = document.querySelector('.scissorText');

const resultText = document.querySelector('#textComp');
const resultBanner = document.querySelector('#computer');

const playerScoreEl = document.querySelector('#playerScore');
const compScoreEl = document.querySelector('#compScore');
const endPlayerScoreEl = document.querySelector('#EndplayerScore');
const endCompScoreEl = document.querySelector('#EndcompScore');
const endResultMessageEl = document.querySelector('#endResultMessage');

const playAgainBtn = document.querySelector('#playAgain');
const startScreen = document.querySelector('.start');
const startBtn = document.querySelector('.startGame');
const endScreen = document.querySelector('.EndGame');
const endPlayAgainBtn = document.querySelector('#EndplayAgain');
const gameContainer = document.querySelector('.todos');
const playerButtons = document.querySelector('.buttons');
const computerButtons = document.querySelector('.buttonscp');
const resetBtn = document.querySelector('.reset');

const pcTiles = {
  ROCK: document.querySelector('#pcrock'),
  PAPER: document.querySelector('#pcpaper'),
  SCISSOR: document.querySelector('#pcscissor'),
};

const options = ['ROCK', 'PAPER', 'SCISSOR'];
const WINNING_SCORE = 5;
const neutralColor = '#e8e4e6';

let scoreComp = 0;
let scorePlayer = 0;
let gameOver = false;

function toggleGameVisibility({ startVisible, gameVisible, endVisible }) {
  startScreen.style.visibility = startVisible ? 'visible' : 'hidden';
  startScreen.style.opacity = startVisible ? '1' : '0';

  gameContainer.style.visibility = gameVisible ? 'visible' : 'hidden';
  gameContainer.style.opacity = gameVisible ? '1' : '0';

  endScreen.style.visibility = endVisible ? 'visible' : 'hidden';
  endScreen.style.opacity = endVisible ? '1' : '0';

  playerButtons.style.visibility = gameVisible ? 'visible' : 'hidden';
  computerButtons.style.visibility = gameVisible ? 'visible' : 'hidden';
}

function resetPcHighlights() {
  Object.values(pcTiles).forEach((tile) => {
    tile.style.backgroundColor = neutralColor;
  });
}

function syncScores() {
  playerScoreEl.textContent = scorePlayer;
  compScoreEl.textContent = scoreComp;
  endPlayerScoreEl.textContent = scorePlayer;
  endCompScoreEl.textContent = scoreComp;
}

function setRoundUI(status, computerChoice) {
  resetPcHighlights();
  pcTiles[computerChoice].style.backgroundColor =
    status === 'WIN'
      ? 'rgba(0, 128, 0, 0.30)'
      : status === 'LOSS'
      ? 'rgba(128, 0, 0, 0.30)'
      : 'rgba(119, 128, 0, 0.30)';

  const bannerColor =
    status === 'WIN'
      ? 'rgba(0, 128, 0, 0.30)'
      : status === 'LOSS'
      ? 'rgba(128, 0, 0, 0.30)'
      : 'rgba(119, 128, 0, 0.30)';

  resultBanner.style.backgroundColor = bannerColor;
  resultText.textContent = `${status} — Computer chose ${computerChoice}`;
}

function getRoundResult(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) return 'TIE';

  const playerWins =
    (playerChoice === 'ROCK' && computerChoice === 'SCISSOR') ||
    (playerChoice === 'PAPER' && computerChoice === 'ROCK') ||
    (playerChoice === 'SCISSOR' && computerChoice === 'PAPER');

  return playerWins ? 'WIN' : 'LOSS';
}

function endGame() {
  gameOver = true;

  if (scorePlayer > scoreComp) {
    endResultMessageEl.textContent = 'You Win';
  } else if (scoreComp > scorePlayer) {
    endResultMessageEl.textContent = 'You Lose';
  } else {
    endResultMessageEl.textContent = "It's a Tie";
  }

  toggleGameVisibility({ startVisible: false, gameVisible: false, endVisible: true });
}

function playRound(playerChoice) {
  if (gameOver) return;

  const computerChoice = options[Math.floor(Math.random() * options.length)];
  const result = getRoundResult(playerChoice, computerChoice);

  if (result === 'WIN') scorePlayer += 1;
  if (result === 'LOSS') scoreComp += 1;

  setRoundUI(result, computerChoice);
  syncScores();

  if (scorePlayer >= WINNING_SCORE || scoreComp >= WINNING_SCORE) {
    endGame();
  }
}

function resetGame() {
  scoreComp = 0;
  scorePlayer = 0;
  gameOver = false;

  syncScores();
  resetPcHighlights();

  resultText.textContent = 'Computer is waiting for you :)';
  endResultMessageEl.textContent = '';
  resultBanner.style.backgroundColor = 'rgba(153, 143, 108, 0.425)';

  toggleGameVisibility({ startVisible: false, gameVisible: true, endVisible: false });
}

function setHover(tileTextEl, visible) {
  tileTextEl.style.visibility = visible ? 'visible' : 'hidden';
  tileTextEl.style.opacity = visible ? '1' : '0';
}

rockTile.addEventListener('mouseover', () => setHover(rockText, true));
rockTile.addEventListener('mouseout', () => setHover(rockText, false));
paperTile.addEventListener('mouseover', () => setHover(paperText, true));
paperTile.addEventListener('mouseout', () => setHover(paperText, false));
scissorTile.addEventListener('mouseover', () => setHover(scissorText, true));
scissorTile.addEventListener('mouseout', () => setHover(scissorText, false));

startBtn.addEventListener('click', () => {
  toggleGameVisibility({ startVisible: false, gameVisible: true, endVisible: false });
});

resetBtn.addEventListener('click', (event) => {
  event.preventDefault();
  resetGame();
});

rockTile.addEventListener('click', () => playRound('ROCK'));
paperTile.addEventListener('click', () => playRound('PAPER'));
scissorTile.addEventListener('click', () => playRound('SCISSOR'));

playAgainBtn.addEventListener('click', endGame);
endPlayAgainBtn.addEventListener('click', resetGame);

syncScores();
resetPcHighlights();
