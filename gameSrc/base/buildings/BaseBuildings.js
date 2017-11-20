import Houses from "./Houses.js"
import { buildFarms } from "./BuildingFactory.js"
import InputProductionBuildingGroup from "./InputProductionBuildingGroup.js"

class BaseBuildings{
  constructor({ farms, lumberYards, scrapYards }){
    this.houses = new Houses()
    this.farms = buildFarms()

    this.lumberYards = new InputProductionBuildingGroup(
      lumberYards.productionRatio,
      lumberYards.productionPerEffort,
      lumberYards.singleBuildingEffortCapacity,
      lumberYards.singleBuildingSize
    )

    this.scrapYards = new InputProductionBuildingGroup(
      scrapYards.productionRatio,
      scrapYards.productionPerEffort,
      scrapYards.singleBuildingEffortCapacity,
      scrapYards.singleBuildingSize
    )
  }

  totalSpaceUsed(){
    let space = 0
    for(let key of Object.keys(this)){
      space += this[key].usedSpace()
    }
    return space
  }
}

export default BaseBuildings
