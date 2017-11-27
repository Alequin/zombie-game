import { wallSettings } from "./../Settings.js"
import EffortHandler from "./../../util/EffortHandler.js"
import Structure from "./../other/Structure.js"

class Wall extends Structure{
  constructor(materials = 0){
    super(
      materials,
      wallSettings.effortPerConstruction,
      wallSettings.materialsPerConstruction,
      Number.MAX_SAFE_INTEGER
    )
  }

  calcCurrentDefence(baseSize){
    return Wall.calcDefence(baseSize, this.getAmount())
  }

  static calcDefence(baseSize, materials){
    return Math.floor((Math.pow(materials,0.625))/((baseSize/500*0.75+0.25)/3.7))
  }
}

export default Wall
