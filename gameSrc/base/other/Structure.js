import Construction from "./Construction.js"
import Tracker from "./../../util/Tracker.js"

class Structure extends Construction{
  constructor(initialInput, effortPerConstruction, materialsPerConstruction){
    super(effortPerConstruction, materialsPerConstruction, null, null)
    this._add = this.addToInput.bind(this)
    this._remove = this.removeFromInput.bind(this)
    this._input = new Tracker(initialInput, 0, Number.MAX_SAFE_INTEGER)
  }

  totalInput(){
    return this._input.get()
  }

  addToInput(amount){
    this._input.inc(amount)
  }

  removeFromInput(amount){
    this._input.dec(amount)
  }
}

export default Structure
