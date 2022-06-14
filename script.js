var display = document.querySelector('.view-display')
var viewWinner = document.querySelector('.view-winner')
var playButton = document.getElementById('play-normal')
var playExtraButton = document.getElementById('play-extra')
var rockButton = document.getElementById('select-rock')
var paperButton = document.getElementById('select-paper')
var scissorsButton = document.getElementById('select-scissors')
var playerHand = document.getElementById('player-hand')
var computerHand = document.getElementById('computer-hand')
var resultArea = document.getElementById('result-text')
var selectArea = document.getElementById('display-text')
var playerScore = document.getElementById('player-wincount')
var computerScore = document.getElementById('computer-wincount')
var playerInfo = document.getElementById('player-info')
var computerInfo = document.getElementById('computer-info')
var game = new Game

playerInfo.innerText = game.player1.name + " " + game.player1.token
computerInfo.innerText = game.computer.name + " " + game.computer.token


var playerImages = ['<img src="https://user-images.githubusercontent.com/102932448/173165388-7a044f50-061d-4825-bfa6-5cc643998362.png" alt="playerRock" width="300" height="300">',
                    '<img src="https://user-images.githubusercontent.com/102932448/173165403-4c91229e-49de-4c71-a384-6466e1f5d163.png" alt="playerScissors" width="300" height="300">',
                    '<img src="https://user-images.githubusercontent.com/102932448/173165418-88691139-4719-4540-9eb1-9fcb94324fd3.png" alt="playerPaper" width="330" height="330">',
                    '<img src="https://user-images.githubusercontent.com/102932448/173282974-f765fc98-8a95-4229-ae39-180e1a511543.png" alt="playerEmpty" width="330" height="330">', ]

var computerImages = ['<img src="https://user-images.githubusercontent.com/102932448/173165438-aae944ef-9f98-42ac-802c-501576b7fa46.png" alt="computerRock" width="300" height="300">',
                      '<img src="https://user-images.githubusercontent.com/102932448/173165450-5bce8ab9-dc00-4ada-a642-a8a309d8cc58.png" alt="computerScissors" width="300" height="300">',
                      '<img src="https://user-images.githubusercontent.com/102932448/173165473-21dd088f-ba54-4d80-b580-a472ffacefcf.png" alt="computerPaper" width="330" height="330">',]



function seeWinner() {
  display.classList.toggle('hidden');
  viewWinner.classList.toggle('hidden');
}

function seeWinnerExtra() {

}

function displayPlayer() {
  if (game.player1.rock === true) {
  playerHand.innerHTML = playerImages[0]
} else if (game.player1.paper === true) {
  playerHand.innerHTML = playerImages[2]
} else if (game.player1.scissors === true) {
  playerHand.innerHTML = playerImages[1]
}
}

function selection(event) {
  if (event.target === rockButton) {
  game.player1.takeTurn('rock')
  selectArea.innerText = 'Rock!'
} else if (event.target === paperButton) {
  game.player1.takeTurn('paper')
  selectArea.innerText = 'Paper!'
} else if (event.target === scissorsButton) {
  selectArea.innerText = 'Scissors!'
  selectArea.player1.takeTurn('scissors')
}
displayPlayer()
}

function newNormalGame() {
game.newGameNormal();
}

function newExtraGame() {
  game.newGameExtra();
}

playButton.addEventListener('click', newNormalGame)
playExtraButton.addEventListener('click', newExtraGame)
rockButton.addEventListener('click', selection)
paperButton.addEventListener('click', selection)
scissorsButton.addEventListener('click', selection)
