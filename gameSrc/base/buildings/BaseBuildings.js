import Houses from "./Houses.js"
import ProductionBuildingGroup from "./ProductionBuildingGroup.js"
import InputProductionBuildingGroup from "./InputProductionBuildingGroup.js"

class BaseBuildings{
  constructor(){
    this.houses = new Houses(6, 1)
    this.farms = new ProductionBuildingGroup(10, 100, 10)
    this.lumbarYards = new InputProductionBuildingGroup(3, 3, 50, 3)
    this.scrapYards = new InputProductionBuildingGroup(1.5, 3, 50, 3)
  }
}

export default BaseBuildings
