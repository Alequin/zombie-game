import BuildingGroup from "./BuildingGroup"
import { houseSettings } from "./../Settings.js"

class Houses extends BuildingGroup{
  constructor(count = 0){
    super(
      houseSettings.singleHouseSize,
      houseSettings.effortPerConstruction,
      houseSettings.materialsPerHouse
    )
    this.add(count)
  }

  totalPopulationCapacity(){
    return Houses.calcPossiblePopulationCapacity(this.getAmount())
  }

  static calcPossiblePopulationCapacity(houses){
    return houseSettings.singleHouseCapacity * houses
  }
}

export default Houses
