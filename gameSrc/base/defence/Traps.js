import { trapSettings } from "./../Settings.js"
import EffortHandler from "./../../util/EffortHandler.js"
import Construction from "./../other/Construction.js"
import PercentageDice from "./../../util/PercentageDice.js"

class Traps extends Construction{
  constructor(){
    super(
      trapSettings.effortPerConstruction,
      trapSettings.materialsPerConstruction
    )
  }

  totalTraps(){
    return this.getAmount()
  }

  calcNumberKilled(){
    const die = new PercentageDice(trapSettings.chanceToKill)
    return this._rollForNumberkilled(die)
  }

  _rollForNumberkilled(die){
    let killed = 0
    for(let j=0; j<this.getAmount(); j++){
      if(die.chance()) killed += 1
    }
    return killed
  }

  calcMaxTraps(baseSize){
    return baseSize*4
  }
}

export default Traps
