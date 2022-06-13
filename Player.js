

class Player {
  constructor() {
    this.wins = 0
    this.rock = false
    this.paper = false
    this.scissors = false

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
  selectEmpty() {
    this.rock = false
    this.paper = false
    this.scissors = false
  }
};
