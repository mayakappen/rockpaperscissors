class Player {
  constructor(fist) {
    this.rock = false
    this.paper = false
    this.scissors = false
    fist = {
      rock: this.rock,
      paper: this.paper,
      scissors: this.scissors,
    }
    this.fist = fist
  }
  selectRock() {
    this.rock = true
    this.paper = false
    this.scissors = false
  }
  selectPaper() {
    this.paper = true
    this.rock = false
    this.scissors = false
  }
  selectScissors() {
    this.scissors = true
    this.paper = false
    this.rock = false
  }
};



class Game {
  constructor(user) {
    var user = new Player
    var computer = new Player
    var input = {}
    this.userInput = user.fist
    this.computerInput = [input]
  }
  randomFist() {
    var input = this.computerInput
      var options = ['rock', 'paper', 'scissors']
      for (var i = 0; i < options.length ; i++) {
        var randFist = Math.floor(Math.random() * options.length)
        input = randFist
        return options[input]
  }
}
}
