import Construction from "./Construction.js"
import Tracker from "./../../util/Tracker.js"

class Structure extends Construction{
  constructor(initialInput, effortPerConstruction, materialsPerConstruction){
    super(effortPerConstruction, materialsPerConstruction)
    this.add(initialInput)
  }
}

export default Structure
