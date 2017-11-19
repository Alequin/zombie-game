import Houses from "./Houses.js"
import ProductionBuildingGroup from "./ProductionBuildingGroup.js"
import InputProductionBuildingGroup from "./InputProductionBuildingGroup.js"

class BaseBuildings{
  constructor(){
    this.houses = new Houses(6, 1)
    this.farms = new ProductionBuildingGroup(10, 100, 10)
    this.lumbarYards = new InputProductionBuildingGroup(3)
    this.lumbarYards = new InputProductionBuildingGroup(1.5)
  }

}

export default BaseBuildings
