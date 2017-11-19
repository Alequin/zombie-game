import EffortHandler from "./../../util/EffortHandler.js"
import Structure from "./../other/Structure.js"

class Traps extends Structure{
  constructor(productionPerEffort){
    super(productionPerEffort, Number.MAX_SAFE_INTEGER)
  }
}

export default Traps
