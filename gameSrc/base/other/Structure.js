import EffortHandler from "./../../util/EffortHandler.js"

class Structure{
  constructor(effortPerProduction, materialsPerEffort, effortCapacity){
    this._input = 0
    this.effort = new EffortHandler(effortCapacity)
    this._effortPerProduction = effortPerProduction
    this._materialsPerEffort = materialsPerEffort
  }

  getEffortPerProduction(){
    return this._effortPerProduction
  }

  totalInput(){
    return this._input
  }

  calcInputFromCurrentEffort(){
    return this.effort.currentEffort() / this._effortPerProduction
  }

  calcMaterialsRequired(){
    return this.effort.currentEffort() * this._materialsPerEffort
  }

  produce(){
    this._input += this.calcInputFromCurrentEffort()
    this.effort.reset()
  }
}

export default Structure
