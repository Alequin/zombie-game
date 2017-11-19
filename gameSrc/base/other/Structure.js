import EffortHandler from "./../../util/EffortHandler.js"

class Structure{
  constructor(productionPerEffort, effortCapacity){
    this._input = 0
    this.effort = new EffortHandler(effortCapacity)
    this._productionPerEffort = productionPerEffort
  }

  totalInput(){
    return this._input
  }

  calcRequiredInput(){
    return this.effort.currentEffort() * this._productionPerEffort
  }

  produce(){
    this._input += this.calcRequiredInput()
    this.effort.reset()
  }
}

export default Structure
