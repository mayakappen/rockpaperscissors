var playButton = document.getElementById('play')
var rockButton = document.getElementById('select-rock')
var paperButton = document.getElementById('select-paper')
var scissorsButton = document.getElementById('select-scissors')
var area = document.querySelector('.result')

class Player {
  constructor() {
    this.wins = 0
    this.rock = false
    this.paper = false
    this.scissors = false
    this.fist = {
      rock: this.rock,
      paper: this.paper,
      scissors: this.scissors,
    }
  }
  selectRock() {
    this.fist.rock = true
    this.fist.paper = false
    this.fist.scissors = false
  }
  selectPaper() {
    this.fist.paper = true
    this.fist.rock = false
    this.fist.scissors = false
  }
  selectScissors() {
    this.fist.scissors = true
    this.fist.paper = false
    this.fist.rock = false
}
};

var player1 = new Player
var computer = new Player

class Game {
  constructor() {
  }
  randomFist() {
    var input = this.computerInput
      var options = ['rock', 'paper', 'scissors']
      for (var i = 0; i < options.length ; i++) {
        var randFist = Math.floor(Math.random() * options.length)
        input = randFist
        if (options[input] === 'rock') {
          computer.selectRock();
        }
          else if (options[input] === 'rock' && player1.fist.paper === true) {
          computer.selectRock();
        }
        else if (options[input] === 'paper') {
          computer.selectPaper();

        }
        else if (options[input] === 'scissors') {
          computer.selectScissors()
        }

  }
  }
  shoot() {
    if ((computer.fist.rock === true && player1.fist.rock === true) || (computer.fist.scissors === true && player1.fist.scissors === true) || (computer.fist.paper === true && player1.fist.paper === true)) {
      return 'It\'s a Draw!'
  } else if ((computer.fist.rock === true && player1.fist.scissors === true) || (computer.fist.scissors === true && player1.fist.paper === true) || (computer.fist.paper === true && player1.fist.rock === true)) {
      computer.wins++
      return 'You Lose!'
  } else if ((player1.fist.rock === true && computer.fist.scissors === true) || (player1.fist.scissors === true && computer.fist.paper === true) || (player1.fist.paper === true && computer.fist.rock === true)) {
      player1.wins++
      return 'You Win!'
  }
  }
}



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
rockButton.addEventListener('click', selectRock)
paperButton.addEventListener('click', selectPaper)
scissorsButton.addEventListener('click', selectScissors)
