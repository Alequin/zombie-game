class Dice{
  constructor(min, max){
    this.min = min
    this.max = max
  }

  roll(){
    return Math.floor(Math.random() * ((this.max-this.min)+1) + this.min)
  }
}

export default Dice
