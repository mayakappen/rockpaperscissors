class Player {
  constructor() {
    this.wins = []
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
    return this.fist
  }
  selectPaper() {
    this.fist.paper = true
    this.fist.rock = false
    this.fist.scissors = false
    return this.fist
  }
  selectScissors() {
    this.fist.scissors = true
    this.fist.paper = false
    this.fist.rock = false
    return this.fist
  }
};

var player1 = new Player
var computer = new Player
player1.selectPaper();
class Game {
  constructor() {
  this.wins = 0
  this.userInput = player1.fist
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
