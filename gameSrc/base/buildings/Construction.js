import EffortHandler from "./../../util/EffortHandler.js"

class Construction{
  constructor(effortPerConstruction, add, remove){
    this.effort = new EffortHandler(Number.MAX_SAFE_INTEGER)
    this._add = add
    this._remove = remove
    this._effortPerConstruction = effortPerConstruction
  }
}

export default Construction
