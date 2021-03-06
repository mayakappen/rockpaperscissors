var home = document.querySelector('.view-home')
var display = document.querySelector('.view-display')
var viewWinner = document.querySelector('.view-winner')
var homeButton = document.getElementById('back-home')
var normalButton = document.getElementById('normal-mode')
var spicyButton = document.getElementById('spicy-mode')
var playButton = document.getElementById('play')
var rockButton = document.getElementById('select-rock')
var paperButton = document.getElementById('select-paper')
var scissorsButton = document.getElementById('select-scissors')
var hangButton = document.getElementById('select-hang')
var peaceButton = document.getElementById('select-peace')
var playerHand = document.getElementById('player-hand')
var computerHand = document.getElementById('computer-hand')
var resultArea = document.getElementById('result-text')
var selectArea = document.getElementById('display-text')
var playerScore = document.getElementById('player-wincount')
var computerScore = document.getElementById('computer-wincount')
var playerInfo = document.getElementById('player-info')
var computerInfo = document.getElementById('computer-info')
var game = new Game()

playerInfo.innerText = game.player1.name + " " + game.player1.token
computerInfo.innerText = game.computer.name + " " + game.computer.token


var playerImages = ['<img src="https://user-images.githubusercontent.com/102932448/173165388-7a044f50-061d-4825-bfa6-5cc643998362.png" alt="playerRock" width="200" height="200">',
                    '<img src="https://user-images.githubusercontent.com/102932448/173165403-4c91229e-49de-4c71-a384-6466e1f5d163.png" alt="playerScissors" width="200" height="200">',
                    '<img src="https://user-images.githubusercontent.com/102932448/173165418-88691139-4719-4540-9eb1-9fcb94324fd3.png" alt="playerPaper" width="230" height="230">',
                    '<img src="https://user-images.githubusercontent.com/102932448/173282974-f765fc98-8a95-4229-ae39-180e1a511543.png" alt="playerEmpty" width="230" height="230">',
                    '<img src="https://user-images.githubusercontent.com/102932448/173641439-3319d5b7-c5c4-4444-9904-41682b1c81da.png" alt="playerHang" width="200" height="200">',
                    '<img src="https://user-images.githubusercontent.com/102932448/173641523-d43ecc81-58f9-4d1d-ac44-85cdd08639b6.png" alt="playerPeace" width="200" height="200">'
                    ]

var computerImages = ['<img src="https://user-images.githubusercontent.com/102932448/173165438-aae944ef-9f98-42ac-802c-501576b7fa46.png" alt="computerRock" width="200" height="200">',
                      '<img src="https://user-images.githubusercontent.com/102932448/173165450-5bce8ab9-dc00-4ada-a642-a8a309d8cc58.png" alt="computerScissors" width="200" height="200">',
                      '<img src="https://user-images.githubusercontent.com/102932448/173165473-21dd088f-ba54-4d80-b580-a472ffacefcf.png" alt="computerPaper" width="230" height="230">',
                      '<img src="https://user-images.githubusercontent.com/102932448/173641599-e3d0a2be-047d-4e42-a581-4924c5bf4115.png" alt="computerHang" width="230" height="230">',
                      '<img src="https://user-images.githubusercontent.com/102932448/173641675-1ef2a357-328c-4b99-9578-f5ddec694ca8.png" alt="computerPeace" width="230" height="230">'
                      ]



function seeWinner() {
  display.classList.toggle('hidden');
  viewWinner.classList.toggle('hidden');
  selectArea.innerText = ''
}


function displayPlayer() {
  if (game.player1.rock === true) {
  playerHand.innerHTML = playerImages[0]
} else if (game.player1.paper === true) {
  playerHand.innerHTML = playerImages[2]
} else if (game.player1.scissors === true) {
  playerHand.innerHTML = playerImages[1]
} else if (game.player1.peace === true) {
  playerHand.innerHTML = playerImages[5]
} else if (game.player1.hang === true)
  playerHand.innerHTML = playerImages[4]
}

function selection(event) {
  game.player1.selectEmpty()
  if (event.target === rockButton) {
  game.player1.takeTurn('rock')
  selectArea.innerText = 'Rock!'
} else if (event.target === paperButton) {
  game.player1.takeTurn('paper')
  selectArea.innerText = 'Paper!'
} else if (event.target === scissorsButton) {
  selectArea.innerText = 'Scissors!'
  game.player1.takeTurn('scissors')
} else if (event.target === hangButton) {
  selectArea.innerText = 'Gnar!'
  game.player1.takeTurn('hang')
} else if (event.target === peaceButton) {
  selectArea.innerText = 'Peace!'
  game.player1.takeTurn('peace')
}
displayPlayer()
}


function switchView() {
  home.classList.toggle('hidden')
  display.classList.toggle('hidden')
  homeButton.classList.toggle('hidden')
}

function normalGame() {
peaceButton.classList.add('hidden')
hangButton.classList.add('hidden')
game.toggleGameMode('normal')
switchView()
}

function spicyGame() {
switchView()
peaceButton.classList.remove('hidden')
hangButton.classList.remove('hidden')
game.toggleGameMode('spicy')
}

function newGame() {
  game.newGame();
}



homeButton.addEventListener('click', switchView )
normalButton.addEventListener('click', normalGame)
spicyButton.addEventListener('click', spicyGame)
playButton.addEventListener('click', newGame)
rockButton.addEventListener('click', selection)
paperButton.addEventListener('click', selection)
scissorsButton.addEventListener('click', selection)
hangButton.addEventListener('click', selection)
peaceButton.addEventListener('click', selection)
