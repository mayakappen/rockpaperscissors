
var playButton = document.getElementById('play')
var rockButton = document.getElementById('select-rock')
var paperButton = document.getElementById('select-paper')
var scissorsButton = document.getElementById('select-scissors')
var playerHand = document.getElementById('player-hand')
var computerHand = document.getElementById('computer-hand')
var area = document.querySelector('.result')
var game = new Game

var playerImages = ['<img src="https://user-images.githubusercontent.com/102932448/173165388-7a044f50-061d-4825-bfa6-5cc643998362.png" alt="playerRock" width="100" height="100">',
                    '<img src="https://user-images.githubusercontent.com/102932448/173165403-4c91229e-49de-4c71-a384-6466e1f5d163.png" alt="playerScissors" width="100" height="100">',
                    '<img src="https://user-images.githubusercontent.com/102932448/173165418-88691139-4719-4540-9eb1-9fcb94324fd3.png" alt="playerPaper" width="110" height="110">', ]

var computerImages = ['<img src="https://user-images.githubusercontent.com/102932448/173165438-aae944ef-9f98-42ac-802c-501576b7fa46.png" alt="computerRock" width="100" height="100">',
                      '<img src="https://user-images.githubusercontent.com/102932448/173165450-5bce8ab9-dc00-4ada-a642-a8a309d8cc58.png" alt="computerScissors" width="100" height="100">',
                      '<img src="https://user-images.githubusercontent.com/102932448/173165473-21dd088f-ba54-4d80-b580-a472ffacefcf.png" alt="computerPaper" width="100" height="100">',]


function selectRock() {
  game.player1.selectRock();
  playerHand.innerHTML = playerImages[0];
}

function selectPaper() {
  game.player1.selectPaper();
  playerHand.innerHTML = playerImages[2]
}

function selectScissors() {
  game.player1.selectScissors();
  playerHand.innerHTML = playerImages[1]
}

function newGame() {
  game.randomFist();
  area.innerText = game.shoot();
}


playButton.addEventListener('click', newGame)
rockButton.addEventListener('click', selectRock)
paperButton.addEventListener('click', selectPaper)
scissorsButton.addEventListener('click', selectScissors)
