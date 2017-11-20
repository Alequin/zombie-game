import EffortHandler from "./../../util/EffortHandler.js"

class Structure{
  constructor(effortPerProduction, effortCapacity){
    this._input = 0
    this.effort = new EffortHandler(effortCapacity)
    this._effortPerProduction = effortPerProduction
  }

  getEffortPerProduction(){
    return this._effortPerProduction
  }

  totalInput(){
    return this._input
  }

  calcRequiredInput(){
    return this.effort.currentEffort() / this._effortPerProduction
  }

  produce(){
    this._input += this.calcRequiredInput()
    this.effort.reset()
  }
}

export default Structure
