import EffortHandler from "./../../util/EffortHandler.js"
import Structure from "./../other/Structure.js"
import Dice from "./../../util/Dice.js"

class Traps extends Structure{
  constructor(productionPerEffort, chanceToKill){
    super(productionPerEffort, Number.MAX_SAFE_INTEGER)
    this._chanceToKill = chanceToKill
  }

  totalTraps(){
    return this.totalInput()
  }

  calcNumberKilled(){
    const die = new Dice(1, 100)
    return this._rollForNumberkilled(die)
  }

  _rollForNumberkilled(die){
    let killed = 0
    for(let j=0; j<this._input; j++){
      if(die.roll() <= 20) killed += 1
    }
    return killed
  }

  calcMaxTraps(baseSize){
    return baseSize*4
  }
}

export default Traps
