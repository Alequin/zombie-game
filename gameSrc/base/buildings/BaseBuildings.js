import Houses from "./Houses.js"
import {
  buildFarms,
  buildLumberYards,
  buildScrapYards
} from "./BuildingFactory.js"
import InputProductionBuildingGroup from "./InputProductionBuildingGroup.js"

class BaseBuildings{
  constructor(){
    this.houses = new Houses()
    this.farms = buildFarms()
    this.lumberYards = buildLumberYards()
    this.scrapYards = buildScrapYards()
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
