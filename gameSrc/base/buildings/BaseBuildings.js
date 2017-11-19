import Houses from "./Houses.js"
import ProductionBuildingGroup from "./ProductionBuildingGroup.js"
import InputProductionBuildingGroup from "./InputProductionBuildingGroup.js"

class BaseBuildings{
  constructor({ houses, farms, lumberYards, scrapYards }){
    this.houses = new Houses(
      houses.singleHouseCapacity,
      houses.singleHouseSize
    )

    this.farms = new ProductionBuildingGroup(
      farms.productionPerEffort,
      farms.singleBuildingEffortCapacity,
      farms.singleBuildingSize
    )

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
