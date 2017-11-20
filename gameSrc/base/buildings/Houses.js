import BuildingGroup from "./BuildingGroup"
import { houseSettings } from "./../Settings.js"

class Houses extends BuildingGroup{
  constructor(){
    super(
      houseSettings.singleHouseSize,
      houseSettings.effortPerConstruction,
      houseSettings.materialsPerHouse
    )
  }

  totalPopulationCapacity(){
    return Houses.calcPossiblePopulationCapacity(this.count())
  }

  static calcPossiblePopulationCapacity(houses){
    return houseSettings.singleHouseCapacity * houses
  }
}

export default Houses
