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

  calcRequiredInput(){
    return this.effort.currentEffort() * this._productionPerEffort
  }

  produce(){
    this._materials += this.calcRequiredInput()
    this.effort.reset()
  }

  calcDefence(baseSize){
    return Math.floor((Math.pow(this._materials,0.625))/((baseSize*0.75+0.25)/3.7))

  }

}

export default Wall
