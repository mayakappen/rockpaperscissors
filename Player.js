

class Player {
  constructor(name, token) {
    this.name = name
    this.token = token
    this.wins = 0
    this.rock = false
    this.paper = false
    this.scissors = false
    this.hang = false
    this.peace = false
  }
  takeTurn(selection) {
    if (selection === 'rock') {
      this.rock = true
    } else if (selection === 'paper') {
      this.paper = true
    } else if (selection === 'scissors') {
      this.scissors = true
    } else if (selection === 'hang') {
      this.hang = true
    } else if (selection === 'peace') {
      this.peace = true
    }
  }
   selectEmpty() {
   this.rock = false
   this.paper = false
   this.scissors = false
   this.hang = false
   this.peace = false
  }
 };
