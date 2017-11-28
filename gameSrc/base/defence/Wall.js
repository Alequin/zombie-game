import { wallSettings } from "./../Settings.js"
import EffortHandler from "./../../util/EffortHandler.js"
import Construction from "./../other/Construction.js"

class Wall extends Construction{
  constructor(){
    super(
      wallSettings.effortPerConstruction,
      wallSettings.materialsPerConstruction
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
