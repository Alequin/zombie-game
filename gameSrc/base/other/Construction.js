import EffortHandler from "./../../util/EffortHandler.js"
import Tracker from "./../../util/Tracker.js"

class Construction{
  constructor(effortPerConstruction, materialsPerConstruction, add, remove){
    this.effort = new EffortHandler(Number.MAX_SAFE_INTEGER)
    this._amount = new Tracker(0, 0, Number.MAX_SAFE_INTEGER)
    this._add = add
    this._remove = remove
    this._effortPerConstruction = effortPerConstruction
    this._materialsPerConstruction = materialsPerConstruction
  }

  _calcAmountToConstruct(){
    return this.effort.currentEffort() / this._effortPerConstruction
  }

  getEffortPerProduction(){
    return this._effortPerConstruction
  }

  build(){
    const toBuild = this._calcAmountToConstruct()
    this._add(toBuild)
    this.effort.reset()
  }

  calcMaterialsToBuild(){
    return this._calcAmountToConstruct() * this._materialsPerConstruction
  }

  tearDown(){
    const toRemove = this._calcAmountToConstruct()
    this._remove(toRemove)
    this.effort.reset()
  }

  calcMaterialsGainedFromTearDown(){
    return Math.floor((this._calcAmountToConstruct() * this._materialsPerConstruction)*0.75)
  }
}

export default Construction
