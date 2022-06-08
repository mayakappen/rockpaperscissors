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
}
