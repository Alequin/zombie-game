import Dice from "./Dice.js"

class IntegerDice extends Dice{
  constructor(min, max){
    super(min, max)
    if(min % 1 !== 0 || max % 1 !== 0)
      throw new Error(`Given values must be integers: min ${min} / max ${max}`)
  }

  roll(){
    return Math.floor(super.roll())
  }
}

export default Dice

export const newIntegerDice = function(min, max){
  return new IntegerDice(min, max)
}
