
var playButton = document.getElementById('play')
var rockButton = document.getElementById('select-rock')
var paperButton = document.getElementById('select-paper')
var scissorsButton = document.getElementById('select-scissors')
var playerHand = document.getElementById('player-hand')
var computerHand = document.getElementById('computer-hand')
var area = document.querySelector('.result')


var player1 = new Player
var computer = new Player



function selectRock() {
  player1.selectRock();
  return player1
}

function selectPaper() {
  player1.selectPaper();
  return player1
}

function selectScissors() {
  player1.selectScissors();
  return player1
}


function newGame() {
  var game = new Game
  game.randomFist();
  area.innerText = game.shoot();
}

playButton.addEventListener('click', newGame)
rockButton.addEventListener('click', player1.selectRock())
paperButton.addEventListener('click', selectPaper)
scissorsButton.addEventListener('click', selectScissors)
