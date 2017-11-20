import Houses from "./Houses.js"
import {
  buildFarms,
  buildLumberYards,
  buildScrapYards
} from "./BuildingFactory.js"
import InputProductionBuildingGroup from "./InputProductionBuildingGroup.js"

class BaseBuildings{
  constructor(houses = 0, farms = 0, lumberYards = 0, scrapYards = 0){
    this.houses = new Houses(houses)
    this.farms = buildFarms(farms)
    this.lumberYards = buildLumberYards(lumberYards)
    this.scrapYards = buildScrapYards(scrapYards)
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
