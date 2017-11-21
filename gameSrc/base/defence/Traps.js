import { trapSettings } from "./../Settings.js"
import EffortHandler from "./../../util/EffortHandler.js"
import Structure from "./../other/Structure.js"
import PercentageDice from "./../../util/PercentageDice.js"

class Traps extends Structure{
  constructor(trapCount = 0){
    super(trapSettings.effortPerConstruction, trapSettings.materialsPerConstruction, Number.MAX_SAFE_INTEGER)
    this._input = trapCount
  }

  totalTraps(){
    return this.totalInput()
  }

  calcNumberKilled(){
    const die = new PercentageDice(trapSettings.chanceToKill)
    return this._rollForNumberkilled(die)
  }

  _rollForNumberkilled(die){
    let killed = 0
    for(let j=0; j<this._input; j++){
      if(die.chance()) killed += 1
    }
    return killed
  }

  calcMaxTraps(baseSize){
    return baseSize*4
  }
}

export default Traps
