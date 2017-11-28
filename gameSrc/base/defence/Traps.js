import { trapSettings } from "./../Settings.js"
import EffortHandler from "./../../util/EffortHandler.js"
import Construction from "./../other/Construction.js"
import PercentageDice from "./../../util/PercentageDice.js"

class Traps extends Construction{
  constructor(chanceToKillEnemies){
    super(
      trapSettings.effortPerConstruction,
      trapSettings.materialsPerConstruction
    )
    this._chanceToKill = new PercentageDice(chanceToKillEnemies)
  }

  calcNumberKilled(){
    return this._rollForNumberkilled(this._chanceToKill)
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
