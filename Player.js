

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
  selectEmpty() {
    this.fist.rock = false
    this.fist.paper = false
    this.fist.scissors = false
  }
};
