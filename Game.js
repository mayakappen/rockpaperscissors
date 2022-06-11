// var Player = require('./Player.js')
// var player1 = require('./script.js')
// var computer = require('./script.js')
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
