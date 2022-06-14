// var Player = require('./Player.js')
// var player1 = require('./script.js')
// var computer = require('./script.js')
class Game {
  constructor() {
    this.player1 = new Player('human', '😂')
    this.computer = new Player('computer', '🤖')
  }
  randomFistNormal() {
    var input = this.computerInput
    var options = ['rock', 'paper', 'scissors']
    for (var i = 0; i < options.length; i++) {
      var randFist = Math.floor(Math.random() * options.length)
      input = randFist
        if (options[input] === 'rock') {
          this.computer.takeTurn('rock')
          computerHand.innerHTML = computerImages[0]
        }
        else if (options[input] === 'paper') {
          this.computer.takeTurn('paper')
          computerHand.innerHTML = computerImages[2]
        }
        else if (options[input] === 'scissors') {
        this.computer.takeTurn('scissors')
          computerHand.innerHTML = computerImages[1]
        }
      }
  }
  randomFistExtra() {
    var input = this.computerInput
    var options = ['rock', 'paper', 'scissors', 'peace', 'hang']
    for (var i = 0; i < options.length; i++) {
      var randFist = Math.floor(Math.random() * options.length)
      input = randFist
        if (options[input] === 'rock') {
          this.computer.takeTurn('rock')
          computerHand.innerHTML = computerImages[0]
        }
        else if (options[input] === 'paper') {
          this.computer.takeTurn('paper')
          computerHand.innerHTML = computerImages[2]
        }
        else if (options[input] === 'scissors') {
        this.computer.takeTurn('scissors')
        computerHand.innerHTML = computerImages[1]
        }
        else if (options[input] === 'peace') {
        this.computer.takeTurn('peace')
        computerHand.innerHTML = computerImages[3]
        }
        else if (options[input] === 'hang') {
        this.computer.takeTurn('hang')
        computerHand.innerHTML = computerImages[4]
        }
      }
  }
  shootNormal() {
    if (this.player1.rock === false && this.player1.paper === false && this.player1.scissors === false) {
      this.computer.wins++
      playerHand.innerHTML = playerImages[3]
      return 'Select an Option!'
  } else if ((this.computer.rock === true && this.player1.rock === true) || (this.computer.scissors === true && this.player1.scissors === true) || (this.computer.paper === true && this.player1.paper === true)) {
      return 'It\'s a Draw!'
  } else if ((this.computer.rock === true && this.player1.scissors === true) || (this.computer.scissors === true && this.player1.paper === true) || (this.computer.paper === true && this.player1.rock === true)) {
      this.computer.wins++
      return 'You Lose!'
  } else if ((this.player1.rock === true && this.computer.scissors === true) || (this.player1.scissors === true && this.computer.paper === true) || (this.player1.paper === true && this.computer.rock === true)) {
      this.player1.wins++
      return 'You Win!'
  }
}
  shootExtra() {
    if (this.player1.rock === false && this.player1.paper === false && this.player1.scissors === false && this.player1.hang === false && this.player1.peace === false) {
      this.computer.wins++
      playerHand.innerHTML = playerImages[3]
      return 'Select an Option!'
  } else if ((this.computer.rock === true && this.player1.rock === true) || (this.computer.scissors === true && this.player1.scissors === true) || (this.computer.paper === true && this.player1.paper === true) || (this.computer.peace=== true && this.player1.peace=== true) || (this.computer.hang === true && this.player1.hang === true)) {
      return 'It\'s a Draw!'
  } else if ((this.computer.rock === true && (this.player1.scissors === true || this.player1.hang === true)) || (this.computer.scissors === true && (this.player1.paper === true || this.player1.hang === true)) || (this.computer.paper === true && (this.player1.rock === true || this.player1.peace === true)) || (this.computer.hang === true && (this.player1.paper === true || this.player1.peace === true)) || (this.computer.peace === true && (this.player1.scissors === true || this.player1.rock === true))) {
      this.computer.wins++
      return 'You Lose!'
  } else if ((this.player1.rock === true && (this.computer.scissors === true || this.computer.hang === true)) || (this.player1.scissors === true && (this.computer.paper === true || this.computer.hang === true)) || (this.this.player1.paper === true && (this.computer.rock === true || this.computer.peace === true)) || (this.player1.hang === true && (this.computer.paper === true || this.computer.peace === true)) || (this.player1.peace === true && (this.computer.scissors === true || this.computer.rock === true)))  {
      this.player1.wins++
      return 'You Win!'
  }
}
  newGameNormal() {
    this.randomFistNormal();
    resultArea.innerText = this.shootNormal();
    seeWinner();
    playerScore.innerText = `Wins: ${this.player1.wins}`
    computerScore.innerText =`Wins: ${this.computer.wins}`
    window.setTimeout(seeWinner, 2500)
    this.player1.selectEmpty();
  }

  newGameExtra() {
    this.randomFistExtra();
    resultArea.innerText = this.shootExtra();
    seeWinner();
    playerScore.innerText = `Wins: ${this.player1.wins}`
    computerScore.innerText =`Wins: ${this.computer.wins}`
    window.setTimeout(seeWinner, 2500)
    this.player1.selectEmpty();
  }
}
