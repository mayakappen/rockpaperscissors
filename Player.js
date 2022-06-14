

class Player {
  constructor(name, token) {
    this.name = name
    this.token = token
    this.wins = 0
    this.rock = false
    this.paper = false
    this.scissors = false
  }
  takeTurn(selection) {
    this.selectEmpty()
    if (selection === 'rock') {
      this.rock = true
    } else if (selection === 'paper') {
      this.paper = true
    } else if (selection === 'scissors') {
      this.scissors = true
    }
  }
   selectEmpty() {
   this.rock = false
   this.paper = false
   this.scissors = false
  }
 };
