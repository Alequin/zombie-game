import BuildingGroup from "./BuildingGroup"

class Houses extends BuildingGroup{
  constructor(singleHouseCapacity){
    super(2)
    this._singleHouseCapacity = singleHouseCapacity
  }
}

export default Houses
