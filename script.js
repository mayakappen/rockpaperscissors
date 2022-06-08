class Player {
  constructor() {
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



class Game {
  constructor() {
    var player1 = new Player
    this.userInput = player1.fist
  }
  randomFist() {
    var computer = new Player
    var input = this.computerInput
      var options = ['rock', 'paper', 'scissors']
      for (var i = 0; i < options.length ; i++) {
        var randFist = Math.floor(Math.random() * options.length)
        input = randFist
        if (options[input] === 'rock') {
          computer.selectRock();

        }
        else if (options[input] === 'paper') {
          computer.selectPaper();
        }
        else if (options[input] === 'scissors') {
          computer.selectScissors()
        }
        return computer.fist

  }
  }
}
