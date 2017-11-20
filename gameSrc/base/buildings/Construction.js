import EffortHandler from "./../../util/EffortHandler.js"

class Construction{
  constructor(effortPerConstruction, materialsPerEffort, add, remove){
    this.effort = new EffortHandler(Number.MAX_SAFE_INTEGER)
    this._add = add
    this._remove = remove
    this._effortPerConstruction = effortPerConstruction
    this._materialsPerEffort = materialsPerEffort
  }

  _calcAmountToConstruct(){
    return this.effort.currentEffort() / this._effortPerConstruction
  }

  build(){
    const toBuild = this._calcAmountToConstruct()
    this._add(toBuild)
    this.effort.reset()
  }

  calcMaterialsToBuild(){
    return this.effort.currentEffort() * this._materialsPerEffort
  }

  tearDown(){
    const toRemove = this._calcAmountToConstruct()
    this._remove(toRemove)
    this.effort.reset()
  }

  calcMaterialsGainedFromTearDown(){
    return Math.floor((this.effort.currentEffort() * this._materialsPerEffort)*0.75)
  }
}

export default Construction
