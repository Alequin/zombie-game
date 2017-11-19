import EffortHandler from "./../../util/EffortHandler.js"

class Traps{
  constructor(productionPerEffort){
    this._count = 0
    this.effort = new EffortHandler(Number.MAX_SAFE_INTEGER)
    this._productionPerEffort = productionPerEffort
  }
}

export default Traps
