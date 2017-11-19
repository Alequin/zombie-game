import BuildingGroup from "./BuildingGroup"

class Houses extends BuildingGroup{
  constructor(singleHouseCapacity, singleHouseSize){
    super(singleHouseSize)
    if(singleHouseCapacity < 1){
      throw new Error("House capacity cannot be less than 1")
    }
    this._singleHouseCapacity = singleHouseCapacity
  }

  totalCapacity(){
    return this._singleHouseCapacity * this._count
  }
}

export default Houses
