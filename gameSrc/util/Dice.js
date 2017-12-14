class Dice{
  constructor(min, max){
    this.min = min
    this.max = max
  }

  roll(){
    return Math.random() * ((this.max-this.min)+1) + this.min
  }
}

export default Dice

export const newDice = function(min, max){
  return new Dice(min, max)
}
