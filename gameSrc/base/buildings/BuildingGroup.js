import Construction from "./../other/Construction.js"
import Tracker from "./../../util/Tracker.js"

class BuildingGroup extends Construction{
  constructor(singleBuildingSize, effortPerConstruction, materialsPerConstruction){
    super(effortPerConstruction, materialsPerConstruction)
    if(singleBuildingSize < 1) throw new Error("Single size must be at least 1")
    this._singleBuildingSize = singleBuildingSize
  }

  usedSpace(){
    return this.getAmount() * this._singleBuildingSize
  }
}

export default BuildingGroup
