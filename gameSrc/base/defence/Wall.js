import EffortHandler from "./../../util/EffortHandler.js"
import Structure from "./../other/Structure.js"

class Wall extends Structure{
  constructor(effortPerProduction, materialsPerEffort){
    super(effortPerProduction, materialsPerEffort, Number.MAX_SAFE_INTEGER)
  }

  calcCurrentDefence(baseSize){
    return Wall.calcDefence(baseSize, this._input)
  }

  static calcDefence(baseSize, materials){
    return Math.floor((Math.pow(materials,0.625))/((baseSize/500*0.75+0.25)/3.7))
  }
}

export default Wall
