import BuildingGroup from "./BuildingGroup"
import { houseSettings } from "./../Settings.js"

class Houses extends BuildingGroup{
  constructor(
    singleHouseCapacity, singleHouseSize, effortPerConstruction, materialsPerHouse
  ){
    super(
      singleHouseSize,
      effortPerConstruction,
      materialsPerHouse
    )
    this._singleHouseCapacity = singleHouseCapacity
  }

  totalPopulationCapacity(){
    return Houses.calcPossiblePopulationCapacity(
      this.getAmount(),
      this._singleHouseCapacity
    )
  }

  static calcPossiblePopulationCapacity(houses, singleHouseCapacity){
    return singleHouseCapacity * houses
  }
}

export default Houses
