import EffortHandler from "./../../util/EffortHandler.js"

class Wall{
  constructor(productionPerEffort){
    this._materials = 0
    this.effort = new EffortHandler(Number.MAX_SAFE_INTEGER)
    this._productionPerEffort = productionPerEffort
  }

  countMaterials(){
    return this._materials
  }

  produce(){
    this._materials += this.effort.currentEffort() * this._productionPerEffort
    this.effort.reset()
  }

}

export default Wall
