import Construction from "./Construction.js"
import Tracker from "./../../util/Tracker.js"

class Structure extends Construction{
  constructor(initialInput, effortPerConstruction, materialsPerConstruction){
    super(effortPerConstruction, materialsPerConstruction, null, null)
    this.add(initialInput)
  }

  totalInput(){
    return this.getAmount()
  }

  addToInput(amount){
    this.add(amount)
  }

  removeFromInput(amount){
    this.remove(amount)
  }
}

export default Structure
