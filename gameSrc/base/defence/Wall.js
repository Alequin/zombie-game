import EffortHandler from "./../../util/EffortHandler.js"
import Structure from "./../other/Structure.js"

class Wall extends Structure{
  constructor(productionPerEffort){
    super(productionPerEffort, Number.MAX_SAFE_INTEGER)
  }

  calcDefence(baseSize){
    return Math.floor((Math.pow(this._input,0.625))/((baseSize/500*0.75+0.25)/3.7))
  }
}

export default Wall
