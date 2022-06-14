// var Player = require('./Player.js')
// var player1 = require('./script.js')
// var computer = require('./script.js')
class Game {
  constructor() {
    this.player1 = new Player('human', '😂')
    this.computer = new Player('computer', '🤖')
    this.mode = ['rock', 'paper', 'scissors']
  }

  randomFist() {
  this.computer.selectEmpty()
  var input = Math.floor(Math.random() * this.mode.length)
    if (this.mode[input] === 'rock') {
      this.computer.takeTurn('rock')
      computerHand.innerHTML = computerImages[0]
  } else if (this.mode[input] === 'paper') {
      this.computer.takeTurn('paper')
      computerHand.innerHTML = computerImages[2]
  } else if (this.mode[input] === 'scissors') {
      this.computer.takeTurn('scissors')
      computerHand.innerHTML = computerImages[1]
  } else if (this.mode[input] === 'peace') {
      this.computer.takeTurn('peace')
      computerHand.innerHTML = computerImages[4]
  } else if (this.mode[input] === 'hang') {
      this.computer.takeTurn('hang')
      computerHand.innerHTML = computerImages[3]
    }
  }
  shoot() {
    if (this.player1.rock === false && this.player1.paper === false && this.player1.scissors === false && this.player1.hang === false && this.player1.peace === false) {
      this.computer.wins++
      playerHand.innerHTML = playerImages[3]
      return 'Select an Option!'
  } else if ((this.computer.rock === true && this.player1.rock === true) || (this.computer.scissors === true && this.player1.scissors === true) || (this.computer.paper === true && this.player1.paper === true) || (this.computer.peace=== true && this.player1.peace=== true) || (this.computer.hang === true && this.player1.hang === true)) {
      return 'It\'s a Draw!'
  } else if ((this.computer.rock === true && (this.player1.scissors === true || this.player1.hang === true)) || (this.computer.scissors === true && (this.player1.paper === true || this.player1.hang === true)) || (this.computer.paper === true && (this.player1.rock === true || this.player1.peace === true)) || (this.computer.hang === true && (this.player1.paper === true || this.player1.peace === true)) || (this.computer.peace === true && (this.player1.scissors === true || this.player1.rock === true))) {
      this.computer.wins++
      return 'You Lose!'
  } else if ((this.player1.rock === true && (this.computer.scissors === true || this.computer.hang === true)) || (this.player1.scissors === true && (this.computer.paper === true || this.computer.hang === true)) || (this.player1.paper === true && (this.computer.rock === true || this.computer.peace === true)) || (this.player1.hang === true && (this.computer.paper === true || this.computer.peace === true)) || (this.player1.peace === true && (this.computer.scissors === true || this.computer.rock === true)))  {
      this.player1.wins++
      return 'You Win!'
  }
  this.computer.selectEmpty();
}

  newGame() {
    this.computer.selectEmpty()
    this.randomFist();
    resultArea.innerText = this.shoot();
    seeWinner();
    playerScore.innerText = `Wins: ${this.player1.wins}`
    computerScore.innerText =`Wins: ${this.computer.wins}`
    window.setTimeout(seeWinner, 2500)
    this.player1.selectEmpty();
  }
  toggleGameMode(mode) {
    if (mode === 'spicy') {
      this.mode = ['rock', 'paper', 'scissors', 'peace', 'hang']
      console.log(this.mode)
  } else if (mode === 'normal') {
    this.mode = ['rock', 'paper', 'scissors']
    console.log(this.mode)
  }
}
}
