import BuildingGroup from "./BuildingGroup"

class Houses extends BuildingGroup{
  constructor(singleHouseCapacity){
    super(2)
    this._singleHouseCapacity = singleHouseCapacity
  }

  totalCapacity(){
    return this._singleHouseCapacity * this._count
  }
}

export default Houses
