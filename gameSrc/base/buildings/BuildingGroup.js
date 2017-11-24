import Construction from "./../other/Construction.js"
import Tracker from "./../../util/Tracker.js"

class BuildingGroup{
  constructor(singleBuildingSize, effortPerConstruction, materialsPerConstruction){
    if(singleBuildingSize < 1) throw new Error("Single size must be at least 1")

    this._count = new Tracker(0, 0, Number.MAX_SAFE_INTEGER)
    this._singleBuildingSize = singleBuildingSize

    this.construction = new Construction(
      effortPerConstruction,
      materialsPerConstruction,
      this.add.bind(this),
      this.remove.bind(this)
    )
  }

  count(){
    return this._count.get()
  }

  add(amount){
    this._count.inc(amount)
  }

  remove(amount){
    this._count.dec(amount)
  }

  usedSpace(){
    return this._count.get() * this._singleBuildingSize
  }
}

export default BuildingGroup
