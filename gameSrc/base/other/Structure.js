import Construction from "./Construction.js"

class Structure extends Construction{
  constructor(effortPerProduction, materialsPerEffort){
    super(effortPerProduction, materialsPerEffort, null, null)
    this._add = this.addToInput.bind(this)
    this._remove = this.removeFromInput.bind(this)
    this._input = 0
  }

  totalInput(){
    return this._input
  }

  addToInput(amount){
    if(amount < 0) throw new Error("Amount cannot be negative")
    this._input += amount
  }

  removeFromInput(amount){
    if(amount < 0) throw new Error("Amount cannot be negative")
    const result = this._input - amount
    if(result < 0) throw new Error("Cannot remove more buildings than exist")
    this._input = result
  }
}

export default Structure
