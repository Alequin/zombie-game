import EffortHandler from "./../../util/EffortHandler.js"

class Construction{
  constructor(effortPerConstruction, add, remove){
    this.effort = new EffortHandler(Number.MAX_SAFE_INTEGER)
    this._add = add
    this._remove = remove
    this._effortPerConstruction = effortPerConstruction
  }

  _calcAmountToConstruct(){
    return this.effort.currentEffort() / this._effortPerConstruction
  }

  build(){
    const toBuild = this._calcAmountToConstruct()
    this._add(toBuild)
    this.effort.reset()
  }

  tearDown(){
    const toBuild = this._calcAmountToConstruct()
    this._remove(toBuild)
    this.effort.reset()
  }
}

export default Construction
