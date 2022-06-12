// var Player = require('./Player.js')
// var player1 = require('./script.js')
// var computer = require('./script.js')
class Game {
  constructor() {
    this.player1 = new Player
    this.computer = new Player

  }
  randomFist() {
    var input = this.computerInput
      var options = ['rock', 'paper', 'scissors']
      for (var i = 0; i < options.length; i++) {
        var randFist = Math.floor(Math.random() * options.length)
        input = randFist
        if (options[input] === 'rock') {
          this.computer.selectRock();
          computerHand.innerHTML = computerImages[0]
        }
        else if (options[input] === 'paper') {
          this.computer.selectPaper();
          computerHand.innerHTML = computerImages[2]
        }
        else if (options[input] === 'scissors') {
          this.computer.selectScissors()
          computerHand.innerHTML = computerImages[1]
        }

      }
  }
  shoot() {
    if ((this.computer.fist.rock === true && this.player1.fist.rock === true) || (this.computer.fist.scissors === true && this.player1.fist.scissors === true) || (this.computer.fist.paper === true && this.player1.fist.paper === true)) {
      return 'It\'s a Draw!'
  } else if ((this.computer.fist.rock === true && this.player1.fist.scissors === true) || (this.computer.fist.scissors === true && this.player1.fist.paper === true) || (this.computer.fist.paper === true && this.player1.fist.rock === true)) {
      this.computer.wins++
      return 'You Lose!'
  } else if ((this.player1.fist.rock === true && this.computer.fist.scissors === true) || (this.player1.fist.scissors === true && this.computer.fist.paper === true) || (this.player1.fist.paper === true && this.computer.fist.rock === true)) {
      this.player1.wins++
      return 'You Win!'
  }
  }
}
